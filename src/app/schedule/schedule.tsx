import { Container, Flex, Image, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import familySchedule from "public/schedule/family.png";
import guestSchedule from "public/schedule/guest.png";
import wpSchedule from "public/schedule/wp.png";
import IslandHopping from "@/app/schedule/island-hopping";
import Wedding from "@/app/schedule/wedding";
import WelcomeParty from "@/app/schedule/welcome-party";
import AnimateInView from "@/components/animate-in-view";
import { AttendeeType } from "@/constants/attendee";
import { BOTTOM_PADDING } from "@/constants/spacing";

const scheduleImages = {
	[AttendeeType.WP]: wpSchedule,
	[AttendeeType.FAMILY]: familySchedule,
	[AttendeeType.GUEST]: guestSchedule,
};

type Props = {
	enableAnimation: boolean;
	attendeeType: AttendeeType;
};

const Schedule: React.FC<Props> = ({ enableAnimation, attendeeType }) => {
	return (
		<VStack align="stretch" pb={BOTTOM_PADDING}>
			<Container>
				<Flex justify="center" w="full">
					<Image asChild>
						<NextImage
							alt="schedule"
							quality={100}
							src={scheduleImages[attendeeType]}
						/>
					</Image>
				</Flex>
			</Container>

			<VStack align="stretch" gap={0}>
				<AnimateInView enabled={enableAnimation}>
					<WelcomeParty attendeeType={attendeeType} />
				</AnimateInView>
				<AnimateInView enabled={enableAnimation}>
					<Wedding />
				</AnimateInView>
				{attendeeType === "wp" && (
					<AnimateInView enabled={enableAnimation}>
						<IslandHopping />
					</AnimateInView>
				)}
			</VStack>
		</VStack>
	);
};

export default Schedule;
