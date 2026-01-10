"use client";

import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";
import {
	InfoSection,
	InfoSubsection,
	InfoText,
} from "@/components/info-section";
import PageHeader from "@/components/page-header";
import TabNavigation from "@/components/tab-navigation";

const SiargaoPage = () => {
	const tabs = [
		{
			label: "Info",
			content: (
				<VStack align="stretch" gap={24}>
					<InfoSection title="Getting Around">
						<InfoSubsection label="Trike">
							The easiest and most common way of getting around is by tricycle,
							which can be hailed from the main road. The fare depends on the
							distance, but for around town it's 30php during the day and 50php
							at night. Trikes are always cash only! It will be helpful to carry
							small bills for this.
						</InfoSubsection>

						<InfoSubsection label="Scooter">
							You can rent a scooter for a day or for your whole trip! This is a
							great way to travel to further areas of the island. While riding a
							scooter is fun and easy, please always wear a helmet and be
							careful. Daily rates range from 300-500 pesos, and you can buy
							fuel from gas stations or roadside stalls in clear bottles.
						</InfoSubsection>

						<InfoSubsection label="Car">
							Car rentals in Siargao range from about 2500 - 4000php which are
							great for island exploration days in the North or staying farther
							away from the main town. Coastal Reef Adventure is a recommended
							agency!
						</InfoSubsection>
					</InfoSection>

					<InfoSection title="Phone / SIM Info">
						<InfoText>
							SIM cards can be bought at the airport upon arrival. We recommend
							Smart or Globe for carriers. Please note that your phone must be
							unlocked in order to insert a new sim card.
						</InfoText>
					</InfoSection>

					<InfoSection title="Cash / ATM's">
						<InfoSubsection label="Credit / Debit Cards">
							Hotels and larger establishments (such as large grocery stores and
							some popular restaurants) will accept credit cards. A lot of
							restaurants in Siargao accept cards but more casual eateries will
							still be cash or Gcash only.
						</InfoSubsection>

						<InfoSubsection label="Digital Wallets (GCash and Maya)">
							For locals, GCash is commonly used in stores, restaurants, and
							cafes on the island. However for tourists, a GCash account can
							only be created after you obtain a Philippine phone number.
						</InfoSubsection>

						<InfoSubsection label="Cash">
							Cash is king in Siargao! Expect to pay in cash for all trike
							rides, and it's usually the most convenient for meals and bars as
							well. We recommend arriving in Siargao with the cash you need for
							your trip, and storing excess in your hotel safe.
							<br />
							<br />
							ATM's are available in General Luna, but please be aware of your
							own banks withdrawal fees, international rates, and travel
							notification needs. Sometimes ATM's on the island run out of money
							so please be aware of this as you might have to check a few ATM's
							around town if this is the case.
						</InfoSubsection>
					</InfoSection>

					<VStack
						align="stretch"
						fontSize="xl"
						fontStyle="italic"
						gap={2}
						textAlign="center"
					>
						<Text>
							If you have any questions feel free to contact either of us on
							Whatsapp!
						</Text>
						<Text>
							Nicole: +1 (925) 915- 4912 <br />
							Zach: +81 70-1071-6063
						</Text>
					</VStack>
				</VStack>
			),
		},
		{
			label: "Eat",
			content: <div>Eat content coming soon...</div>,
		},
		{
			label: "Experience",
			content: <div>Experience content coming soon...</div>,
		},
	];

	return (
		<Box
			minH="100vh"
			style={{
				background:
					"linear-gradient(90deg, #BEC673 0%, #BEC673 8%, #50A1D4 8%, #50A1D4 12%, #BEC673 12%, #BEC673 25%, #50A1D4 25%, #50A1D4 27%, #BEC673 27%, #BEC673 42%, #50A1D4 42%, #50A1D4 48%, #BEC673 48%, #BEC673 53%, #50A1D4 53%, #50A1D4 56%, #BEC673 56%, #BEC673 71%, #50A1D4 71%, #50A1D4 74%, #BEC673 74%, #BEC673 88%, #50A1D4 88%, #50A1D4 93%, #BEC673 93%)",
			}}
		>
			<VStack>
				<Container>
					<PageHeader title="About Siargao" />
				</Container>

				<Container maxW="4xl" mt={16}>
					<VStack gap={16}>
						<Image
							alt="Siargao Map"
							borderRadius="lg"
							maxW="2xl"
							src="/siargao-map.png"
							w="full"
						/>

						<Box bg="background" borderRadius="lg" px={8} py={16}>
							<TabNavigation tabs={tabs} />
						</Box>
					</VStack>
				</Container>
			</VStack>
		</Box>
	);
};

export default SiargaoPage;
