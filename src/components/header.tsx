"use client";

import {
	Link as ChakraLink,
	Container,
	Heading,
	HStack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
	{
		label: "Schedule",
		href: "/schedule",
	},
	{
		label: "RSVP",
		href: "/rsvp",
	},
	{
		label: "Travel",
		href: "/travel",
	},
	{
		label: "Accommodations",
		href: "/accommodations",
	},
	{
		label: "Siargao",
		href: "/siargao",
	},
	{
		label: "Opt-In Activities",
		href: "/opt-in-activities",
	},
];

const Header = () => {
	const pathname = usePathname();

	return (
		<Container pb={32} pt={16}>
			<VStack gap={12}>
				<Link href="/" passHref>
					<Heading
						_hover={{
							opacity: 0.7,
						}}
						color="#782E20"
						fontFamily="header"
						fontSize="2xl"
						fontWeight="normal"
						textTransform="uppercase"
						transition="opacity 0.3s ease-in-out"
					>
						The Monits
					</Heading>
				</Link>
				<HStack fontFamily="heading" fontSize="lg" gap="80px">
					{LINKS.map((link) => {
						return (
							<ChakraLink
								asChild
								color="inherit"
								fontWeight={pathname === link.href ? "bold" : undefined}
								key={link.href}
							>
								<Link href={link.href}>
									<Text>{link.label}</Text>
								</Link>
							</ChakraLink>
						);
					})}
				</HStack>
			</VStack>
		</Container>
	);
};

export default Header;
