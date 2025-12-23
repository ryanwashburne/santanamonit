"use client";

import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import RSVP from "@/components/rsvp";
import RSVPOverlay from "@/components/rsvp-overlay";

const RSVPPage = () => {
	const [name, setName] = useState("");
	return (
		<Box>
			<Container>
				<VStack>
					<Heading
						color="primary"
						fontFamily="cursive"
						fontSize="8xl"
						lineHeight={2}
					>
						RSVP
					</Heading>
				</VStack>
			</Container>

			<Box position="relative">
				<Container py={8}>
					<RSVP name={name} />
				</Container>
				<RSVPOverlay onSubmit={(p) => setName(p.firstName)} open={!name} />
			</Box>
		</Box>
	);
};

export default RSVPPage;
