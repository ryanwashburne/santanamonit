"use client";

import {
	Box,
	Center,
	Grid,
	GridItem,
	Heading,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextImage, { type StaticImageData } from "next/image";
import AnimateInView from "@/components/animate-in-view";

import alma from "../../../public/siargao/alma.png";
import cev from "../../../public/siargao/cev.png";
import cocoFrio from "../../../public/siargao/coco_frio.png";
import goodies from "../../../public/siargao/goodies.png";
import kaninBaboy from "../../../public/siargao/kanin_baboy.png";
import kermit from "../../../public/siargao/kermit.png";
import kurvadaDerecho from "../../../public/siargao/kurvada_derecho.png";
import lamari from "../../../public/siargao/lamari.png";
import lasBarricas from "../../../public/siargao/las_barricas.png";
import mondays from "../../../public/siargao/mondays.png";
import roots from "../../../public/siargao/roots.png";
import shaka from "../../../public/siargao/shaka.png";
import siago from "../../../public/siargao/sigao.png";
import spottedPig from "../../../public/siargao/spotted_pig.png";
import wild from "../../../public/siargao/wild.png";

interface EatTile {
	imageSrc?: StaticImageData | string;
	title?: string;
	description?: string;
	text?: string;
	span2?: boolean;
}

interface EatSection {
	title?: string;
	tiles: EatTile[];
}

const EAT_SECTIONS: EatSection[] = [
	{
		tiles: [
			{
				text: "Breakfast & Brunch",
			},
			{
				imageSrc: spottedPig,
				title: "Spotted Pig",
				description:
					"Some of the best coffee on the island! It’s a small cafe with great breakfast. We love the mushroom toast here.",
			},
			{
				imageSrc: mondays,
				title: "Mondays",
				description:
					"Healthy and plentiful brunch options. We love the French toast!",
			},
			{
				imageSrc: cocoFrio,
				title: "Coco Frio",
				description:
					"An iconic haunt in Siargao. Come here for coconut based coffee drinks - the coconut ice cream is great as well.",
			},
			{
				imageSrc: goodies,
				title: "Goodies",
				description:
					"A popular place for breakfast, salads and healthy options ! We love the eggplant tortilla open toast and the pancakes.",
			},
			{
				imageSrc: shaka,
				title: "Shaka",
				description: "A great place for acai bowls, salads, and smoothies.",
			},
		],
	},
	{
		title: "Lunch & Dinner",
		tiles: [
			{
				imageSrc: siago,
				title: "Siago",
				description: "A boutique hotel with a great on-site restaurant.",
			},
			{
				imageSrc: cev,
				title: "Cev",
				description: "The best restaurant on the island and a must eat!",
				span2: true,
			},
			{
				imageSrc: wild,
				title: "Wild",
				description: "Filipino food with an elevated twist! Great for dinner.",
			},

			{
				imageSrc: kaninBaboy,
				title: "Kanin Baboy",
				description: "For lechon / pork dishes!",
			},
			{
				imageSrc: alma,
				title: "Alma",
				description: "Very good Spanish cuisine.",
			},
			{
				imageSrc: roots,
				title: "Roots",
				description: "Filipino fine dining with course menus.",
			},
			{
				imageSrc: kermit,
				title: "Kermit",
				description: "Pizza if you're craving it!",
			},
			{
				imageSrc: lasBarricas,
				title: "Las Barricas",
				description: "Small tapas restaurant that has great food and tacos.",
				span2: true,
			},
			{
				imageSrc: lamari,
				title: "Lamari",
				description:
					"Lamari is also a boutique hotel with a popular on-site restaurant!",
			},
			{
				imageSrc: kurvadaDerecho,
				title: "Kurvada / Derecho",
				description:
					'Best "turo turo" restaurants - fill your plate, take a picture of it, and pay based on how much you took. Fast and cheap.',
			},
		],
	},
];

const EatTabContent = () => {
	return (
		<Box>
			{EAT_SECTIONS.map((section, i) => (
				<Box key={i} mb={12}>
					{section.title && (
						<Heading
							color="primary"
							fontFamily="header"
							fontSize="20px"
							my={16}
							textAlign="right"
						>
							{section.title}
						</Heading>
					)}
					<Grid
						gap={{ base: "15px", md: "40px" }}
						templateColumns={{
							base: "repeat(2, minmax(0, 1fr))",
							md: "repeat(3, minmax(0, 1fr))",
						}}
						templateRows="auto"
					>
						{section.tiles.map((tile, index) => (
							<GridItem
								alignItems={tile.text ? "center" : undefined}
								aspectRatio={tile.text ? "1/1" : undefined}
								display={tile.text ? "flex" : undefined}
								justifyContent={tile.text ? "center" : undefined}
								key={tile.title ?? tile.text ?? index}
								rowSpan={tile.span2 ? 2 : undefined}
							>
								<AnimateInView enabled>
									{tile.text ? (
										<Center maxW="140px" pt="80px">
											<Heading
												color="primary"
												fontFamily="header"
												textAlign="center"
											>
												{tile.text}
											</Heading>
										</Center>
									) : (
										<>
											{tile.imageSrc && (
												<Box
													aspectRatio={tile.span2 ? "1/2" : "1/1"}
													borderRadius="lg"
													overflow="hidden"
													position="relative"
													w="full"
												>
													<Image asChild h="full" objectFit="cover" w="full">
														<NextImage
															alt={tile.title ?? ""}
															fill
															src={tile.imageSrc}
															style={{ objectFit: "cover" }}
														/>
													</Image>
												</Box>
											)}
											<VStack align="stretch" gap={1} pt={1}>
												<Text fontWeight="bold">{tile.title}</Text>
												<Text lineHeight={1.1}>{tile.description}</Text>
											</VStack>
										</>
									)}
								</AnimateInView>
							</GridItem>
						))}
					</Grid>
				</Box>
			))}

			<Center mt={24}>
				<Link
					color="text"
					href="https://maps.app.goo.gl/5WoyeNLNburA8RBA6"
					textDecoration="underline"
				>
					<Text>CLICK HERE FOR OUR GOOGLE MAPS LINK</Text>
				</Link>
			</Center>
		</Box>
	);
};

export default EatTabContent;
