"use client";

import { Grid, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Listing from "@/app/accommodations/listing";
import { airbnbListings, resortListings } from "@/data/accommodations";

type AccommodationType = "resorts" | "airbnbs";

const AccommodationsContent = () => {
	const [type, setType] = useState<AccommodationType>("resorts");
	const isResorts = type === "resorts";

	const listings = isResorts ? resortListings : airbnbListings;

	return (
		<VStack gap={16}>
			<HStack fontSize="xl" gap={4}>
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
					<Grid gap={8} templateColumns="repeat(3, 1fr)" w="full">
						{listings.map((listing, index) => (
							<Listing key={listing.title} {...listing} index={index} />
						))}
					</Grid>
				</motion.div>
			</AnimatePresence>
		</VStack>
	);
};

export default AccommodationsContent;
