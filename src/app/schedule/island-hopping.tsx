import boat from "../../../public/boat.svg";
import HorizontalEventCard from "./horizontal-event-card";

const IslandHopping = () => {
	return (
		<HorizontalEventCard
			date="June 13th | Saturday"
			imageAlt="island hopping"
			imagePosition="right"
			imageSrc={boat}
			time="8AM"
			title="Island Hopping"
		/>
	);
};

export default IslandHopping;
