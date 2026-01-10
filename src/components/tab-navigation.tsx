"use client";

import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface TabConfig {
	label: string;
	content: React.ReactNode;
}

interface TabNavigationProps {
	tabs: TabConfig[];
	defaultTab?: number;
}

const TabNavigation = ({ tabs, defaultTab = 0 }: TabNavigationProps) => {
	const [selectedTabIndex, setSelectedTabIndex] = useState(defaultTab);

	const handleClick = (index: number) => {
		return () => {
			setSelectedTabIndex(index);
		};
	};

	return (
		<VStack gap={16}>
			<HStack fontSize="xl" gap={4}>
				{tabs.map((tab, index) => (
					<>
						{index > 0 && (
							<Text color="primary" pb={2}>
								|
							</Text>
						)}
						<Link key={tab.label} onClick={handleClick(index)}>
							<Heading
								color="primary"
								fontWeight={selectedTabIndex === index ? undefined : "normal"}
								textTransform="uppercase"
							>
								{tab.label}
							</Heading>
						</Link>
					</>
				))}
			</HStack>

			{tabs[selectedTabIndex]?.content}
		</VStack>
	);
};

export default TabNavigation;
