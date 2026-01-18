"use client";

import { Box, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import type { Listing as ListingType } from "@/data/accommodations";

type Props = ListingType & {
	index?: number;
};

const Listing = ({
	title,
	coverPhoto,
	description,
	location,
	phone,
	website,
	links,
	index = 0,
}: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
			viewport={{ once: true, amount: 0.3 }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			<Box
				_hover={{
					boxShadow: "xl",
				}}
				border="1px solid"
				borderColor="primary"
				borderRadius="lg"
				overflow="hidden"
				position="relative"
				px={{ base: 4, md: 8 }}
				py={{ base: 4, md: 8 }}
				transition="all 0.3s ease-in-out"
				w="full"
			>
				<VStack align="stretch" gap={{ base: 8, md: 16 }}>
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
		</motion.div>
	);
};

export default Listing;
