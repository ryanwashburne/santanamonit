"use client";

import { Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";

interface InfoSectionProps {
	title: string;
	children: React.ReactNode;
	index?: number;
}

export const InfoSection = ({
	title,
	children,
	index = 0,
}: InfoSectionProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
			viewport={{ once: true, amount: 0.3 }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			<VStack align="stretch" gap={6}>
				<Heading color="primary" fontFamily="header" fontSize="2xl">
					{title}
				</Heading>
				<VStack align="stretch" gap={4}>
					{children}
				</VStack>
			</VStack>
		</motion.div>
	);
};

interface InfoSubsectionProps {
	label: string;
	children: React.ReactNode;
}

export const InfoSubsection = ({ label, children }: InfoSubsectionProps) => {
	return (
		<VStack align="stretch" gap={2}>
			<Text fontFamily="body" fontSize="xl" fontWeight="bold">
				{label}
			</Text>
			<Text fontSize="xl">{children}</Text>
		</VStack>
	);
};

interface InfoTextProps {
	children: React.ReactNode;
}

export const InfoText = ({ children }: InfoTextProps) => {
	return <Text fontSize="xl">{children}</Text>;
};
