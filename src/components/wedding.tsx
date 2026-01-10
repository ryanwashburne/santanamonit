import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Wedding = () => {
	return (
		<VStack bg="#AAB25F" color="white" fontSize="lg" gap={16} py={16}>
			<VStack color="primary" gap={8}>
				<Heading fontSize="8xl" lineHeight={1} textTransform="uppercase">
					Wedding
				</Heading>
				<VStack fontSize="xl" gap={0}>
					<Text fontFamily="heading">June 11th | Thursday</Text>
					<Text>Bayay Dhyana Villa</Text>
				</VStack>
			</VStack>

			<Box>
				<Image alt="fish" src="/fish.svg" />
			</Box>

			<VStack gap={12}>
				<VStack gap={0}>
					<Text textTransform="uppercase">Ceremony</Text>
					<Text>3:30PM</Text>
				</VStack>

				<VStack gap={0}>
					<Text textTransform="uppercase">Cocktail Hour &amp; Reception</Text>
					<Text>4PM</Text>
				</VStack>

				<VStack gap={0}>
					<Text textTransform="uppercase">Attire</Text>
					<Text>Women: formal, floor or ankle length dresses</Text>
					<Text>Men: suit (tie optional) or barong</Text>
				</VStack>

				<Text color="primary" fontStyle="italic">
					Transportation will be provided
				</Text>
			</VStack>
		</VStack>
	);
};

export default Wedding;
