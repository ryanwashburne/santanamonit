import {
	Link as ChakraLink,
	Container,
	Heading,
	HStack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Link from "next/link";

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
	return (
		<Container py={16}>
			<VStack gap={8}>
				<Heading
					color="#782E20"
					fontSize="2xl"
					fontWeight="normal"
					textTransform="uppercase"
				>
					The Monits
				</Heading>
				<HStack fontFamily="nav" fontSize="lg" gap="80px">
					{LINKS.map((link) => {
						return (
							<ChakraLink asChild color="inherit" key={link.href}>
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
