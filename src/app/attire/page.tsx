"use client";

import { Box, Container, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import AnimateInView from "@/components/animate-in-view";
import PageHeader from "@/components/page-header";
import { BOTTOM_PADDING } from "@/constants/spacing";

import image1 from "../../../public/attire/image1.png";
import image2 from "../../../public/attire/image2.png";
import image3 from "../../../public/attire/image3.png";
import image4 from "../../../public/attire/image4.png";
import image5 from "../../../public/attire/image5.png";
import image6 from "../../../public/attire/image6.png";
import image7 from "../../../public/attire/image7.png";
import image8 from "../../../public/attire/image8.png";
import image9 from "../../../public/attire/image9.png";
import image10 from "../../../public/attire/image10.png";
import image11 from "../../../public/attire/image11.png";
import image12 from "../../../public/attire/image12.png";
import image13 from "../../../public/attire/image13.png";
import image14 from "../../../public/attire/image14.png";
import image16 from "../../../public/attire/image16.png";
import image17 from "../../../public/attire/image17.png";

const images = [
	{ id: "image1", src: image1 },
	{ id: "image14", src: image14 },
	{ id: "image5", src: image5 },
	{ id: "image12", src: image12 },
	{ id: "image16", src: image16 },
	{ id: "image8", src: image8 },
	{ id: "image4", src: image4 },
	{ id: "image2", src: image2 },
	{ id: "image3", src: image3 },
	{ id: "image10", src: image10 },
	{ id: "image11", src: image11 },
	{ id: "image13", src: image13 },
	{ id: "image9", src: image9 },
	{ id: "image6", src: image6 },
	{ id: "image7", src: image7 },
	{ id: "image17", src: image17 },
];

const AttirePage = () => {
	return (
		<Container pb={BOTTOM_PADDING}>
			<PageHeader title="Wedding Attire" />

			<Box fontSize="lg" my={12} textAlign="center">
				<Text>Women: formal, floor or ankle length dresses</Text>
				<Text>Men: suit (tie optional) or barong</Text>
			</Box>

			<Box
				css={{
					columnCount: 3,
					columnGap: "1rem",
				}}
			>
				{images.map((image) => (
					<AnimateInView enabled key={image.id}>
						<Box css={{ breakInside: "avoid" }} mb={4}>
							<Image alt={image.id} asChild borderRadius="md">
								<NextImage alt={image.id} src={image.src} />
							</Image>
						</Box>
					</AnimateInView>
				))}
			</Box>
		</Container>
	);
};

export default AttirePage;
