"use client";

import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import EatTabContent from "@/app/siargao/siargao-eat-tab";
import ExperienceTabContent from "@/app/siargao/siargao-experience-tab";
import InfoTabContent from "@/app/siargao/siargao-info-tab";

type SiargaoTab = "info" | "eat" | "experience";

const SiargaoContent = () => {
	const [tab, setTab] = useState<SiargaoTab>("info");

	const renderTabContent = () => {
		switch (tab) {
			case "info":
				return <InfoTabContent />;
			case "eat":
				return <EatTabContent />;
			case "experience":
				return <ExperienceTabContent />;
		}
	};

	return (
		<VStack gap={16}>
			<HStack gap={4}>
				<Link
					_hover={{ textDecoration: "none" }}
					onClick={() => setTab("info")}
				>
					<Heading
						color="primary"
						fontSize={{ base: "16px", md: "20px" }}
						fontWeight={tab === "info" ? undefined : "normal"}
						textTransform="uppercase"
					>
						Info
					</Heading>
				</Link>
				<Text color="primary" pb={2}>
					|
				</Text>
				<Link _hover={{ textDecoration: "none" }} onClick={() => setTab("eat")}>
					<Heading
						color="primary"
						fontSize={{ base: "16px", md: "20px" }}
						fontWeight={tab === "eat" ? undefined : "normal"}
						textTransform="uppercase"
					>
						Eat
					</Heading>
				</Link>
				<Text color="primary" pb={2}>
					|
				</Text>
				<Link
					_hover={{ textDecoration: "none" }}
					onClick={() => setTab("experience")}
				>
					<Heading
						color="primary"
						fontSize={{ base: "16px", md: "20px" }}
						fontWeight={tab === "experience" ? undefined : "normal"}
						textTransform="uppercase"
					>
						Experience
					</Heading>
				</Link>
			</HStack>

			<AnimatePresence mode="wait">
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -12 }}
					initial={{ opacity: 0, y: 12 }}
					key={tab}
					style={{ width: "100%" }}
					transition={{ duration: 0.25, ease: "easeOut" }}
				>
					{renderTabContent()}
				</motion.div>
			</AnimatePresence>
		</VStack>
	);
};

export default SiargaoContent;
