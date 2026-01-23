"use client";

import { VStack } from "@chakra-ui/react";
import {
	InfoSection,
	InfoSubsection,
	InfoText,
} from "@/components/info-section";

const ExperienceTabContent = () => {
	return (
		<VStack align="stretch" gap={24}>
			<InfoSection index={0} title="Surfing">
				<InfoSubsection label="Cloud 9">
					The most popular and well-known surfing spot in the Philippines. If
					you're a beginner you can also take lessons here.
				</InfoSubsection>

				<InfoSubsection label="Ocean 9">
					15 min North of General Luna with fewer crowds compared to Cloud 9.
				</InfoSubsection>

				<InfoSubsection label="Secret Spot Surfing Beach">
					15 min north of General Luna. This is a surfing only beach and
					directions can be confusing. Ask us if you want to do this!
				</InfoSubsection>
			</InfoSection>

			<InfoSection index={1} title="Beach (Laying Out)">
				<InfoSubsection label="Cloud 9">
					You can lay out here and there's also a tower to watch the surfers.
				</InfoSubsection>

				<InfoSubsection label="Bravo Resort's beachfront">
					A great option with a restaurant at the property.
				</InfoSubsection>

				<InfoSubsection label="Tourism Road">
					Along Tourism Road there are several walking path access points to the
					beach if you just keep an eye out for them. There is also a Beach
					Access path across from Vivo Resort.
				</InfoSubsection>

				<InfoSubsection label="Ocean 9">
					15 min North of General Luna, Ocean 9 is a surfing resort with
					beachfront access.
				</InfoSubsection>

				<InfoSubsection label="Secret Beach">
					15 min from town in Malinao, Secret Beach also known as Doot Beach is
					a chill spot to lay out amongst the mangroves. [Possible closure
					during this time of year]
				</InfoSubsection>
			</InfoSection>

			<InfoSection index={2} title="Sunset Spots">
				<InfoText>Catagnan Bridge</InfoText>
				<InfoText>Ocean 9</InfoText>
				<InfoText>Jacking Horse / Ocean 101</InfoText>
			</InfoSection>

			<InfoSection index={3} title="Island Tours / Day Trips">
				<InfoSubsection label="Tri Island Tour">
					Boat tour to: Naked Island, Daku Island, and Guyam Island.
				</InfoSubsection>

				<InfoSubsection label="San Benito Island Hopping">
					Boat tour to: Pagbasayan Island, Dahican Beach, Kampayas Island, and
					Kangkangon Island
				</InfoSubsection>

				<InfoSubsection label="North Siargao Tour">
					Notable Spots: Sea of Palm Trees view spot, Magkakapupunko Rock Pools,
					Tayangaban Cave Pool, Pacifico Beach, Trogon's Perch for lunch,
					Alegria Beach, Somyot Cave, etc.
					<br />
					<br />
					*you can rent a car or motorbike to explore on your own or book
					through an operator to take you around for the day.
				</InfoSubsection>

				<InfoSubsection label="Other (nice tours with longer travel)">
					Sohoton Cave, Mamon Island, Corregidor Island, Sugba Lagoon
				</InfoSubsection>
			</InfoSection>
		</VStack>
	);
};

export default ExperienceTabContent;
