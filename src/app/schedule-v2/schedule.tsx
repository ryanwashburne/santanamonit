import { Container, Flex, Image, VStack } from "@chakra-ui/react";
import Wedding from "@/app/schedule-v2/wedding";
import WelcomeParty from "@/app/schedule-v2/welcome-party";
import type { AttendeeType } from "@/constants/attendee";

type Props = {
	attendeeType: AttendeeType;
};

const Schedule: React.FC<Props> = ({ attendeeType }) => {
	return (
		<VStack align="stretch">
			<Container w="full">
				<Flex justify="center" w="full">
					<Image src={`/schedule/${attendeeType}.svg`} />
				</Flex>
			</Container>

			<VStack align="stretch" gap={0}>
				<WelcomeParty />
				<Wedding />
			</VStack>
		</VStack>
	);
};

export default Schedule;
