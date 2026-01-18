"use client";

import { Box, Container, Image, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import SiargaoContent from "@/app/siargao/siargao-content";
import PageHeader from "@/components/page-header";
import { BOTTOM_PADDING } from "@/constants/spacing";

import siargaoMap from "../../../public/siargao-map.png";

const SiargaoPage = () => {
	return (
		<Box
			minH="100vh"
			pb={BOTTOM_PADDING}
			style={{
				backgroundImage:
					"linear-gradient(rgba(226, 222, 205, 0.5), rgba(226, 222, 205, 0.5)), url('/pattern.svg')",
				backgroundSize: "100%, contain",
				backgroundPosition: "top center",
				backgroundRepeat: "no-repeat, repeat",
			}}
		>
			<VStack>
				<Container>
					<PageHeader title="About Siargao" />
				</Container>

				<Container maxW="6xl" mt={16}>
					<VStack gap={16}>
						<Image
							alt="Siargao Map"
							asChild
							borderRadius="lg"
							maxW="4xl"
							w="full"
						>
							<NextImage alt="Siargao Map" src={siargaoMap} />
						</Image>

						<Box
							bg="background"
							borderRadius="lg"
							px={{ base: 8, md: 24 }}
							py={16}
						>
							<SiargaoContent />
						</Box>
					</VStack>
				</Container>
			</VStack>
		</Box>
	);
};

export default SiargaoPage;
