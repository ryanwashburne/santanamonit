import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const LocalTravel = () => {
	return (
		<VStack gap="80px" textAlign="center">
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

export default LocalTravel;
