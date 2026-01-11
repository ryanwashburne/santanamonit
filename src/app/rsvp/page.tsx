"use client";

import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import PageHeader from "@/components/page-header";
import RSVP from "@/components/rsvp";
import RSVPOverlay from "@/components/rsvp-overlay";

const RSVPPage = () => {
	const [name, setName] = useState("");
	return (
		<Box>
			<Container>
				<PageHeader title="RSVP" />
			</Container>

			<Box bg="background" position="relative">
				<Container>
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
