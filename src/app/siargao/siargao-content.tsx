"use client";

import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ExperienceTabContent from "@/app/siargao/siargao-experience-tab";
import InfoTabContent from "@/app/siargao/siargao-info-tab";

type SiargaoTab = "info" | "experience";

const SiargaoContent = () => {
	const [tab, setTab] = useState<SiargaoTab>("info");
	const isInfo = tab === "info";

	return (
		<VStack gap={16}>
			<HStack fontSize="xl" gap={4}>
				<Link onClick={() => setTab("info")}>
					<Heading
						color="primary"
						fontWeight={isInfo ? undefined : "normal"}
						textTransform="uppercase"
					>
						Info
					</Heading>
				</Link>
				<Text color="primary" pb={2}>
					|
				</Text>
				<Link onClick={() => setTab("experience")}>
					<Heading
						color="primary"
						fontWeight={!isInfo ? undefined : "normal"}
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
					{isInfo ? <InfoTabContent /> : <ExperienceTabContent />}
				</motion.div>
			</AnimatePresence>
		</VStack>
	);
};

export default SiargaoContent;
