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

			<Box position="relative">
				<Container>
					<RSVP name={name} />
				</Container>
				<RSVPOverlay onSubmit={(p) => setName(p.firstName)} open={!name} />
			</Box>
		</Box>
	);
};

export default RSVPPage;
