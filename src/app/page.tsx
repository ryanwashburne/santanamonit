"use client";

import { Box, Image } from "@chakra-ui/react";
import NextImage from "next/image";

const HomePage = () => {
	return (
		<Box mt={{ base: 16, xl: 32 }}>
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
	);
};

export default HomePage;
