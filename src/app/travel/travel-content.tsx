"use client";

import {
	Collapsible,
	Heading,
	HStack,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";

type TravelMode = "international" | "local";

const TravelContent = () => {
	const [mode, setMode] = useState<TravelMode>("international");
	const isInternational = mode === "international";

	return (
		<VStack gap={16}>
			<HStack fontSize="xl" gap={4}>
				<Link onClick={() => setMode("international")}>
					<Heading
						color="primary"
						fontWeight={isInternational ? undefined : "normal"}
						textTransform="uppercase"
					>
						International
					</Heading>
				</Link>
				<Text color="primary" pb={2}>
					|
				</Text>
				<Link onClick={() => setMode("local")}>
					<Heading
						color="primary"
						fontWeight={!isInternational ? undefined : "normal"}
						textTransform="uppercase"
					>
						Local
					</Heading>
				</Link>
			</HStack>

			<VStack gap="80px" textAlign="center">
				<Collapsible.Root open={isInternational}>
					<Collapsible.Content>
						<VStack gap="80px" textAlign="center">
							<Text fontSize="xl">
								Siargao is a domestic airport, you will likely transit through
								one of these two main International Airports in the Philippines,
								depending on where you are coming from.
							</Text>

							<VStack gap={1}>
								<Heading color="primary" fontWeight="normal">
									Embarking Airport
								</Heading>
								<Text>SFO / LAX / PIT / JFK / EWR / NRT / HND / ETC.</Text>
							</VStack>

							<Image alt="arrow down left" src="/arrow-down-left.svg" />
						</VStack>
					</Collapsible.Content>
				</Collapsible.Root>

				<VStack>
					<Heading color="primary" fontWeight="normal">
						Manila International Airport (MNL) / Clark International Airport
						(CRK)
					</Heading>
					<Text>OR</Text>
					<Heading color="primary" fontWeight="normal">
						Mactan - Cebu International Airport (MCIA)
					</Heading>
				</VStack>

				<Image alt="arrow down right" src="/arrow-down-right.svg" />

				<Heading color="primary" fontWeight="normal">
					Siargao Sayak Airport (IAO)
				</Heading>

				<Image alt="surfboard" src="/surfboard.svg" />
			</VStack>
		</VStack>
	);
};

export default TravelContent;
