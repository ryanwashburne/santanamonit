import { Flex } from "@chakra-ui/react";
import NextImage from "next/image";
import boat1 from "../../../public/schedule/boat1.png";
import boat2 from "../../../public/schedule/boat2.png";
import HorizontalEventCard from "./horizontal-event-card";

const IslandHopping = () => {
	return (
		<HorizontalEventCard
			customImageElement={
				<Flex direction="column" h="full" w={{ base: "full", md: "50%" }}>
					<NextImage
						alt="island hopping boat 1"
						src={boat1}
						style={{ width: "100%", height: "50%", objectFit: "cover" }}
					/>
					<NextImage
						alt="island hopping boat 2"
						src={boat2}
						style={{ width: "100%", height: "50%", objectFit: "cover" }}
					/>
				</Flex>
			}
			date="June 13th | Saturday"
			imagePosition="right"
			time="8AM"
			title="Island Hopping"
		/>
	);
};

export default IslandHopping;
