"use client";

import { Box, Image, VStack } from "@chakra-ui/react";
import NextImage from "next/image";

const HomePage = () => {
	return (
		<Box mt={{ base: 16, xl: 32 }}>
			{/* Mobile */}
			<Box display={{ base: "block", xl: "none" }} overflow="hidden">
				<VStack>
					<Box px={4}>
						<Image alt="landing welcome" src="/landing.svg" />
					</Box>
					<Image alt="trees" height={300} src="/trees.svg" />
				</VStack>
			</Box>
			{/* Desktop */}
			<Box display={{ base: "none", xl: "block" }}>
				<Image alt="landing welcome" asChild>
					<NextImage
						alt="landing welcome"
						height={1308}
						priority
						quality={100}
						src="/landing.png"
						style={{ width: "100%", height: "auto" }}
						width={2560}
					/>
				</Image>
			</Box>
		</Box>
	);
};

export default HomePage;
