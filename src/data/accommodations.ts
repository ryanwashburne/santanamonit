export interface Listing {
	title: string;
	coverPhoto: string;
	description: string;
	location?: {
		name: string;
		url: string;
	};
	phone?: string;
	website?: string;
}

export const resortListings: Listing[] = [
	{
		title: "Isla Cabana",
		coverPhoto: "/accommodations/resorts/isla-cabana.png",
		description:
			"Isla Cabana Resort features its own private beach area, 2 outdoor pools, and a luxurious atmosphere for those looking for a quiet escape in a prime location in General Luna. A favorite stay on the island.",
		location: {
			name: "Isla Cabana",
			url: "https://maps.app.goo.gl/CMhBBPw4DP51sEmm9",
		},
		phone: "+63 928 559 5244",
		website: "https://www.islacabanaresort.com/",
	},
	{
		title: "Bravo",
		coverPhoto: "/accommodations/resorts/bravo.png",
		description:
			"Bravo is a beachfront surf resort located in the heart of the General Luna area. Bravo Resort has a vibrant and lively atmosphere. With an on-site skate bowl, a popular restaurant, and two pools, it's a popular place on the island for people to hangout.",
		location: {
			name: "Bravo",
			url: "https://maps.app.goo.gl/fG1JpDiKRj5tcQxq7",
		},
		phone: "+63 999 877 8518",
		website: "https://www.bravosiargao.com",
	},
	{
		title: "Las Palmas",
		coverPhoto: "/accommodations/resorts/las-palmas.png",
		description:
			"An homage to the original name of Siargao Island (Isla de las Palmas), Las Palmas Villas & Casitas is a well loved stay that captures the beauty of Siargao.",
		location: {
			name: "Las Palmas",
			url: "https://maps.app.goo.gl/ZVazqyz82Q7EorD87",
		},
		phone: "+63 863 151 268",
		website: "https://laspalmassiargao.com",
	},
	{
		title: "Siargao Island Villas",
		coverPhoto: "/accommodations/resorts/siargao-island-villas.png",
		description:
			"A beachfront setting with private villas and a Balinese feel. Siargao Island Villas is a larger resort in a popular area of General Luna.",
		location: {
			name: "Siargao Island Villas",
			url: "https://maps.app.goo.gl/4a6MdQ5c4XvBXkJ78",
		},
		phone: "+63 950 764 8359",
		website: "https://siargaoislandvillas.com",
	},
	{
		title: "Kaimana",
		coverPhoto: "/accommodations/resorts/kaimana.png",
		description:
			"Kaimana is a small, 8-room resort that feels tranquil and private. With large rooms and a great on-site restaurant, Kaimana is a gem in Siargao.",
		location: {
			name: "Kaimana",
			url: "https://maps.app.goo.gl/U2qEgm3WWLcXUQ7w9",
		},
		phone: "+63 917 156 1221",
		website: "https://www.booking.com/Share-bTNxo3",
	},
	{
		title: "Harana",
		coverPhoto: "/accommodations/resorts/harana.png",
		description:
			"Harana Resort is a surf resort home to the famous Cloud 9 surf break. The resort has a popular filipino restaurant - Bayani - and a more rustic feel that embodies old school Siargao vibes. On Saturdays Harana hosts the biggest party on the island.",
		location: {
			name: "Harana",
			url: "https://maps.app.goo.gl/bTG44XjFt54S6yFH8",
		},
		phone: "+63 998 849 5461",
		website: "https://www.haranasurf.com/en/",
	},
	{
		title: "Siargao Bleu",
		coverPhoto: "/accommodations/resorts/siargao-bleu.png",
		description:
			"Siargao Bleu Resort & Spa is one of the first (and largest) resorts opened in Siargao. Their resort features an ocean view, pool, restaurant, and fitness center.",
		location: {
			name: "Siargao Bleu",
			url: "https://maps.app.goo.gl/WSLykg97c6hTYjmc7",
		},
		phone: "+63 917 818 8800",
		website: "https://siargaobleu.com",
	},
	{
		title: "Lamari",
		coverPhoto: "/accommodations/resorts/lamari.png",
		description:
			"Lamari is a boutique hotel with an excellent on-site restaurant located in the central area of General Luna.",
		location: {
			name: "Lamari",
			url: "https://maps.app.goo.gl/rVRvztVUxEPQ7ptB6",
		},
		phone: "+63 917 650 7743",
		website: "https://www.lamarisiargao.com",
	},
];

export const airbnbListings: Listing[] = [
	{
		title: "Beachfront Villa",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Spacious 4-bedroom villa with direct beach access and ocean views.",
		location: {
			name: "General Luna, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7896",
		website: "https://airbnb.com/beachfront-villa",
	},
	{
		title: "Cozy Surf House",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Charming 2-bedroom house perfect for surfers, steps from Cloud 9.",
		location: {
			name: "Cloud 9, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7897",
		website: "https://airbnb.com/surf-house",
	},
	{
		title: "Palm Tree Villa",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Private villa surrounded by palm trees with pool and tropical garden.",
		location: {
			name: "Pacifico, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7898",
		website: "https://airbnb.com/palm-villa",
	},
	{
		title: "Modern Jungle House",
		coverPhoto: "https://via.placeholder.com/400x300",
		description: "Contemporary 3-bedroom house nestled in lush jungle setting.",
		location: {
			name: "General Luna, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7899",
		website: "https://airbnb.com/jungle-house",
	},
	{
		title: "Oceanview Bungalow",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Intimate bungalow with stunning ocean views and sunset terrace.",
		location: {
			name: "Cloud 9, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7900",
		website: "https://airbnb.com/oceanview-bungalow",
	},
	{
		title: "Island Paradise Home",
		coverPhoto: "https://via.placeholder.com/400x300",
		description: "Fully equipped 5-bedroom home ideal for groups and families.",
		location: {
			name: "Burgos, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7901",
		website: "https://airbnb.com/paradise-home",
	},
];
