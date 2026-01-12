"use client";

import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import RSVP from "@/app/rsvp/rsvp";
import RSVPOverlay from "@/app/rsvp/rsvp-overlay";
import PageHeader from "@/components/page-header";
import { BOTTOM_PADDING } from "@/constants/spacing";

type GuestInfo = {
	firstName: string;
	lastName: string;
	group: number;
	tag: string;
};

const RSVPPage = () => {
	const [guest, setGuest] = useState<GuestInfo | null>(null);
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
					onSubmit={(result) => {
						if (result.found) {
							setGuest({
								firstName: result.firstName,
								lastName: result.lastName,
								group: result.group,
								tag: result.tag,
							});
						}
					}}
					open={!guest}
					title="Please enter your name to RSVP"
				/>
			</Box>
		</Box>
	);
};

export default RSVPPage;
