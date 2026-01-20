import { Heading, Image, Text, VStack } from "@chakra-ui/react";

import NextImage, { type StaticImageData } from "next/image";

interface ActivityCardProps {
	image: string | StaticImageData;
	title: string;
	date: string;
	description: string | React.ReactNode;
}

const ActivityCard = ({
	image,
	title,
	date,
	description,
}: ActivityCardProps) => {
	return (
		<VStack align="stretch" gap={{ base: 4, md: 8 }} textAlign="center">
			<Image asChild borderRadius="lg" objectFit="cover" w="full">
				<NextImage alt={title} src={image} />
			</Image>

			<VStack align="stretch" gap={2}>
				<Heading color="primary" fontFamily="header">
					{title}
				</Heading>
				<Text>{date}</Text>
			</VStack>

			{typeof description === "string" ? (
				<Text>{description}</Text>
			) : (
				description
			)}
		</VStack>
	);
};

export default ActivityCard;
