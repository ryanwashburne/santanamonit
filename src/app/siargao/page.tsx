"use client";

import { Box, Container, Image, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import PageHeader from "@/components/page-header";
import ExperienceTabContent from "@/components/siargao-experience-tab";
import InfoTabContent from "@/components/siargao-info-tab";
import TabNavigation from "@/components/tab-navigation";

const SiargaoPage = () => {
	const tabs = [
		{
			label: "Info",
			content: <InfoTabContent />,
		},
		{
			label: "Eat",
			content: <div>Eat content coming soon...</div>,
		},
		{
			label: "Experience",
			content: <ExperienceTabContent />,
		},
	];

	return (
		<Box
			minH="100vh"
			style={{
				background:
					"linear-gradient(90deg, #BEC673 0%, #BEC673 8%, #50A1D4 8%, #50A1D4 12%, #BEC673 12%, #BEC673 25%, #50A1D4 25%, #50A1D4 27%, #BEC673 27%, #BEC673 42%, #50A1D4 42%, #50A1D4 48%, #BEC673 48%, #BEC673 53%, #50A1D4 53%, #50A1D4 56%, #BEC673 56%, #BEC673 71%, #50A1D4 71%, #50A1D4 74%, #BEC673 74%, #BEC673 88%, #50A1D4 88%, #50A1D4 93%, #BEC673 93%)",
			}}
		>
			<VStack>
				<Container>
					<PageHeader title="About Siargao" />
				</Container>

				<Container maxW="4xl" mt={16}>
					<VStack gap={16}>
						<Image
							alt="Siargao Map"
							asChild
							borderRadius="lg"
							maxW="2xl"
							w="full"
						>
							<NextImage
								alt="Siargao Map"
								height={1097}
								quality={100}
								src="/siargao-map.png"
								style={{ width: "100%", height: "auto" }}
								width={1438}
							/>
						</Image>

						<Box bg="background" borderRadius="lg" px={8} py={16}>
							<TabNavigation tabs={tabs} />
						</Box>
					</VStack>
				</Container>
			</VStack>
		</Box>
	);
};

export default SiargaoPage;
