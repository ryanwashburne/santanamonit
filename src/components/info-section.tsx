import { Heading, Text, VStack } from "@chakra-ui/react";

interface InfoSectionProps {
	title: string;
	children: React.ReactNode;
}

export const InfoSection = ({ title, children }: InfoSectionProps) => {
	return (
		<VStack align="stretch" gap={6}>
			<Heading color="primary" fontSize="2xl">
				{title}
			</Heading>
			<VStack align="stretch" gap={4}>
				{children}
			</VStack>
		</VStack>
	);
};

interface InfoSubsectionProps {
	label: string;
	children: React.ReactNode;
}

export const InfoSubsection = ({ label, children }: InfoSubsectionProps) => {
	return (
		<VStack align="stretch" gap={2}>
			<Text fontSize="xl" fontWeight="bold">
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
