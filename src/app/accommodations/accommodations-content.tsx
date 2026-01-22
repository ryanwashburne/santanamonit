"use client";

import { Grid, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Listing from "@/app/accommodations/listing";
import AnimateInView from "@/components/animate-in-view";
import { airbnbListings, resortListings } from "@/data/accommodations";

type AccommodationType = "resorts" | "airbnbs";

const AccommodationsContent = () => {
	const [type, setType] = useState<AccommodationType>("resorts");
	const isResorts = type === "resorts";

	const listings = isResorts ? resortListings : airbnbListings;

	return (
		<VStack gap={{ base: 8, md: 16 }}>
			<HStack gap={4}>
				<Link
					_hover={{ textDecoration: "none" }}
					onClick={() => setType("resorts")}
				>
					<Heading
						color="primary"
						fontSize={{ base: "16px", md: "20px" }}
						fontWeight={isResorts ? undefined : "normal"}
						textTransform="uppercase"
					>
						Resorts
					</Heading>
				</Link>
				<Text color="primary" pb={2}>
					|
				</Text>
				<Link
					_hover={{ textDecoration: "none" }}
					onClick={() => setType("airbnbs")}
				>
					<Heading
						color="primary"
						fontSize={{ base: "16px", md: "20px" }}
						fontWeight={!isResorts ? undefined : "normal"}
						textTransform="uppercase"
					>
						AirBnbs/Villas
					</Heading>
				</Link>
			</HStack>

			<Grid
				gap="50px"
				templateColumns={{
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
			>
				{listings.map((listing) => (
					<AnimateInView enabled key={listing.title}>
						<Listing {...listing} />
					</AnimateInView>
				))}
			</Grid>
		</VStack>
	);
};

export default AccommodationsContent;
