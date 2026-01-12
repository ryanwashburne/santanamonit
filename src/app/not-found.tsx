"use client";

import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
	return (
		<Box
			alignItems="center"
			display="flex"
			justifyContent="center"
			minH="60vh"
			px={4}
		>
			<VStack gap={6} textAlign="center">
				<Text
					color="fg.muted"
					fontFamily="var(--font-loved-by-the-king)"
					fontSize={{ base: "8xl", md: "9xl" }}
					lineHeight={1}
				>
					404
				</Text>
				<Heading
					fontFamily="var(--font-pp-hatton)"
					fontSize={{ base: "2xl", md: "3xl" }}
					fontWeight={200}
				>
					Oops! You wandered off the aisle
				</Heading>
				<Text color="fg.muted" maxW="md">
					This page doesn&apos;t exist, but we&apos;d love for you to join us at
					the celebration!
				</Text>
				<Button asChild mt={4} size="lg">
					<Link href="/">Back to the Wedding</Link>
				</Button>
			</VStack>
		</Box>
	);
};

export default NotFound;
