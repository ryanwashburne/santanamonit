"use client";

import { Box, Container, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import PageHeader from "@/components/page-header";
import { BOTTOM_PADDING } from "@/constants/spacing";

import attire from "../../../public/attire.png";

const AttirePage = () => {
	return (
		<Container pb={BOTTOM_PADDING}>
			<PageHeader title="Wedding Attire" />

			<Box fontSize="lg" my={12} textAlign="center">
				<Text>Women: formal, floor or ankle length dresses</Text>
				<Text>Men: suit (tie optional) or barong</Text>
			</Box>

			<Box>
				<Image alt="attire" asChild>
					<NextImage alt="attire" src={attire} />
				</Image>
			</Box>
		</Container>
	);
};

export default AttirePage;
