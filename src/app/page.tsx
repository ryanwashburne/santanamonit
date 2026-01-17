"use client";

import { Box, Center, Image } from "@chakra-ui/react";
import { motion } from "motion/react";
import NextImage from "next/image";

import Tree1 from "public/tree1.svg";
import Tree2 from "public/tree2.svg";
import Tree3 from "public/tree3.svg";
import Tree4 from "public/tree4.svg";

const DURATION = 0.5;
const EASE = "easeInOut";
const TRANSITION = { duration: DURATION, ease: EASE } as const;

const OUTER_HEIGHTS = "70vh";
const INNER_HEIGHTS = "40vh";
const INNER_DISTANCE = "20vw";

const TreeFooter = () => {
	return (
		<Box
			bottom={0}
			h="50vh"
			left={0}
			pointerEvents="none"
			position="fixed"
			right={0}
		>
			{/* Tree 1 - Left */}
			<motion.div
				animate={{ opacity: 1, rotate: 0 }}
				initial={{ opacity: 0, rotate: -30 }}
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					transformOrigin: "bottom left",
				}}
				transition={TRANSITION}
			>
				<Image asChild h={OUTER_HEIGHTS} w="auto">
					<NextImage alt="Tree1" src={Tree1} />
				</Image>
			</motion.div>

			{/* Tree 2 - Left-center */}
			<motion.div
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 20 }}
				style={{
					position: "absolute",
					bottom: 0,
					left: INNER_DISTANCE,
				}}
				transition={TRANSITION}
			>
				<Image asChild h={INNER_HEIGHTS} w="auto">
					<NextImage alt="Tree2" src={Tree2} />
				</Image>
			</motion.div>

			{/* Tree 3 - Right-center */}
			<motion.div
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 20 }}
				style={{
					position: "absolute",
					bottom: 0,
					right: INNER_DISTANCE,
				}}
				transition={TRANSITION}
			>
				<Image asChild h={INNER_HEIGHTS} w="auto">
					<NextImage alt="Tree3" src={Tree3} />
				</Image>
			</motion.div>

			{/* Tree 4 - Right */}
			<motion.div
				animate={{ opacity: 1, rotate: 0 }}
				initial={{ opacity: 0, rotate: 30 }}
				style={{
					position: "absolute",
					bottom: 0,
					right: 0,
					transformOrigin: "bottom right",
				}}
				transition={TRANSITION}
			>
				<Image asChild h={OUTER_HEIGHTS} w="auto">
					<NextImage alt="Tree4" src={Tree4} />
				</Image>
			</motion.div>
		</Box>
	);
};

const HomePage = () => {
	return (
		<Box mt="12vh">
			<Center>
				<Image alt="greetings" src="/landing.svg" />
			</Center>
			<TreeFooter />
		</Box>
	);
};

export default HomePage;
