import { Center, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const WelcomeParty = () => {
	return (
		<Flex bg="primary" color="white" maxH="800px">
			<Image alt="welcome party" objectFit="cover" src="/harana.png" w="40%" />

			<Center w="full">
				<VStack align="stretch" fontSize="xl" gap={8}>
					<VStack align="stretch" gap={0}>
						<Heading fontWeight="normal" textTransform="uppercase">
							Rehersal Brunch &amp; Welcome Party
						</Heading>
						<Text>June 10th | Wednesday</Text>
					</VStack>

					<VStack align="stretch" gap={0}>
						<Text textTransform="uppercase">Brunch</Text>
						<Text>Bravo Resort 10AM</Text>
					</VStack>

					<VStack align="stretch" gap={0}>
						<Text textTransform="uppercase">Welcome Party</Text>
						<Text>Harana Beach Bar 4-7PM</Text>
					</VStack>
				</VStack>
			</Center>
		</Flex>
	);
};

export default WelcomeParty;
