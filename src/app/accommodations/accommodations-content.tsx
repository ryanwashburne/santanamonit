"use client";

import {
	Box,
	Grid,
	Heading,
	HStack,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Listing from "@/app/accommodations/listing";
import type { Listing as ListingType } from "@/data/accommodations";
import { airbnbListings, resortListings } from "@/data/accommodations";

type AccommodationType = "resorts" | "airbnbs";

const ITEMS_PER_ROW = 3;
const MD_BREAKPOINT = 768;

function chunkArray<T>(array: T[], size: number): T[][] {
	const chunks: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		chunks.push(array.slice(i, i + size));
	}
	return chunks;
}

const AccommodationsContent = () => {
	const [type, setType] = useState<AccommodationType>("resorts");
	const [isMobile, setIsMobile] = useState(false);
	const isResorts = type === "resorts";

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < MD_BREAKPOINT);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const listings = isResorts ? resortListings : airbnbListings;
	const rows = chunkArray<ListingType>(listings, ITEMS_PER_ROW);

	return (
		<VStack gap={{ base: 8, md: 16 }}>
			<HStack gap={4}>
				<Link onClick={() => setType("resorts")}>
					<Heading
						color="primary"
						fontWeight={isResorts ? undefined : "normal"}
						textTransform="uppercase"
					>
						Resorts
					</Heading>
				</Link>
				<Text color="primary" pb={2}>
					|
				</Text>
				<Link onClick={() => setType("airbnbs")}>
					<Heading
						color="primary"
						fontWeight={!isResorts ? undefined : "normal"}
						textTransform="uppercase"
					>
						AirBnbs/Villas
					</Heading>
				</Link>
			</HStack>

			<AnimatePresence mode="wait">
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -12 }}
					initial={{ opacity: 0, y: 12 }}
					key={type}
					style={{ width: "100%" }}
					transition={{ duration: 0.25, ease: "easeOut" }}
				>
					{isMobile ? (
						<VStack gap={4} w="full">
							{listings.map((listing) => (
								<motion.div
									initial={{ opacity: 0, y: 24 }}
									key={listing.title}
									style={{ width: "100%" }}
									transition={{ duration: 0.3, ease: "easeOut" }}
									viewport={{ once: true, amount: 0.3 }}
									whileInView={{ opacity: 1, y: 0 }}
								>
									<Box w="full">
										<Listing {...listing} />
									</Box>
								</motion.div>
							))}
						</VStack>
					) : (
						<VStack gap="50px" w="full">
							{rows.map((row) => (
								<motion.div
									initial={{ opacity: 0, y: 24 }}
									key={row[0]?.title}
									style={{ width: "100%" }}
									transition={{ duration: 0.3, ease: "easeOut" }}
									viewport={{ once: true, amount: 0.3 }}
									whileInView={{ opacity: 1, y: 0 }}
								>
									<Grid
										gap={8}
										templateColumns={{
											md: "repeat(2, 1fr)",
											lg: "repeat(3, 1fr)",
										}}
										w="full"
									>
										{row.map((listing) => (
											<Listing key={listing.title} {...listing} />
										))}
									</Grid>
								</motion.div>
							))}
						</VStack>
					)}
				</motion.div>
			</AnimatePresence>
		</VStack>
	);
};

export default AccommodationsContent;
