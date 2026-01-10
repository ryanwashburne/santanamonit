"use client";

import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";
import InternationalTravel from "@/components/international-travel";
import LocalTravel from "@/components/local-travel";
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
			<VStack>
				<Box my={16}>
					<Image alt="greetings" src="/greetings.svg" />
				</Box>

				<Container maxW="4xl" mt={16}>
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
						<Image alt="travel footer" src="/travel.png" />
					</VStack>
				</Container>
			</VStack>
		</Container>
	);
};

export default TravelPage;
