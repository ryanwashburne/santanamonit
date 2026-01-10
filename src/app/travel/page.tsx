"use client";

import {
	Box,
	Container,
	Heading,
	HStack,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import InternationalTravel from "@/components/international-travel";
import LocalTravel from "@/components/local-travel";

enum Tab {
	INTERNATIONAL = "International",
	LOCAL = "Local",
}

const TravelPage = () => {
	const [selectedTab, setSelectedTab] = useState(Tab.INTERNATIONAL);

	const handleClick = (tab: Tab) => {
		return () => {
			setSelectedTab(tab);
		};
	};

	const getTravelContent = (selectedTab: Tab) => {
		switch (selectedTab) {
			case Tab.INTERNATIONAL:
				return <InternationalTravel />;
			case Tab.LOCAL:
				return <LocalTravel />;
		}
	};

	return (
		<Container>
			<VStack>
				<Box my={16}>
					<Image alt="greetings" src="/greetings.svg" />
				</Box>

				<HStack fontSize="xl" gap={4}>
					<Link onClick={handleClick(Tab.INTERNATIONAL)}>
						<Heading
							color="primary"
							fontWeight={
								selectedTab === Tab.INTERNATIONAL ? undefined : "normal"
							}
							textTransform="uppercase"
						>
							{Tab.INTERNATIONAL}
						</Heading>
					</Link>
					<Text color="primary" pb={2}>
						|
					</Text>
					<Link onClick={handleClick(Tab.LOCAL)}>
						<Heading
							color="primary"
							fontWeight={selectedTab === Tab.LOCAL ? undefined : "normal"}
							textTransform="uppercase"
						>
							{Tab.LOCAL}
						</Heading>
					</Link>
				</HStack>

				<Container maxW="4xl" mt={16}>
					<VStack gap={16}>
						{getTravelContent(selectedTab)}

						<VStack fontSize="xl">
							<Text textAlign="center">
								Our flight information to Siargao
								<br />
								CRK - IAO June 9th DG6763
								<br />
								IAO - CRK June 15th DG 6764
							</Text>
						</VStack>
						<Image alt="travel footer" src="/travel.png" />
					</VStack>
				</Container>
			</VStack>
		</Container>
	);
};

export default TravelPage;
