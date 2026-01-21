"use client";

import {
	Box,
	Container,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import NextImage from "next/image";
import { useState } from "react";
import TravelContent from "@/app/travel/travel-content";
import { BOTTOM_PADDING } from "@/constants/spacing";

import greetings from "../../../public/greetings.svg";
import travel1 from "../../../public/travel/1.png";
import travel2 from "../../../public/travel/2.png";
import travel3 from "../../../public/travel/3.png";

const travelImages = [
	{ id: "travel-1", src: travel1 },
	{ id: "travel-2", src: travel2 },
	{ id: "travel-3", src: travel3 },
];

const TravelPage = () => {
	const [svgLoaded, setSvgLoaded] = useState(false);

	return (
		<Container pb={BOTTOM_PADDING}>
			<VStack gap={16}>
				<Box mt={16}>
					<motion.div
						animate={svgLoaded ? { opacity: 1 } : { opacity: 0 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					>
						<NextImage
							alt="greetings"
							onLoad={() => setSvgLoaded(true)}
							src={greetings}
						/>
					</motion.div>
				</Box>

				<Container maxW="4xl">
					<VStack gap={16}>
						<TravelContent />

						<VStack>
							<Text textAlign="center">
								Our flight information to Siargao
								<br />
								CRK - IAO June 9th DG6763
								<br />
								IAO - CRK June 15th DG 6764
							</Text>
						</VStack>
					</VStack>
				</Container>

				<SimpleGrid columns={{ base: 1, lg: 3 }} gap={4} w="full">
					{travelImages.map((image, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							key={image.id}
							transition={{ duration: 0.5 }}
							viewport={{ once: true, margin: "100px 0px 0px 0px" }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<Image alt={`Travel photo ${index + 1}`} asChild>
								<NextImage alt={`Travel photo ${index + 1}`} src={image.src} />
							</Image>
						</motion.div>
					))}
				</SimpleGrid>
			</VStack>
		</Container>
	);
};

export default TravelPage;
