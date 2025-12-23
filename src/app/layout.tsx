import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Providers from "@/app/providers";

export const metadata: Metadata = {
	title: "The Monits",
	description: "TODO",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={geist.className}>
				<Providers>{children}</Providers>
				<Analytics />
			</body>
		</html>
	);
}
