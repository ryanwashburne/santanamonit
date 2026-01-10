"use client";

import { Box, Flex, Image } from "@chakra-ui/react";

const HomePage = () => {
	return (
		<Box minH="750px">
			<Flex justify="center" mt={32}>
				<Image
					alt="landing welcome"
					height="100%"
					objectFit="contain"
					src="/landing.svg"
					width="800px"
				/>
			</Flex>

			<Box bottom={0} left={0} position="absolute" right={0}>
				<Image
					alt="trees"
					height="100%"
					objectFit="contain"
					src="/trees.svg"
					width="100%"
				/>
			</Box>
		</Box>
	);
};

export default HomePage;
