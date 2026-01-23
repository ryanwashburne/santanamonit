"use client";

import { Box, Container, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import AnimateInView from "@/components/animate-in-view";
import PageHeader from "@/components/page-header";
import { BOTTOM_PADDING } from "@/constants/spacing";

const MD_BREAKPOINT = 768;

import image1 from "../../../public/attire/image1.png";
import image2 from "../../../public/attire/image2.png";
import image3 from "../../../public/attire/image3.png";
import image4 from "../../../public/attire/image4.png";
import image5 from "../../../public/attire/image5.png";
import image6 from "../../../public/attire/image6.png";
import image7 from "../../../public/attire/image7.png";
import image8 from "../../../public/attire/image8.png";
import image9 from "../../../public/attire/image9.png";
import image10 from "../../../public/attire/image10.png";
import image11 from "../../../public/attire/image11.png";
import image12 from "../../../public/attire/image12.png";
import image13 from "../../../public/attire/image13.png";
import image14 from "../../../public/attire/image14.png";
import image16 from "../../../public/attire/image16.png";
import image17 from "../../../public/attire/image17.png";

const imageMap = {
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image16,
	image17,
};

// Desktop order - 3 columns
const desktopOrder = [
	"image1",
	"image14",
	"image5",
	"image12",
	"image16",
	"image8",
	"image4",
	"image2",
	"image3",
	"image10",
	"image11",
	"image13",
	"image9",
	"image6",
	"image7",
	"image17",
];

// Mobile order - explicitly define left and right columns for predictable layout
const mobileLeftColumn = [
	"image1",
	"image13",
	"image9",
	"image5",
	"image6",
	"image12",
	"image16",
	"image17",
];
const mobileRightColumn = [
	"image4",
	"image2",
	"image14",
	"image3",
	"image10",
	"image7",
	"image11",
	"image8",
];

const getImages = (order: string[]) =>
	order.map((id) => ({ id, src: imageMap[id as keyof typeof imageMap] }));

const getColumnImages = (column: string[]) =>
	column.map((id) => ({ id, src: imageMap[id as keyof typeof imageMap] }));

const AttirePage = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < MD_BREAKPOINT);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const desktopImages = getImages(desktopOrder);
	const mobileLeft = getColumnImages(mobileLeftColumn);
	const mobileRight = getColumnImages(mobileRightColumn);

	const renderImage = (image: { id: string; src: typeof image1 }) => (
		<AnimateInView enabled key={image.id}>
			<Box css={{ breakInside: "avoid" }} mb={4}>
				<Image alt={image.id} asChild borderRadius="md">
					<NextImage alt={image.id} src={image.src} />
				</Image>
			</Box>
		</AnimateInView>
	);

	return (
		<Container pb={BOTTOM_PADDING}>
			<PageHeader title="Wedding Attire" />

			<Box my={12} textAlign="center">
				<Text>Women: formal, floor or ankle length dresses</Text>
				<Text>Men: suit (tie optional) or barong</Text>
			</Box>

			{isMobile ? (
				<Box display="flex" gap={4}>
					<Box flex={1}>{mobileLeft.map(renderImage)}</Box>
					<Box flex={1}>{mobileRight.map(renderImage)}</Box>
				</Box>
			) : (
				<Box
					css={{
						columnCount: 3,
						columnGap: "1rem",
					}}
				>
					{desktopImages.map(renderImage)}
				</Box>
			)}
		</Container>
	);
};

export default AttirePage;
