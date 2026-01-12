import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface HorizontalEventCardProps {
	title: string;
	date: string;
	time?: string;
	imageSrc: string;
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
		<Image alt={imageAlt} fit="cover" src={imageSrc} w="900px" />
	);

	const contentElement = (
		<Flex align="center" flex={1} px={32}>
			<VStack align="stretch" fontSize="xl" gap={8}>
				<VStack align="stretch" gap={0}>
					<Heading fontWeight="normal" textTransform="uppercase">
						{title}
					</Heading>
					<Text>{date}</Text>
					{time && <Text>{time}</Text>}
				</VStack>
				{children}
			</VStack>
		</Flex>
	);

	return (
		<Flex bg="primary" color="background" maxH="800px">
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
