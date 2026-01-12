"use client";

import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import RSVP from "@/app/rsvp/rsvp";
import RSVPOverlay from "@/app/rsvp/rsvp-overlay";
import PageHeader from "@/components/page-header";

const RSVPPage = () => {
	const [name, setName] = useState("");
	return (
		<Box>
			<Container>
				<PageHeader title="RSVP" />
			</Container>

			<Box bg="background" position="relative">
				<Container pt={8}>
					<RSVP name={name} />
				</Container>
				<RSVPOverlay
					buttonText="View My Schedule"
					onSubmit={(p) => setName(p.firstName)}
					open={!name}
					title="Please enter your name to RSVP"
				/>
			</Box>
		</Box>
	);
};

export default RSVPPage;
