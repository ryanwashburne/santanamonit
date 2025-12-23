"use client";

import { Box, Image, Text } from "@chakra-ui/react";

const HomePage = () => {
	return (
		<Box mt={32} overflow="hidden">
			{/* Nicole + Zach text */}
			<Box textAlign="center" transform="rotate(-8deg)">
				<Text color="#782e20" fontFamily="cursive" fontSize="8xl">
					Nicole + Zach
				</Text>
			</Box>

			{/* Palm trees at bottom */}
			<Box>
				{/* Tree 1 */}
				<Box bottom="0px" left="0%" position="fixed">
					<Image
						alt=""
						height="100%"
						objectFit="contain"
						src="/tree-1.svg"
						width="450px"
					/>
				</Box>

				{/* Tree 2 */}
				<Box bottom="0px" left="20%" position="fixed">
					<Image
						alt=""
						height="100%"
						objectFit="contain"
						src="/tree-2.svg"
						width="500px"
					/>
				</Box>

				{/* Tree 3 */}
				<Box bottom="0px" position="fixed" right="18%">
					<Image
						alt=""
						height="100%"
						objectFit="contain"
						src="/tree-3.svg"
						width="600px"
					/>
				</Box>

				{/* Tree 4 */}
				<Box bottom="0px" position="fixed" right="0px">
					<Image
						alt=""
						height="100%"
						objectFit="contain"
						src="/tree-4.svg"
						width="450px"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default HomePage;
