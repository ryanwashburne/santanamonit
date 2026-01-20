import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import NextImage, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

interface HorizontalEventCardProps {
	title: string;
	date: string;
	time?: string;
	imageSrc: string | StaticImageData;
	imageAlt: string;
	imagePosition?: "left" | "right";
	children?: ReactNode;
}

const HorizontalEventCard = ({
	title,
	date,
	time,
	imageSrc,
	imageAlt,
	imagePosition = "right",
	children,
}: HorizontalEventCardProps) => {
	const imageElement = (
		<Image asChild objectFit="cover" w={{ base: "full", md: "45vw" }}>
			<NextImage alt={imageAlt} src={imageSrc} />
		</Image>
	);

	const contentElement = (
		<Flex
			align="center"
			flex={1}
			justify={{ base: "center", md: "space-between" }}
			px={{ base: 8, md: 32 }}
			py={{ base: 16, md: 0 }}
			textAlign={{ base: "center", md: "left" }}
		>
			<VStack align="stretch" gap={{ base: 4, md: 8 }}>
				<VStack align="stretch" gap={0}>
					<Heading
						fontSize={{ base: "2xl", md: "3xl" }}
						fontWeight="normal"
						textTransform="uppercase"
					>
						{title}
					</Heading>
					<Text mt={3}>{date}</Text>
					{time && <Text>{time}</Text>}
				</VStack>
				{children}
			</VStack>
		</Flex>
	);

	return (
		<Flex
			bg="primary"
			color="background"
			direction={{ base: "column", md: "row" }}
		>
			{imagePosition === "left" ? (
				<>
					{imageElement}
					{contentElement}
				</>
			) : (
				<>
					{contentElement}
					{imageElement}
				</>
			)}
		</Flex>
	);
};

export default HorizontalEventCard;
