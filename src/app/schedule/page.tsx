"use client";

import { Box, Container } from "@chakra-ui/react";
import { useMemo } from "react";
import RSVPOverlay from "@/app/rsvp/rsvp-overlay";
import Schedule from "@/app/schedule/schedule";
import PageHeader from "@/components/page-header";
import { AttendeeType } from "@/constants/attendee";
import { useGuest } from "@/contexts/guest-context";

const ScheduleV2Page = () => {
	const { guest } = useGuest();

	const attendeeType = useMemo(() => {
		if (!guest) return AttendeeType.GUEST;

		const tag = guest.tag.toLowerCase();
		if (tag === "wp") return AttendeeType.WP;
		if (tag === "family") return AttendeeType.FAMILY;
		return AttendeeType.GUEST;
	}, [guest]);

	return (
		<Box>
			<Container>
				<PageHeader title="Schedule of Events" />
			</Container>

			<Box bg="background" position="relative">
				<Schedule attendeeType={attendeeType} />
				<RSVPOverlay
					buttonText="View My Schedule"
					title="Please enter your name to view your events"
				/>
			</Box>
		</Box>
	);
};

export default ScheduleV2Page;
