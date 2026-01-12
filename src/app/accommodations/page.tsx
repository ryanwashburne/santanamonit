"use client";

import { Container, Grid, VStack } from "@chakra-ui/react";
import Listing from "@/app/accommodations/listing";
import PageHeader from "@/components/page-header";
import TabNavigation from "@/components/tab-navigation";
import { airbnbListings, resortListings } from "@/data/accommodations";

const AccommodationsPage = () => {
	const tabs = [
		{
			label: "Resorts",
			content: (
				<Grid gap={8} templateColumns="repeat(3, 1fr)" w="full">
					{resortListings.map((listing) => (
						<Listing key={listing.title} {...listing} />
					))}
				</Grid>
			),
		},
		{
			label: "AirBnbs/Villas",
			content: (
				<Grid gap={8} templateColumns="repeat(3, 1fr)" w="full">
					{airbnbListings.map((listing) => (
						<Listing key={listing.title} {...listing} />
					))}
				</Grid>
			),
		},
	];

	return (
		<Container>
			<VStack>
				<PageHeader title="Accommodations" />

				<Container maxW="7xl" mt={16}>
					<VStack gap={16}>
						<TabNavigation tabs={tabs} />
					</VStack>
				</Container>
			</VStack>
		</Container>
	);
};

export default AccommodationsPage;
