import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { sendRSVPEmail } from "@/server/commands/send-rsvp-email";

// Column indices for the CSV file
const COL = {
	DISPLAY_NAME: 5,
	FIRST_NAME: 6,
	LAST_NAME: 7,
	TAG: 8,
	GROUP: 12,
} as const;

function parseCSV(content: string): string[][] {
	const lines = content.split("\n");
	return lines.map((line) => line.split(","));
}

function normalizeString(str: string): string {
	return str.trim().toLowerCase();
}

// Titles/honorifics to ignore when matching first names
const IGNORED_TITLES = new Set([
	"tito",
	"tita",
	"ate",
	"lola",
	"grandma",
	"aunt",
	"uncle",
]);

function getFirstNameVariants(firstName: string): string[] {
	// Split on " / " for explicit variants, then strip honorific titles
	const variants: string[] = [];
	const slashVariants = firstName.split(" / ");

	for (const variant of slashVariants) {
		const normalized = normalizeString(variant);
		variants.push(normalized);

		// Remove honorific titles and add remaining name as variant
		const words = normalized.split(/\s+/);
		const filteredWords = words.filter((word) => !IGNORED_TITLES.has(word));
		if (filteredWords.length > 0 && filteredWords.length < words.length) {
			variants.push(filteredWords.join(" "));
		}
	}

	return variants;
}

type GroupMember = {
	displayName: string;
	firstName: string;
	lastName: string;
	isPlaceholder: boolean; // true if this is a plus one slot (no last name)
};

type ParsedRow = {
	displayName: string;
	firstName: string;
	lastName: string;
	tag: string;
	group: number;
};

function loadCSVData() {
	const csvPath = path.join(process.cwd(), "private", "Wedding Full.csv");
	const content = fs.readFileSync(csvPath, "utf-8");
	return parseCSV(content).slice(7); // Data starts at row 8
}

function parseRow(row: string[]): ParsedRow {
	return {
		displayName: (row[COL.DISPLAY_NAME] ?? "").trim(),
		firstName: (row[COL.FIRST_NAME] ?? "").trim(),
		lastName: (row[COL.LAST_NAME] ?? "").trim(),
		tag: (row[COL.TAG] ?? "guest").trim().toLowerCase(),
		group: Number.parseInt(row[COL.GROUP] ?? "0", 10),
	};
}

function getLastNameVariants(lastName: string): string[] {
	return lastName.split(" / ").map(normalizeString);
}

function matchesName(
	row: ParsedRow,
	firstName: string,
	lastName: string,
): boolean {
	const firstNameVariants = getFirstNameVariants(row.firstName);
	const lastNameVariants = getLastNameVariants(row.lastName);
	return (
		firstNameVariants.includes(normalizeString(firstName)) &&
		lastNameVariants.includes(normalizeString(lastName))
	);
}

export const rsvpRouter = createTRPCRouter({
	getGroupMembers: publicProcedure
		.input(
			z.object({
				firstName: z.string().min(1),
				lastName: z.string().min(1),
			}),
		)
		.query(({ input }): GroupMember[] => {
			const dataRows = loadCSVData();
			const parsedRows = dataRows.map(parseRow);

			// Find the requester and get their group
			const requester = parsedRows.find((row) =>
				matchesName(row, input.firstName, input.lastName),
			);

			if (!requester) {
				return [];
			}

			// Get all other members in that group (excluding the requester)
			return parsedRows
				.filter(
					(row) =>
						row.group === requester.group &&
						!matchesName(row, input.firstName, input.lastName),
				)
				.map((row) => ({
					displayName: row.displayName,
					firstName: row.firstName,
					lastName: row.lastName,
					isPlaceholder: !row.lastName,
				}));
		}),

	getGroupResponses: publicProcedure
		.input(z.object({ group: z.number() }))
		.query(async ({ ctx, input }) => {
			const parsedRows = loadCSVData().map(parseRow);

			// Only fetch responses for defined members (have both names)
			const memberKeys = parsedRows
				.filter(
					(row) => row.group === input.group && row.firstName && row.lastName,
				)
				.map((row) => ({ firstName: row.firstName, lastName: row.lastName }));

			const responses = await ctx.db.rsvpResponse.findMany({
				where: {
					OR: memberKeys.map((key) => ({
						firstName: key.firstName,
						lastName: key.lastName,
					})),
				},
			});

			return responses;
		}),

	submitGroupResponses: publicProcedure
		.input(
			z.object({
				submittedBy: z.string().min(1), // "FirstName LastName" of person submitting
				members: z.array(
					z.object({
						firstName: z.string().min(1),
						lastName: z.string().min(1),
						responses: z.record(
							z.string(),
							z.object({
								attending: z.boolean().nullable(),
								answer: z.string().optional(),
							}),
						),
					}),
				),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const results = await Promise.all(
				input.members.map((member) =>
					ctx.db.rsvpResponse.upsert({
						where: {
							firstName_lastName: {
								firstName: member.firstName,
								lastName: member.lastName,
							},
						},
						create: {
							firstName: member.firstName,
							lastName: member.lastName,
							responses: member.responses,
							submittedBy: input.submittedBy,
						},
						update: {
							responses: member.responses,
							submittedBy: input.submittedBy,
						},
					}),
				),
			);

			await sendRSVPEmail(input);

			return results;
		}),

	getResponse: publicProcedure
		.input(
			z.object({
				firstName: z.string().min(1),
				lastName: z.string().min(1),
			}),
		)
		.query(async ({ ctx, input }) => {
			const response = await ctx.db.rsvpResponse.findUnique({
				where: {
					firstName_lastName: {
						firstName: input.firstName,
						lastName: input.lastName,
					},
				},
			});
			return response;
		}),

	lookupGuest: publicProcedure
		.input(
			z.object({
				firstName: z.string().min(1),
				lastName: z.string().min(1),
			}),
		)
		.mutation(({ input }) => {
			const parsedRows = loadCSVData().map(parseRow);

			const guest = parsedRows.find((row) =>
				matchesName(row, input.firstName, input.lastName),
			);

			if (guest) {
				return {
					found: true as const,
					displayName: guest.displayName,
					firstName: guest.firstName,
					lastName: guest.lastName,
					group: guest.group,
					tag: guest.tag,
				};
			}

			return {
				found: false as const,
			};
		}),
});
