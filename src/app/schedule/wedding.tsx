import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import EventDetail from "./event-detail";

const Wedding = () => {
	return (
		<VStack
			bg="#AAB25F"
			color="background"
			fontSize={{ base: "md", md: "lg" }}
			gap={{ base: 8, md: 16 }}
			px={{ base: 4, md: 0 }}
			py={{ base: 8, md: 16 }}
		>
			<VStack color="primary" gap={{ base: 4, md: 8 }}>
				<Heading
					fontSize={{ base: "4xl", md: "8xl" }}
					lineHeight={1}
					textTransform="uppercase"
				>
					Wedding
				</Heading>
				<VStack fontSize={{ base: "lg", md: "xl" }} gap={0}>
					<Text fontFamily="heading">June 11th | Thursday</Text>
					<Text>Bayay Dhyana Villa</Text>
				</VStack>
			</VStack>

			<Flex justify="center">
				<Image alt="fish" src="/fish.svg" />
			</Flex>

			<VStack gap={{ base: 4, md: 8 }}>
				<EventDetail label="Ceremony" textAlign="center">
					<Text>3:30PM</Text>
				</EventDetail>

				<EventDetail label="Cocktail Hour & Reception" textAlign="center">
					<Text>4PM</Text>
				</EventDetail>

				<EventDetail label="Attire" textAlign="center">
					<Text>Women: formal, floor or ankle length dresses</Text>
					<Text>Men: suit (tie optional) or barong</Text>
				</EventDetail>

				<Text color="primary" fontStyle="italic" textAlign="center">
					Transportation will be provided
				</Text>
			</VStack>
		</VStack>
	);
};

export default Wedding;
