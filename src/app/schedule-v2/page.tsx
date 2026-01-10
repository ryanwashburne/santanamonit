"use client";

import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import PageHeader from "@/components/page-header";
import RSVPOverlay from "@/components/rsvp-overlay";
import Schedule from "@/components/schedule";
import { ScheduleType } from "@/constants/schedule";

const ScheduleV2Page = () => {
	const [scheduleType, setScheduleType] = useState<ScheduleType>(
		ScheduleType.GUEST,
	);
	const [overlayOpen, setOverlayOpen] = useState(true);

	const handleSubmit = ({ firstName }: { firstName: string }) => {
		const name = firstName.toLowerCase().trim();

		if (name === "ryan") {
			setScheduleType(ScheduleType.WP);
		} else if (name === "family") {
			setScheduleType(ScheduleType.FAMILY);
		} else {
			setScheduleType(ScheduleType.GUEST);
		}

		setOverlayOpen(false);
	};

	return (
		<Box>
			<Container>
				<PageHeader title="Schedule of Events" />
			</Container>

			<Box position="relative">
				<Schedule scheduleType={scheduleType} />
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
