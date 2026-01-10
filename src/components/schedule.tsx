import { Container, Flex, Image, VStack } from "@chakra-ui/react";
import Wedding from "@/components/wedding";
import WelcomeParty from "@/components/welcome-party";
import type { ScheduleType } from "@/constants/schedule";

type Props = {
	scheduleType: ScheduleType;
};

const Schedule: React.FC<Props> = ({ scheduleType }) => {
	return (
		<VStack align="stretch">
			<Container w="full">
				<Flex justify="center" w="full">
					<Image src={`/schedule/${scheduleType}.svg`} />
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
