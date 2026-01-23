"use client";

import { Box, Center, Image } from "@chakra-ui/react";
import { motion } from "motion/react";
import NextImage from "next/image";
import Landing from "public/landing.png";
import Tree1 from "public/tree1.svg";
import Tree2 from "public/tree2.svg";
import Tree3 from "public/tree3.svg";
import Tree4 from "public/tree4.svg";
import { useCallback, useState } from "react";

const DURATION = 0.5;
const EASE = "easeInOut";
const TRANSITION = { duration: DURATION, ease: EASE } as const;

const OUTER_HEIGHTS = { base: "60vh", lg: "min(80vh, 60vw)" };
const INNER_HEIGHTS = { base: "0vh", lg: "min(60vh, 40vw)" };
const INNER_DISTANCE = "15vw";

const DESKTOP_TOTAL_IMAGES = 5;

const TreeFooter = ({
	ready,
	onImageLoad,
}: {
	ready: boolean;
	onImageLoad: () => void;
}) => {
	return (
		<Box bottom={0} left={0} pointerEvents="none" position="fixed" right={0}>
			{/* Tree 1 - Left */}
			<motion.div
				animate={
					ready ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -30 }
				}
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
					<NextImage alt="Tree1" onLoad={onImageLoad} src={Tree1} />
				</Image>
			</motion.div>

			{/* Tree 2 - Left-center */}
			<motion.div
				animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				initial={{ opacity: 0, y: 20 }}
				style={{
					position: "absolute",
					bottom: 0,
					left: INNER_DISTANCE,
				}}
				transition={TRANSITION}
			>
				<Image asChild h={INNER_HEIGHTS} w="auto">
					<NextImage alt="Tree2" onLoad={onImageLoad} src={Tree2} />
				</Image>
			</motion.div>

			{/* Tree 3 - Right-center */}
			<motion.div
				animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				initial={{ opacity: 0, y: 20 }}
				style={{
					position: "absolute",
					bottom: 0,
					right: INNER_DISTANCE,
				}}
				transition={TRANSITION}
			>
				<Image asChild h={INNER_HEIGHTS} w="auto">
					<NextImage alt="Tree3" onLoad={onImageLoad} src={Tree3} />
				</Image>
			</motion.div>

			{/* Tree 4 - Right */}
			<motion.div
				animate={ready ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: 30 }}
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
					<NextImage alt="Tree4" onLoad={onImageLoad} src={Tree4} />
				</Image>
			</motion.div>
		</Box>
	);
};

const MOBILE_TOTAL_IMAGES = 3;

const MobileHome = () => {
	const [loadedCount, setLoadedCount] = useState(0);
	const ready = loadedCount >= MOBILE_TOTAL_IMAGES;

	const handleImageLoad = useCallback(() => {
		setLoadedCount((prev) => prev + 1);
	}, []);

	return (
		<Box display={{ base: "block", md: "none" }}>
			<Center
				h="calc(100dvh - 81px)" // not sure why 1px is needed to be added
				px={4}
				w="100%"
			>
				<motion.div
					animate={ready ? { opacity: 1 } : { opacity: 0 }}
					initial={{ opacity: 0 }}
					style={{ maxWidth: 400, width: "100%" }}
					transition={TRANSITION}
				>
					<NextImage alt="greetings" onLoad={handleImageLoad} src={Landing} />
				</motion.div>
			</Center>

			{/* Mobile trees */}
			<Box bottom={0} left={0} pointerEvents="none" position="fixed" right={0}>
				{/* Tree 1 - Left */}
				<motion.div
					animate={
						ready ? { opacity: 1, rotate: 5 } : { opacity: 0, rotate: -30 }
					}
					initial={{ opacity: 0, rotate: -30 }}
					style={{
						position: "absolute",
						bottom: "-2vh",
						left: -30,
						transformOrigin: "bottom left",
					}}
					transition={TRANSITION}
				>
					<Image asChild h="50vh" w="auto">
						<NextImage alt="Tree1" onLoad={handleImageLoad} src={Tree1} />
					</Image>
				</motion.div>

				{/* Tree 4 - Right */}
				<motion.div
					animate={
						ready ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: 30 }
					}
					initial={{ opacity: 0, rotate: 30 }}
					style={{
						position: "absolute",
						bottom: "-10vh",
						right: 0,
						transformOrigin: "bottom right",
					}}
					transition={TRANSITION}
				>
					<Image asChild h="40vh" scale={1} w="auto">
						<NextImage alt="Tree4" onLoad={handleImageLoad} src={Tree4} />
					</Image>
				</motion.div>
			</Box>
		</Box>
	);
};

const DesktopHome = () => {
	const [loadedCount, setLoadedCount] = useState(0);
	const ready = loadedCount >= DESKTOP_TOTAL_IMAGES;

	const handleImageLoad = useCallback(() => {
		setLoadedCount((prev) => prev + 1);
	}, []);

	return (
		<Box display={{ base: "none", md: "block" }} mt="12vh">
			<Center>
				<motion.div
					animate={ready ? { opacity: 1 } : { opacity: 0 }}
					initial={{ opacity: 0 }}
					style={{ maxWidth: 900 }}
					transition={TRANSITION}
				>
					<NextImage alt="greetings" onLoad={handleImageLoad} src={Landing} />
				</motion.div>
			</Center>
			<TreeFooter onImageLoad={handleImageLoad} ready={ready} />
		</Box>
	);
};

const HomePage = () => {
	return (
		<>
			<MobileHome />
			<DesktopHome />
		</>
	);
};

export default HomePage;
