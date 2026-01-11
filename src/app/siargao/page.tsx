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
				backgroundImage: "url('/pattern.svg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
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
