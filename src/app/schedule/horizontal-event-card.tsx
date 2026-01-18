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
		<Image
			alt={imageAlt}
			objectFit="contain"
			src={imageSrc}
			w={{ base: "full", md: "45vw" }}
		/>
	);

	const contentElement = (
		<Flex
			align="center"
			flex={1}
			px={{ base: 8, md: 32 }}
			py={{ base: 8, md: 0 }}
		>
			<VStack
				align="stretch"
				fontSize={{ base: "lg", md: "xl" }}
				gap={{ base: 4, md: 8 }}
			>
				<VStack align="stretch" gap={0}>
					<Heading
						fontSize={{ base: "2xl", md: "3xl" }}
						fontWeight="normal"
						textTransform="uppercase"
					>
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
					<Flex display={{ base: "none", md: "flex" }}>{contentElement}</Flex>
					{imageElement}
					<Flex display={{ base: "flex", md: "none" }}>{contentElement}</Flex>
				</>
			)}
		</Flex>
	);
};

export default HorizontalEventCard;
