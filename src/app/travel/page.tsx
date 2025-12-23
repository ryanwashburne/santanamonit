"use client";

import {
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
				<Image alt="greetings" src="/greetings.svg" />

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
					{getTravelContent(selectedTab)}
				</Container>
			</VStack>
		</Container>
	);
};

export default TravelPage;
