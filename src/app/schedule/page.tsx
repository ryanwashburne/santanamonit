"use client";

import { Box, Container } from "@chakra-ui/react";
import RSVPOverlay from "@/app/rsvp/rsvp-overlay";
import Schedule from "@/app/schedule/schedule";
import PageHeader from "@/components/page-header";
import { AttendeeType } from "@/constants/attendee";
import { useGuest } from "@/contexts/guest-context";

const ScheduleV2Page = () => {
	const { guest } = useGuest();

	const attendeeType = guest?.attendeeType ?? AttendeeType.GUEST;

	return (
		<Box>
			<Container>
				<PageHeader title="Schedule of Events" />
			</Container>

			<Box bg="background" position="relative">
				<Schedule attendeeType={attendeeType} enableAnimation={!!guest} />
				<RSVPOverlay
					buttonText="View My Schedule"
					title="Please enter your name to view your events"
				/>
			</Box>
		</Box>
	);
};

export default ScheduleV2Page;
