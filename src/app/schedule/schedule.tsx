import { Container, Flex, Image, VStack } from "@chakra-ui/react";
import IslandHopping from "@/app/schedule/island-hopping";
import Wedding from "@/app/schedule/wedding";
import WelcomeParty from "@/app/schedule/welcome-party";
import AnimateInView from "@/components/animate-in-view";
import type { AttendeeType } from "@/constants/attendee";
import { BOTTOM_PADDING } from "@/constants/spacing";

type Props = {
	enableAnimation: boolean;
	attendeeType: AttendeeType;
};

const Schedule: React.FC<Props> = ({ enableAnimation, attendeeType }) => {
	return (
		<VStack align="stretch" pb={BOTTOM_PADDING}>
			{/* Desktop */}
			<Container
				display={{ base: "none", md: "block" }}
				mb={32}
				mt={{ base: 8, md: 48 }}
				w="full"
			>
				<Flex justify="center" w="full">
					<Image src={`/schedule/${attendeeType}.svg`} />
				</Flex>
			</Container>

			{/* Mobile */}
			<Container display={{ base: "block", md: "none" }}>
				<Flex justify="center" w="full">
					<Image src={`/schedule/mobile-${attendeeType}.svg`} />
				</Flex>
			</Container>

			<VStack align="stretch" gap={0}>
				<AnimateInView enabled={enableAnimation}>
					<WelcomeParty />
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
