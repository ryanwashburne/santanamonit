import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Puritan } from "next/font/google";
import localFont from "next/font/local";
import Providers from "@/app/providers";
import Header from "@/components/header";

export const metadata: Metadata = {
	title: "The Monits",
	description: "TODO",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const rockAttack = localFont({
	src: [
		{
			path: "../../public/fonts/rock-attack-personal-use.regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-rock-attack",
});

const ppHatton = localFont({
	src: [
		{
			path: "../../public/fonts/PP Hatton Ultralight 200.otf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../public/fonts/PP Hatton Medium 500.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/PP Hatton Bold 700.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-pp-hatton",
});

const puritan = Puritan({
	weight: "400",
	variable: "--font-puritan",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			className={`${puritan.variable} ${rockAttack.variable} ${ppHatton.variable}`}
			lang="en"
			suppressHydrationWarning
		>
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
