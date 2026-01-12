"use client";

import {
	Box,
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

const AttendButton: React.FC<{
	selected: boolean;
	onClick: () => void;
	children: React.ReactNode;
}> = ({ selected, onClick, children }) => {
	return (
		<Button
			borderColor="black"
			onClick={onClick}
			variant={selected ? undefined : "outline"}
			width="120px"
		>
			{children}
		</Button>
	);
};

enum Attendance {
	ATTENDING = "attending",
	NOT_ATTENDING = "not_attending",
}

const Event: React.FC<{ event: Event }> = ({ event }) => {
	const [buttonValue, setButtonValue] = useState<
		Attendance.ATTENDING | Attendance.NOT_ATTENDING | null
	>(null);

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
			<Heading color="primary" fontSize="2xl">
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
					Attend
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
		<Box maxW="950px" mx="auto" w="100%">
			<Box border="6px solid" borderColor="#56612E" borderRadius="lg" p={3}>
				<Box
					border="6px solid"
					borderColor="#AAB25F"
					borderRadius="lg"
					px={8}
					py={16}
				>
					<form onSubmit={handleSubmit}>
						<VStack>
							<Text fontSize="xl" fontStyle="italic" mb={16} textAlign="center">
								Hi, {name}!
							</Text>

							<VStack gap="80px" maxW="350px" mx="auto">
								{EVENTS.map((event) => {
									return <Event event={event} key={event.title} />;
								})}

								<VStack gap={4} w="100%">
									<Button size="xl" type="submit" width="100%">
										RSVP
									</Button>

									{submitted && (
										<Text
											color="primary"
											fontStyle="italic"
											maxW="80%"
											textAlign="center"
										>
											Thank you! You may edit your responses at any time
										</Text>
									)}
								</VStack>
							</VStack>
						</VStack>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default RSVP;
