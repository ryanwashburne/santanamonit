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

export const rsvpRouter = createTRPCRouter({
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

			for (const row of dataRows) {
				const firstName = row[5] ?? "";
				const lastName = row[6] ?? "";

				// Support multiple last names separated by " / " (e.g., "Santana / Kenneth")
				const lastNameVariants = lastName
					.split(" / ")
					.map((name) => normalizeString(name));
				const lastNameMatches = lastNameVariants.includes(normalizedLastName);

				if (
					normalizeString(firstName) === normalizedFirstName &&
					lastNameMatches
				) {
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
