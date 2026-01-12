import { createHmac } from "node:crypto";
import { env } from "@/env";

export function generateAdminToken(): string {
	return createHmac("sha256", env.SECRET_ADMIN_KEY)
		.update("admin-session")
		.digest("hex");
}

export function verifyAdminToken(token: string): boolean {
	const expectedToken = generateAdminToken();
	return token === expectedToken;
}
