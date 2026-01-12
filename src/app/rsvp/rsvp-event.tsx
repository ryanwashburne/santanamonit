import {
	Button,
	ButtonGroup,
	Field,
	Heading,
	HStack,
	Text,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import type { Event } from "@/constants/event";

const AttendButton: React.FC<{
	selected: boolean;
	onClick: () => void;
	children: React.ReactNode;
}> = ({ selected, onClick, children }) => {
	return (
		<Button
			borderColor="black"
			borderRadius="lg"
			color={selected ? "white" : "text"}
			height="34px"
			onClick={onClick}
			p={0}
			px={8}
			variant={selected ? undefined : "outline"}
		>
			{children}
		</Button>
	);
};

enum Attendance {
	ATTENDING = "attending",
	NOT_ATTENDING = "not_attending",
}

const RSVPEvent: React.FC<{ event: Event }> = ({ event }) => {
	const [buttonValue, setButtonValue] = useState<Attendance | null>(null);

	const handleClick = (
		value: Attendance.ATTENDING | Attendance.NOT_ATTENDING,
	) => {
		return () => {
			setButtonValue((oldValue) => {
				if (oldValue === value) return null;
				return value;
			});
		};
	};

	return (
		<VStack gap={4} width="100%">
			<Heading color="primary" fontSize="xl" fontWeight="normal">
				{event.title}
			</Heading>

			<HStack fontSize="xl">
				<Text>{event.date}</Text>
				<Text>|</Text>
				<Text>{event.time}</Text>
			</HStack>

			<ButtonGroup gap={6}>
				<AttendButton
					onClick={handleClick(Attendance.ATTENDING)}
					selected={buttonValue === Attendance.ATTENDING}
				>
					Attending
				</AttendButton>
				<AttendButton
					onClick={handleClick(Attendance.NOT_ATTENDING)}
					selected={buttonValue === Attendance.NOT_ATTENDING}
				>
					Not Attending
				</AttendButton>
			</ButtonGroup>

			{event.additionalQuestion && (
				<Field.Root mt={8}>
					<Field.Label>{event.additionalQuestion}</Field.Label>
					<Textarea bg="#EAE2E2" borderRadius="lg" rows={5} />
				</Field.Root>
			)}
		</VStack>
	);
};

export default RSVPEvent;
