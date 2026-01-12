"use client";

import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import InternationalTravel from "@/app/travel/international-travel";
import LocalTravel from "@/app/travel/local-travel";
import TabNavigation from "@/components/tab-navigation";

const TravelPage = () => {
	const tabs = [
		{
			label: "International",
			content: <InternationalTravel />,
		},
		{
			label: "Local",
			content: <LocalTravel />,
		},
	];

	return (
		<Container>
			<VStack gap={16}>
				<Box mt={16}>
					<Image alt="greetings" src="/greetings.svg" />
				</Box>

				<Container maxW="4xl">
					<VStack gap={16}>
						<TabNavigation tabs={tabs} />

						<VStack fontSize="xl">
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

				<Box>
					<Image alt="travel footer" asChild>
						<NextImage
							alt="travel footer"
							height={1000}
							quality={100}
							src="/travel.png"
							style={{ width: "100%", height: "auto" }}
							width={2400}
						/>
					</Image>
				</Box>
			</VStack>
		</Container>
	);
};

export default TravelPage;
