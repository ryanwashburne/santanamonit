import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

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
	firstName: string;
	lastName: string;
	isPlaceholder: boolean; // true if this is a plus one slot (no last name)
};

function loadCSVData() {
	const csvPath = path.join(
		process.cwd(),
		"private",
		"Wedding Full - Guest List.csv",
	);
	const content = fs.readFileSync(csvPath, "utf-8");
	return parseCSV(content).slice(7); // Data starts at row 8
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

			const normalizedInputFirst = normalizeString(input.firstName);
			const normalizedInputLast = normalizeString(input.lastName);

			// First, find the requester and get their group
			let requesterGroup: number | null = null;
			for (const row of dataRows) {
				const firstName = (row[5] ?? "").trim();
				const lastName = (row[6] ?? "").trim();

				const firstNameVariants = getFirstNameVariants(firstName);
				const lastNameVariants = lastName
					.split(" / ")
					.map((name) => normalizeString(name));

				if (
					firstNameVariants.includes(normalizedInputFirst) &&
					lastNameVariants.includes(normalizedInputLast)
				) {
					requesterGroup = Number.parseInt(row[11] ?? "0", 10);
					break;
				}
			}

			if (requesterGroup === null) {
				return [];
			}

			// Now get all other members in that group (excluding the requester)
			const members: GroupMember[] = [];
			for (const row of dataRows) {
				const rowGroup = Number.parseInt(row[11] ?? "0", 10);
				if (rowGroup !== requesterGroup) continue;

				const firstName = (row[5] ?? "").trim();
				const lastName = (row[6] ?? "").trim();

				// Skip the requester (empty rows won't match anyway)
				const firstNameVariants = getFirstNameVariants(firstName);
				const lastNameVariants = lastName
					.split(" / ")
					.map((name) => normalizeString(name));

				if (
					firstNameVariants.includes(normalizedInputFirst) &&
					lastNameVariants.includes(normalizedInputLast)
				) {
					continue;
				}

				members.push({
					firstName,
					lastName,
					isPlaceholder: !lastName, // Plus one if no last name
				});
			}

			return members;
		}),

	getGroupResponses: publicProcedure
		.input(z.object({ group: z.number() }))
		.query(async ({ ctx, input }) => {
			const dataRows = loadCSVData();
			const memberKeys: { firstName: string; lastName: string }[] = [];

			for (const row of dataRows) {
				const rowGroup = Number.parseInt(row[11] ?? "0", 10);
				if (rowGroup !== input.group) continue;

				const firstName = (row[5] ?? "").trim();
				const lastName = (row[6] ?? "").trim();

				// Only fetch responses for defined members (have both names)
				if (firstName && lastName) {
					memberKeys.push({ firstName, lastName });
				}
			}

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

	submitResponse: publicProcedure
		.input(
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
		)
		.mutation(async ({ ctx, input }) => {
			const response = await ctx.db.rsvpResponse.upsert({
				where: {
					firstName_lastName: {
						firstName: input.firstName,
						lastName: input.lastName,
					},
				},
				create: {
					firstName: input.firstName,
					lastName: input.lastName,
					responses: input.responses,
				},
				update: {
					responses: input.responses,
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
			const csvPath = path.join(
				process.cwd(),
				"private",
				"Wedding Full - Guest List.csv",
			);
			const content = fs.readFileSync(csvPath, "utf-8");
			const rows = parseCSV(content);

			// CSV structure: data starts at row 8 (index 7)
			// Column 5: First Name, Column 6: Last Name, Column 11: Group
			const dataRows = rows.slice(7);

			const normalizedFirstName = normalizeString(input.firstName);
			const normalizedLastName = normalizeString(input.lastName);

			for (let i = 0; i < dataRows.length; i++) {
				const row = dataRows[i];
				if (!row) continue;

				const firstName = row[5] ?? "";
				const lastName = row[6] ?? "";

				// Support multiple names separated by " / " and space-separated names
				const firstNameVariants = getFirstNameVariants(firstName);
				const lastNameVariants = lastName
					.split(" / ")
					.map((name) => normalizeString(name));

				const firstNameMatches =
					firstNameVariants.includes(normalizedFirstName);
				const lastNameMatches = lastNameVariants.includes(normalizedLastName);

				if (firstNameMatches && lastNameMatches) {
					const group = Number.parseInt(row[11] ?? "0", 10);
					const tag = (row[7] ?? "guest").trim().toLowerCase();

					return {
						found: true as const,
						firstName: firstName.trim(),
						lastName: lastName.trim(),
						group,
						tag,
					};
				}
			}

			return {
				found: false as const,
			};
		}),
});
