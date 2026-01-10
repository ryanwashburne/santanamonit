"use client";

import { Box, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import type { Listing as ListingType } from "@/data/accommodations";

const Listing = ({
	title,
	coverPhoto,
	description,
	location,
	phone,
	website,
}: ListingType) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Box
			border="2px solid"
			borderColor="primary"
			borderRadius="lg"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			overflow="hidden"
			position="relative"
			px={4}
			py={8}
			transition="all 0.3s ease-in-out"
			w="full"
		>
			<VStack align="stretch" gap={4}>
				<Heading color="primary" fontSize="xl" fontWeight="normal">
					{title}
				</Heading>

				<Image
					alt={title}
					borderRadius="lg"
					h={isHovered ? "250px" : "300px"}
					objectFit="cover"
					src={coverPhoto}
					transition="height 0.3s ease-in-out"
					w="full"
				/>

				<VStack align="stretch" gap={3} transition="all 0.3s ease-in-out">
					<Text fontSize="xl">{description}</Text>

					<Box
						maxHeight={isHovered ? "200px" : "0"}
						opacity={isHovered ? 1 : 0}
						overflow="hidden"
						transition="all 0.3s ease-in-out"
					>
						<VStack align="stretch" gap={2} pt={isHovered ? 3 : 0}>
							{location && (
								<Link
									color="primary"
									display="flex"
									fontSize="md"
									gap={2}
									href={location.url}
									target="_blank"
								>
									<Text>📍</Text>
									<Text textDecoration="underline">{location.name}</Text>
								</Link>
							)}

							{phone && (
								<Text fontSize="md">
									<strong>Phone:</strong> {phone}
								</Text>
							)}

							{website && (
								<Link
									color="primary"
									fontSize="md"
									href={website}
									target="_blank"
									textDecoration="underline"
								>
									{website}
								</Link>
							)}
						</VStack>
					</Box>
				</VStack>
			</VStack>
		</Box>
	);
};

export default Listing;
