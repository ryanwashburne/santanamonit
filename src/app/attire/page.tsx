"use client";

import { Box, Container, Image, Text } from "@chakra-ui/react";
import PageHeader from "@/components/page-header";

const AttirePage = () => {
	return (
		<Container>
			<PageHeader title="Wedding Attire" />

			<Box fontSize="lg" my={12} textAlign="center">
				<Text>Women: formal, floor or ankle length dresses</Text>
				<Text>Men: suit (tie optional) or barong</Text>
			</Box>

			<Box>
				<Image alt="attire" src="/attire.png" />
			</Box>
		</Container>
	);
};

export default AttirePage;
