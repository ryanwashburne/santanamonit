"use client";

import { Box, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import type { Listing as ListingType } from "@/data/accommodations";

const Listing = ({
	title,
	coverPhoto,
	description,
	location,
	phone,
	website,
	links,
}: ListingType) => {
	return (
		<Box
			_hover={{
				boxShadow: "xl",
			}}
			border="1px solid"
			borderColor="primary"
			borderRadius="lg"
			overflow="hidden"
			position="relative"
			px={8}
			py={8}
			transition="all 0.3s ease-in-out"
			w="full"
		>
			<VStack align="stretch" gap={16}>
				<Heading color="primary" fontSize="xl" fontWeight="normal">
					{title}
				</Heading>

				<Image
					alt={title}
					borderRadius="lg"
					objectFit="cover"
					src={coverPhoto}
					w="full"
				/>

				<VStack align="stretch" gap={3} transition="all 0.3s ease-in-out">
					<Text fontSize="lg">{description}</Text>

					<Box
						fontSize="md"
						overflow="hidden"
						transition="all 0.3s ease-in-out"
					>
						<VStack align="stretch" gap={0}>
							{location && (
								<Link
									color="text"
									display="flex"
									gap={2}
									href={location.url}
									target="_blank"
									textDecoration="underline"
								>
									<Text>📍 {location.name}</Text>
								</Link>
							)}

							{phone && <Text>{phone}</Text>}

							{website && (
								<Link
									color="text"
									href={website}
									target="_blank"
									textDecoration="underline"
								>
									{website}
								</Link>
							)}

							{links &&
								links.length > 0 &&
								links.map((link) => (
									<Link
										color="text"
										href={link.url}
										key={link.name}
										target="_blank"
										textDecoration="underline"
									>
										{link.name}
									</Link>
								))}
						</VStack>
					</Box>
				</VStack>
			</VStack>
		</Box>
	);
};

export default Listing;
