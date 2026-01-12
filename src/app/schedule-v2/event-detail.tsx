import { type StackProps, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface EventDetailProps {
	label?: string;
	textAlign?: StackProps["textAlign"];
	children: ReactNode;
}

const EventDetail = ({ label, textAlign, children }: EventDetailProps) => {
	return (
		<VStack align="stretch" gap={0} textAlign={textAlign}>
			{label && <Text textTransform="uppercase">{label}</Text>}
			{children}
		</VStack>
	);
};

export default EventDetail;
