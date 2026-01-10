"use client";

import { Box, Image, VStack } from "@chakra-ui/react";

const HomePage = () => {
	return (
		<Box mt={16}>
			<Box display={{ base: "block", xl: "none" }} overflow="hidden">
				<VStack>
					<Box px={4}>
						<Image alt="landing welcome" src="/landing.svg" />
					</Box>
					<Image alt="trees" height={300} src="/trees.svg" />
				</VStack>
			</Box>
			<Box display={{ base: "none", xl: "block" }}>
				<Image alt="landing welcome" src="/landing.png" />
			</Box>
		</Box>
	);
};

export default HomePage;
