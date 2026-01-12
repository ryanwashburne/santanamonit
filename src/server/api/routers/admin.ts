import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
	adminProcedure,
	createTRPCRouter,
	publicProcedure,
} from "@/server/api/trpc";
import { generateAdminToken } from "@/server/auth/admin";

const ADMIN_PASSWORD = "amanda";

export const adminRouter = createTRPCRouter({
	login: publicProcedure
		.input(z.object({ password: z.string() }))
		.mutation(({ input }) => {
			if (input.password !== ADMIN_PASSWORD) {
				throw new TRPCError({
					code: "UNAUTHORIZED",
					message: "Invalid password",
				});
			}

			return { token: generateAdminToken() };
		}),

	verify: adminProcedure.query(() => {
		return { isAdmin: true };
	}),

	getAllResponses: adminProcedure.query(async ({ ctx }) => {
		const responses = await ctx.db.rsvpResponse.findMany({
			orderBy: { updatedAt: "desc" },
		});
		return responses;
	}),
});
