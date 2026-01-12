import { Text } from "@chakra-ui/react";
import EventDetail from "./event-detail";
import HorizontalEventCard from "./horizontal-event-card";

const WelcomeParty = () => {
	return (
		<HorizontalEventCard
			date="June 10th | Wednesday"
			imageAlt="welcome party"
			imagePosition="left"
			imageSrc="/harana.png"
			title="Rehersal Brunch & Welcome Party"
		>
			<EventDetail label="Brunch">
				<Text>Bravo Resort 10AM</Text>
			</EventDetail>

			<EventDetail label="Welcome Party">
				<Text>Harana Beach Bar 4-7PM</Text>
			</EventDetail>
		</HorizontalEventCard>
	);
};

export default WelcomeParty;
