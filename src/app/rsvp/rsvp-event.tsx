"use client";

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
import { type EventItem, isEvent } from "@/constants/event";

const AttendButton: React.FC<{
	selected: boolean;
	onClick: () => void;
	children: React.ReactNode;
	disabled?: boolean;
}> = ({ selected, onClick, children, disabled }) => {
	return (
		<Button
			_hover={{ boxShadow: disabled ? undefined : "xl" }}
			borderColor="black"
			borderRadius="lg"
			color={selected ? "white" : "text"}
			disabled={disabled}
			height="34px"
			onClick={onClick}
			p={0}
			px={{ base: 4, md: 8 }}
			transition="all 0.3s ease-in-out"
			variant={selected ? undefined : "outline"}
		>
			{children}
		</Button>
	);
};

export type EventResponse = {
	attending: boolean | null;
	answer?: string;
};

type RSVPEventProps = {
	event: EventItem;
	value: EventResponse;
	onChange: (value: EventResponse) => void;
	disabled?: boolean;
};

const RSVPEvent: React.FC<RSVPEventProps> = ({
	event,
	value,
	onChange,
	disabled,
}) => {
	const handleAttendingClick = (attending: boolean) => {
		return () => {
			onChange({
				...value,
				attending: value.attending === attending ? null : attending,
			});
		};
	};

	const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange({
			...value,
			answer: e.target.value,
		});
	};

	if (isEvent(event)) {
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
						disabled={disabled}
						onClick={handleAttendingClick(true)}
						selected={value.attending === true}
					>
						Attending
					</AttendButton>
					<AttendButton
						disabled={disabled}
						onClick={handleAttendingClick(false)}
						selected={value.attending === false}
					>
						Not Attending
					</AttendButton>
				</ButtonGroup>
			</VStack>
		);
	}

	// Question type
	return (
		<VStack gap={4} width="100%">
			<Field.Root>
				<Field.Label
					color="text"
					fontSize="15px"
					fontWeight="normal"
					opacity={0.8}
				>
					{event.question}
				</Field.Label>
				<Textarea
					bg="#EAE2E2"
					borderRadius="lg"
					disabled={disabled}
					onChange={handleAnswerChange}
					rows={5}
					value={value.answer ?? ""}
				/>
			</Field.Root>
		</VStack>
	);
};

export default RSVPEvent;
