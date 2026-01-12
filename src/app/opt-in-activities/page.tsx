"use client";

import { Container, Grid, VStack } from "@chakra-ui/react";
import ActivityCard from "@/app/opt-in-activities/activity-card";
import PageHeader from "@/components/page-header";

const OptInActivitiesPage = () => {
	const activities = [
		{
			image: "https://via.placeholder.com/600x400",
			title: "Island Hopping Adventure",
			date: "June 11, 2025",
			description:
				"Join us for an exciting island hopping tour visiting three beautiful islands. We'll explore pristine beaches, snorkel in crystal clear waters, and enjoy a delicious lunch on the beach.",
		},
		{
			image: "https://via.placeholder.com/600x400",
			title: "Sunset Surf Session",
			date: "June 12, 2025",
			description:
				"Experience the magic of surfing at sunset with a professional instructor. Perfect for beginners and intermediate surfers looking to catch some waves during golden hour.",
		},
		{
			image: "https://via.placeholder.com/600x400",
			title: "North Island Tour",
			date: "June 13, 2025",
			description:
				"Discover the hidden gems of Northern Siargao including the famous Magpupungko Rock Pools, stunning viewpoints, and secluded beaches. Transportation and lunch included.",
		},
		{
			image: "https://via.placeholder.com/600x400",
			title: "Cave Exploration",
			date: "June 14, 2025",
			description:
				"Explore the mystical caves of Siargao with an experienced guide. Swim in natural pools, discover hidden chambers, and learn about the geological formations.",
		},
	];

	return (
		<Container>
			<VStack>
				<PageHeader title="Extra Adventures" />

				<Container maxW="7xl" mt={16}>
					<Grid gap={12} templateColumns="repeat(2, 1fr)" w="full">
						{activities.map((activity) => (
							<ActivityCard key={activity.title} {...activity} />
						))}
					</Grid>
				</Container>
			</VStack>
		</Container>
	);
};

export default OptInActivitiesPage;
