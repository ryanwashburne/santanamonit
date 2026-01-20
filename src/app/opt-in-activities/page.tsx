"use client";

import {
	Box,
	Container,
	Grid,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import ActivityCard from "@/app/opt-in-activities/activity-card";
import PageHeader from "@/components/page-header";
import { BOTTOM_PADDING } from "@/constants/spacing";

const WHITE_FILTER =
	"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)";

const OptInActivitiesPage = () => {
	return (
		<Box overflow="hidden" pb={BOTTOM_PADDING} position="relative">
			<VStack
				align="stretch"
				fontSize={{ base: "md", md: "lg" }}
				gap={{ base: 8, md: 16 }}
				position="relative"
				zIndex={1}
			>
				<Container>
					<PageHeader title="Extra Adventures" />
				</Container>

				<Container maxW={{ base: "md", md: "5xl" }} px={8}>
					<VStack gap={{ base: 12, md: 24 }}>
						<Grid
							gap={{ base: 8, md: 16 }}
							templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
						>
							<Box>
								<ActivityCard
									date="June 13th"
									description="A boat tour that takes you to 3 islands: Guyam Island, Naked Island, and Daku Island. Boats depart around 7-8AM. Boodle lunch will be served. "
									image="/opt-in-activities/island-hopping.png"
									title="Island Hopping"
								/>
							</Box>
							<Box>
								<ActivityCard
									date="June 14th"
									description={
										<Text>
											{`Some spots to choose from are: Sea of Palm Trees view spot,
									Magpupunko Rock Pools, Tayangban Cave Pool, Pacifico Beach,
									Trogon’s Perch for lunch, Alegria Beach, Somyot Cavet, etc.`}
											<br />
											<br />
											{`We will be booking through an operator to take us around.
									However, you can also choose to motorbike this!`}
										</Text>
									}
									image="/opt-in-activities/north-tour.png"
									title="North Tour"
								/>
							</Box>
						</Grid>

						<Container maxW="4xl">
							<VStack gap={4} mt={{ base: 4, md: 0 }} textAlign="center">
								<Text>
									If you would like to join us on any additional excursions,
									click the link below and let us know via Google Form. Prices
									for each activity will be around 1500php per person.
								</Text>

								<Link
									color="text"
									href="https://forms.gle/k9ay8PbFPbbhyzRz8"
									textDecoration="underline"
								>
									RSVP for activities here
								</Link>
							</VStack>
						</Container>
					</VStack>
				</Container>
			</VStack>

			{/* Tree Right - Top Right */}
			<Image
				alt="tree decoration"
				css={{ filter: WHITE_FILTER }}
				h="auto"
				pointerEvents="none"
				position="absolute"
				right={0}
				src="/opt-in-activities/tree-right.svg"
				top={0}
				w={{ base: "40vw", md: "30vw" }}
				zIndex={0}
			/>

			{/* Tree Left - Middle Left (mobile) / Bottom Left (desktop) */}
			<Image
				alt="tree decoration"
				bottom={{ base: "auto", md: 0 }}
				css={{ filter: WHITE_FILTER }}
				h="auto"
				left={0}
				pointerEvents="none"
				position="absolute"
				src="/opt-in-activities/tree-left.svg"
				top={{ base: "50vh", md: "auto" }}
				w={{ base: "40vw", md: "30vw" }}
				zIndex={0}
			/>

			{/* Tree Right - Bottom Right (mobile only) */}
			<Image
				alt="tree decoration"
				bottom={0}
				css={{ filter: WHITE_FILTER }}
				display={{ base: "block", md: "none" }}
				h="auto"
				pointerEvents="none"
				position="absolute"
				right={0}
				src="/opt-in-activities/tree-right.svg"
				w="40vw"
				zIndex={0}
			/>
		</Box>
	);
};

export default OptInActivitiesPage;
