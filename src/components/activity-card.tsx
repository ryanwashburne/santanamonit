import { Heading, Image, Text, VStack } from "@chakra-ui/react";

interface ActivityCardProps {
	image: string;
	title: string;
	date: string;
	description: string;
}

const ActivityCard = ({
	image,
	title,
	date,
	description,
}: ActivityCardProps) => {
	return (
		<VStack align="stretch" gap={4}>
			<Image
				alt={title}
				borderRadius="lg"
				objectFit="cover"
				src={image}
				w="full"
			/>
			<VStack align="stretch" gap={2}>
				<Heading color="primary" fontSize="2xl">
					{title}
				</Heading>
				<Text fontSize="lg" fontWeight="bold">
					{date}
				</Text>
			</VStack>
			<Text fontSize="lg">{description}</Text>
		</VStack>
	);
};

export default ActivityCard;
