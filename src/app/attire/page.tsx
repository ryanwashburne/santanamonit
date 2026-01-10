"use client";

import { Box, Container, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
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
				<Image alt="attire" asChild>
					<NextImage
						alt="attire"
						height={5720}
						quality={100}
						src="/attire.png"
						style={{ width: "100%", height: "auto" }}
						width={2450}
					/>
				</Image>
			</Box>
		</Container>
	);
};

export default AttirePage;
