"use client";

import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import InternationalTravel from "@/app/travel/international-travel";
import LocalTravel from "@/app/travel/local-travel";
import TabNavigation from "@/components/tab-navigation";
import { BOTTOM_PADDING } from "@/constants/spacing";

import greetings from "../../../public/greetings.svg";
import travel from "../../../public/travel.png";

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
		<Container pb={BOTTOM_PADDING}>
			<VStack gap={16}>
				<Box mt={16}>
					<NextImage alt="greetings" src={greetings} />
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
						<NextImage alt="travel footer" src={travel} />
					</Image>
				</Box>
			</VStack>
		</Container>
	);
};

export default TravelPage;
