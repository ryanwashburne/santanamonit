"use client";

import { Box, Container, Image, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import ExperienceTabContent from "@/app/siargao/siargao-experience-tab";
import InfoTabContent from "@/app/siargao/siargao-info-tab";
import PageHeader from "@/components/page-header";
import TabNavigation from "@/components/tab-navigation";

const SiargaoPage = () => {
	const tabs = [
		{
			label: "Info",
			content: <InfoTabContent />,
		},
		// TODO: do this later
		// {
		// 	label: "Eat",
		// 	content: <div>Eat content coming soon...</div>,
		// },
		{
			label: "Experience",
			content: <ExperienceTabContent />,
		},
	];

	return (
		<Box
			minH="100vh"
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
							<NextImage
								alt="Siargao Map"
								height={1097}
								quality={100}
								src="/siargao-map.png"
								style={{ width: "100%", height: "auto" }}
								width={1438}
							/>
						</Image>

						<Box bg="background" borderRadius="lg" px={24} py={16}>
							<TabNavigation tabs={tabs} />
						</Box>
					</VStack>
				</Container>
			</VStack>
		</Box>
	);
};

export default SiargaoPage;
