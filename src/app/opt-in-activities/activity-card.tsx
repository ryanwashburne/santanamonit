import { Heading, Image, Text, VStack } from "@chakra-ui/react";

interface ActivityCardProps {
	image: string;
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
		<VStack align="stretch" gap={8} textAlign="center">
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
