"use client";

import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RSVPEvent, { type EventResponse } from "@/app/rsvp/rsvp-event";
import type { Event } from "@/constants/event";
import { useGuest } from "@/contexts/guest-context";
import { api } from "@/trpc/react";

const EVENTS: Event[] = [
	{
		id: "rehearsal-brunch",
		title: "Rehersal Brunch",
		date: "June 10",
		time: "10AM",
	},
	{
		id: "welcome-party",
		title: "Welcome Party",
		date: "June 10",
		time: "4PM",
	},
	{
		id: "wedding-day",
		title: "Wedding Day",
		date: "June 11",
		time: "3:30PM",
		additionalQuestion: "Preferred drink(s) of choice",
	},
	{
		id: "island-hopping",
		title: "Island Hopping",
		date: "June 13",
		time: "8AM",
		additionalQuestion: "Diet Restrictions / Allergies / Notes",
	},
];

const createEmptyResponses = (): Record<string, EventResponse> => {
	const responses: Record<string, EventResponse> = {};
	for (const event of EVENTS) {
		responses[event.id] = { attending: null, answer: "" };
	}
	return responses;
};

const RSVP: React.FC = () => {
	const { guest } = useGuest();
	const [responses, setResponses] =
		useState<Record<string, EventResponse>>(createEmptyResponses);
	const [hasInitialized, setHasInitialized] = useState(false);

	const { data: existingResponse, isLoading } = api.rsvp.getResponse.useQuery(
		{ firstName: guest?.firstName ?? "", lastName: guest?.lastName ?? "" },
		{ enabled: !!guest },
	);

	const submitMutation = api.rsvp.submitResponse.useMutation();

	useEffect(() => {
		if (existingResponse && !hasInitialized) {
			const savedResponses = existingResponse.responses as Record<
				string,
				EventResponse
			>;
			setResponses((prev) => {
				const merged = { ...prev };
				for (const key of Object.keys(savedResponses)) {
					if (merged[key]) {
						merged[key] = {
							...merged[key],
							...savedResponses[key],
						};
					}
				}
				return merged;
			});
			setHasInitialized(true);
		}
	}, [existingResponse, hasInitialized]);

	const handleEventChange = (eventId: string) => {
		return (value: EventResponse) => {
			setResponses((prev) => ({
				...prev,
				[eventId]: value,
			}));
		};
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!guest) return;

		submitMutation.mutate({
			firstName: guest.firstName,
			lastName: guest.lastName,
			responses,
		});
	};

	const displayName = guest?.firstName ?? "Guest";

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
								Hi, {displayName}!
							</Text>

							<VStack gap="80px" maxW="300px" mx="auto" w="full">
								{EVENTS.map((event) => {
									return (
										<RSVPEvent
											event={event}
											key={event.id}
											onChange={handleEventChange(event.id)}
											value={responses[event.id] ?? { attending: null }}
										/>
									);
								})}

								<VStack gap={4} w="100%">
									<Button
										borderRadius="lg"
										disabled={submitMutation.isPending || isLoading}
										h="36px"
										type="submit"
										width="100%"
									>
										{submitMutation.isPending ? "Saving..." : "RSVP"}
									</Button>

									{submitMutation.isSuccess && (
										<Text color="primary" fontStyle="italic" textAlign="center">
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
