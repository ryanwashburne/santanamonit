"use client";

import {
	Box,
	Button,
	ButtonGroup,
	type ButtonProps,
	Field,
	Heading,
	HStack,
	Text,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface Event {
	title: string;
	date: string;
	time: string;
	additionalQuestion?: string;
}

const EVENTS: Event[] = [
	{
		title: "Rehersal Brunch",
		date: "June 10",
		time: "10AM",
	},
	{
		title: "Welcome Party",
		date: "June 10",
		time: "4PM",
	},
	{
		title: "Wedding Day",
		date: "June 11",
		time: "3:30PM",
		additionalQuestion: "Preferred drink(s) of choice",
	},
	{
		title: "Island Hopping",
		date: "June 13",
		time: "8AM",
		additionalQuestion: "Diet Restrictions / Allergies / Notes",
	},
];

const AttendButton: React.FC<ButtonProps> = ({ children }) => {
	const [clicked, setClicked] = useState(false);
	const onClick = () => {
		setClicked(!clicked);
	};

	return (
		<Button
			borderColor="black"
			onClick={onClick}
			variant={clicked ? undefined : "outline"}
			width="170px"
		>
			{children}
		</Button>
	);
};

const Event: React.FC<{ event: Event }> = ({ event }) => {
	return (
		<VStack gap={4} width="100%">
			<Heading color="primary" fontFamily="title" fontSize="2xl">
				{event.title}
			</Heading>

			<HStack fontSize="xl">
				<Text>{event.date}</Text>
				<Text>|</Text>
				<Text>{event.time}</Text>
			</HStack>

			<ButtonGroup gap={6}>
				<AttendButton>Attend</AttendButton>
				<AttendButton>Not Attending</AttendButton>
			</ButtonGroup>

			{event.additionalQuestion && (
				<Field.Root>
					<Field.Label>{event.additionalQuestion}</Field.Label>
					<Textarea bg="white" rows={5} />
				</Field.Root>
			)}
		</VStack>
	);
};

type Props = {
	name?: string;
};

const RSVP: React.FC<Props> = ({ name }) => {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<Box
			border="4px solid"
			borderColor="#56612E"
			maxW="800px"
			mx="auto"
			px={8}
			py={16}
			w="100%"
		>
			<form onSubmit={handleSubmit}>
				<VStack gap="80px" maxW="400px" mx="auto">
					<Text fontStyle="italic">Hi, {name}</Text>

					{EVENTS.map((event) => {
						return <Event event={event} key={event.title} />;
					})}

					<Button type="submit" width="100%">
						RSVP
					</Button>

					{submitted && (
						<Text color="primary" fontStyle="italic">
							Thank you! You may edit your responses at any time
						</Text>
					)}
				</VStack>
			</form>
		</Box>
	);
};

export default RSVP;
