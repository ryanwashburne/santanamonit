"use client";

import { Box, Container } from "@chakra-ui/react";
import RSVP from "@/app/rsvp/rsvp";
import RSVPOverlay from "@/app/rsvp/rsvp-overlay";
import PageHeader from "@/components/page-header";
import { BOTTOM_PADDING } from "@/constants/spacing";
import { useGuest } from "@/contexts/guest-context";

const RSVPPage = () => {
	const { guest } = useGuest();

	return (
		<Box pb={BOTTOM_PADDING}>
			<Container>
				<PageHeader title="RSVP" />
			</Container>

			<Box bg="background" position="relative">
				<Container py={12}>
					<RSVP name={guest?.firstName ?? ""} />
				</Container>
				<RSVPOverlay
					buttonText="View My Schedule"
					title="Please enter your name to RSVP"
				/>
			</Box>
		</Box>
	);
};

export default RSVPPage;
