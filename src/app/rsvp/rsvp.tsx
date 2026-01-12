"use client";

import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import RSVPEvent from "@/app/rsvp/rsvp-event";
import type { Event } from "@/constants/event";

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

							<VStack gap="80px" maxW="300px" mx="auto" w="full">
								{EVENTS.map((event) => {
									return <RSVPEvent event={event} key={event.title} />;
								})}

								<VStack gap={4} w="100%">
									<Button borderRadius="lg" h="36px" type="submit" width="100%">
										RSVP
									</Button>

									{submitted && (
										<Text
											color="primary"
											fontStyle="italic"
											// maxW="80%"
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
