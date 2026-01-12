"use client";

import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import RSVPOverlay, { type GuestLookupResult } from "@/app/rsvp/rsvp-overlay";
import Schedule from "@/app/schedule/schedule";
import PageHeader from "@/components/page-header";
import { AttendeeType } from "@/constants/attendee";

const ScheduleV2Page = () => {
	const [attendeeType, setAttendeeType] = useState<AttendeeType>(
		AttendeeType.GUEST,
	);
	const [overlayOpen, setOverlayOpen] = useState(true);

	const handleSubmit = (result: GuestLookupResult) => {
		if (!result.found) return;

		const tag = result.tag.toLowerCase();

		if (tag === "wp") {
			setAttendeeType(AttendeeType.WP);
		} else if (tag === "family") {
			setAttendeeType(AttendeeType.FAMILY);
		} else {
			setAttendeeType(AttendeeType.GUEST);
		}

		setOverlayOpen(false);
	};

	return (
		<Box>
			<Container>
				<PageHeader title="Schedule of Events" />
			</Container>

			<Box bg="background" position="relative">
				<Schedule attendeeType={attendeeType} />
				<RSVPOverlay
					buttonText="View My Schedule"
					onSubmit={handleSubmit}
					open={overlayOpen}
					title="Please enter your name to view your events"
				/>
			</Box>
		</Box>
	);
};

export default ScheduleV2Page;
