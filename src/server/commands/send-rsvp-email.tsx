import {
	EmailTemplate,
	type RSVPEmailPayload,
} from "@/components/email-template";
import { env } from "@/env";
import { resend } from "@/server/lib/resend";

export const sendRSVPEmail = async (input: RSVPEmailPayload) => {
	try {
		console.log("Sending RSVP email", input);
		const to =
			env.NODE_ENV === "production"
				? "santanamonit@gmail.com"
				: "ryan.washburne@gmail.com";
		const email = await resend.emails.send({
			to,
			from: "no-reply@washburne.dev",
			subject: "[santanamonit] New Wedding RSVP",
			react: EmailTemplate(input),
		});
		console.log("Email sent", email);
	} catch (e) {
		console.error("Error sending email", e instanceof Error ? e.message : e);
	}
};
