"use client";

import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import TravelContent from "@/app/travel/travel-content";
import { BOTTOM_PADDING } from "@/constants/spacing";

import greetings from "../../../public/greetings.svg";
import travel from "../../../public/travel.png";

const TravelPage = () => {
	return (
		<Container pb={BOTTOM_PADDING}>
			<VStack gap={16}>
				<Box mt={16}>
					<NextImage alt="greetings" src={greetings} />
				</Box>

				<Container maxW="4xl">
					<VStack gap={16}>
						<TravelContent />

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
