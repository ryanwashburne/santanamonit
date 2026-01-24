"use client";

import {
	Center,
	Container,
	Flex,
	type FlexProps,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import harana from "public/harana.png";
import boat1 from "public/schedule/boat1.png";
import boat2 from "public/schedule/boat2.png";
import Wedding from "@/app/schedule/wedding";
import AnimateInView from "@/components/animate-in-view";
import { AttendeeType } from "@/constants/attendee";
import { BOTTOM_PADDING } from "@/constants/spacing";

type Props = {
	enableAnimation: boolean;
	attendeeType: AttendeeType;
};

const SubSection = (props: FlexProps) => {
	return (
		<Flex flexDirection="column" h="350px" w="full" {...props}>
			{props.children}
		</Flex>
	);
};

const Section = (props: FlexProps) => {
	return (
		<Flex flexDirection="column" h="700px" w="full" {...props}>
			{props.children}
		</Flex>
	);
};

const MobileSchedule: React.FC<Props> = ({ attendeeType, enableAnimation }) => {
	return (
		<VStack align="stretch" pb={BOTTOM_PADDING}>
			<Container mb={8}>
				<Flex justify="center" w="full">
					<Image src={`/schedule/mobile-${attendeeType}.svg`} />
				</Flex>
			</Container>

			<VStack align="stretch" gap={0}>
				<AnimateInView enabled={enableAnimation}>
					<Section>
						<SubSection>
							<Image asChild maxH={350} objectFit="cover">
								<NextImage alt="harana" src={harana} />
							</Image>
						</SubSection>
						<SubSection bg="primary" color="background">
							<Center h="full" textAlign="center">
								<VStack gap={8}>
									<VStack gap={1}>
										<Heading
											fontSize="16px"
											fontWeight="normal"
											textTransform="uppercase"
										>
											{attendeeType !== AttendeeType.GUEST
												? "Rehearsal Brunch & Welcome Party"
												: "Welcome Party"}
										</Heading>
										<Text>June 10th | Wednesday</Text>
									</VStack>

									{attendeeType !== AttendeeType.GUEST ? (
										<>
											<VStack gap={1}>
												<Text textTransform="uppercase">Brunch</Text>
												<Text>Bravo Resort 10AM</Text>
											</VStack>
											<VStack gap={1}>
												<Text textTransform="uppercase">Welcome Party</Text>
												<Text>Harana Beach Bar 4-7PM</Text>
											</VStack>
										</>
									) : (
										<VStack gap={1}>
											<Text>Harana Beach Bar</Text>
											<Text>4-7PM</Text>
										</VStack>
									)}
								</VStack>
							</Center>
						</SubSection>
					</Section>
				</AnimateInView>

				<AnimateInView enabled={enableAnimation}>
					<Section bg="#AAB25F">
						<Center h="full">
							<Wedding />
						</Center>
					</Section>
				</AnimateInView>

				{attendeeType === "wp" && (
					<AnimateInView enabled={enableAnimation}>
						<Section>
							<SubSection bg="primary" color="background">
								<Center h="full" textAlign="center">
									<VStack gap={1}>
										<Heading
											fontSize="16px"
											fontWeight="normal"
											mb={6}
											textTransform="uppercase"
										>
											Island Hopping
										</Heading>
										<Text>June 13th | Saturday</Text>
										<Text>8AM</Text>
									</VStack>
								</Center>
							</SubSection>

							<SubSection>
								<Image
									asChild
									maxH={175}
									objectFit="cover"
									objectPosition="bottom"
								>
									<NextImage alt="island hopping boat 1" src={boat1} />
								</Image>
								<Image asChild maxH={175} objectFit="cover">
									<NextImage alt="island hopping boat 2" src={boat2} />
								</Image>
							</SubSection>
						</Section>
					</AnimateInView>
				)}
			</VStack>
		</VStack>
	);
};

export default MobileSchedule;
