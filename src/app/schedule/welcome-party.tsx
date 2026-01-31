import { Text } from "@chakra-ui/react";
import harana from "public/harana.png";
import { AttendeeType } from "@/constants/attendee";
import EventDetail from "./event-detail";
import HorizontalEventCard from "./horizontal-event-card";

type Props = {
	attendeeType: AttendeeType;
};

const WelcomeParty = ({ attendeeType }: Props) => {
	return (
		<HorizontalEventCard
			date="June 10th | Wednesday"
			imageAlt="welcome party"
			imagePosition="left"
			imageSrc={harana}
			title={
				attendeeType !== AttendeeType.GUEST
					? "Rehearsal Brunch & Welcome Party"
					: "Welcome Party"
			}
		>
			{attendeeType !== AttendeeType.GUEST && (
				<EventDetail label="Brunch">
					<Text>Siago Beach Resort 10AM</Text>
				</EventDetail>
			)}

			<EventDetail label="Welcome Party">
				<Text>Harana Beach Bar 4-7PM</Text>
			</EventDetail>
		</HorizontalEventCard>
	);
};

export default WelcomeParty;
