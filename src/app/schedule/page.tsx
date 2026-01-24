"use client";

import { Box, Container } from "@chakra-ui/react";
import RSVPOverlay from "@/app/rsvp/rsvp-overlay";
import MobileSchedule from "@/app/schedule/mobile/mobile-schedule";
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
				{/* Desktop */}
				<Box display={{ base: "none", md: "block" }}>
					<Schedule attendeeType={attendeeType} enableAnimation={!!guest} />
				</Box>

				{/* Mobile */}
				<Box display={{ base: "block", md: "none" }}>
					<MobileSchedule
						attendeeType={attendeeType}
						enableAnimation={!!guest}
					/>
				</Box>

				<RSVPOverlay
					buttonText="View My Schedule"
					title="Please enter your name to view your events"
				/>
			</Box>
		</Box>
	);
};

export default ScheduleV2Page;
