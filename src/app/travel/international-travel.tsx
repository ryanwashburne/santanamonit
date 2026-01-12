import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const InternationalTravel = () => {
	return (
		<VStack gap="80px" textAlign="center">
			<Text fontSize="xl">
				Siargao is a domestic airport, you will likely transit through one of
				these two main International Airports in the Philippines, depending on
				where you are coming from.
			</Text>

			<VStack gap={1}>
				<Heading color="primary" fontWeight="normal">
					Embarking Airport
				</Heading>
				<Text>SFO / LAX / PIT / JFK / EWR / NRT / HND / ETC.</Text>
			</VStack>

			<Image alt="arrow down left" src="/arrow-down-left.svg" />

			<VStack>
				<Heading color="primary" fontWeight="normal">
					Manila International Airport (MNL) / Clark International Airport (CRK)
				</Heading>
				<Text>OR</Text>
				<Heading color="primary" fontWeight="normal">
					Mactan - Cebu International Airport (MCIA)
				</Heading>
			</VStack>

			<Image alt="arrow down right" src="/arrow-down-right.svg" />

			<Heading color="primary" fontWeight="normal">
				Siargao Sayak Airport (IAO)
			</Heading>

			<Image alt="surfboard" src="/surfboard.svg" />
		</VStack>
	);
};

export default InternationalTravel;
