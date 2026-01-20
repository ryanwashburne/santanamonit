import { Box } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { La_Belle_Aurore, Loved_by_the_King, Puritan } from "next/font/google";
import localFont from "next/font/local";
import Providers from "@/app/providers";
import Header from "@/components/header";

export const metadata: Metadata = {
	title: "The Monits",
	description: "TODO",
	icons:
		"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☀️</text></svg>",
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

const laBelleAurore = La_Belle_Aurore({
	weight: "400",
	variable: "--font-la-belle-aurore",
});

const lovedByTheKing = Loved_by_the_King({
	weight: "400",
	variable: "--font-loved-by-the-king",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			className={`${puritan.variable} ${rockAttack.variable} ${ppHatton.variable} ${laBelleAurore.variable} ${lovedByTheKing.variable}`}
			lang="en"
			suppressHydrationWarning
		>
			<body>
				<Providers>
					<Header />
					<Box>{children}</Box>
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
