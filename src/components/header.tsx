"use client";

import {
	Box,
	Center,
	Link as ChakraLink,
	CloseButton,
	Container,
	Drawer,
	Heading,
	HStack,
	IconButton,
	Portal,
	Text,
	VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

const LINKS = [
	{
		label: "Schedule",
		href: "/schedule",
	},
	{
		label: "Attire",
		href: "/attire",
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
	const [open, setOpen] = useState(false);

	return (
		<Center bg="#AAB25F" h="120px">
			<Container>
				<Box
					display={{ base: "block", lg: "none" }}
					left={4}
					position="absolute"
					top="-8px"
				>
					<Drawer.Root
						onOpenChange={(e) => setOpen(e.open)}
						open={open}
						placement="start"
					>
						<Drawer.Trigger asChild>
							<IconButton
								_hover={{
									bg: "primary",
								}}
								aria-label="Open menu"
								color="white"
								size="sm"
								variant="ghost"
							>
								<LuMenu />
							</IconButton>
						</Drawer.Trigger>
						<Portal>
							<Drawer.Backdrop />
							<Drawer.Positioner>
								<Drawer.Content bg="#AAB25F">
									<Drawer.Header>
										<Drawer.Title
											color="white"
											fontFamily="header"
											fontSize="xl"
											fontWeight="normal"
											textTransform="uppercase"
										>
											Menu
										</Drawer.Title>
									</Drawer.Header>
									<Drawer.Body>
										<VStack align="stretch" gap={4}>
											{LINKS.map((link) => (
												<ChakraLink
													_hover={{ textDecoration: "none" }}
													asChild
													color="white"
													fontFamily="heading"
													fontSize="lg"
													fontWeight={
														pathname === link.href ? "bold" : undefined
													}
													key={link.href}
													onClick={() => setOpen(false)}
												>
													<Link href={link.href}>
														<Text>{link.label}</Text>
													</Link>
												</ChakraLink>
											))}
										</VStack>
									</Drawer.Body>
									<Drawer.CloseTrigger asChild>
										<CloseButton color="white" size="sm" />
									</Drawer.CloseTrigger>
								</Drawer.Content>
							</Drawer.Positioner>
						</Portal>
					</Drawer.Root>
				</Box>
				<VStack gap={4}>
					<ChakraLink _hover={{ textDecoration: "none" }} asChild>
						<Link href="/">
							<Heading
								color="#E2DECD"
								fontFamily="header"
								fontSize="2xl"
								fontWeight="normal"
								textTransform="uppercase"
							>
								The Monits
							</Heading>
						</Link>
					</ChakraLink>
					<HStack
						display={{ base: "none", lg: "flex" }}
						fontFamily="heading"
						fontSize="md"
						gap="80px"
					>
						{LINKS.map((link) => {
							return (
								<ChakraLink
									_hover={{ textDecoration: "none" }}
									asChild
									color="inherit"
									fontWeight={pathname === link.href ? "bold" : 500}
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
		</Center>
	);
};

export default Header;
