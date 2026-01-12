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
	links?: {
		name: string;
		url: string;
	}[];
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
		title: "Villa Hele",
		coverPhoto: "/accommodations/airbnbs/villa-hele.png",
		description:
			"A four-bedroom villa with beachfront access, Villa Hele is a beautiful property for those wanting to stay in a quieter area of General Luna.",
		location: {
			name: "Villa Hele",
			url: "https://maps.app.goo.gl/mf4ED1RKt4jA1qVR7",
		},
		phone: "+63 969 598 6388",
		website: "https://www.booking.com/Share-uqCIWw",
	},
	{
		title: "Tadhana Villa",
		coverPhoto: "/accommodations/airbnbs/tadhana-villa.png",
		description:
			"Tadhana Villa is under the management of the popular Bravo Resort but just a few blocks down. The villa has 3 rooms that can fit up to 4pax each.",
		location: {
			name: "Tadhana Villa",
			url: "https://maps.app.goo.gl/NJPuDdAbZMcNjn617",
		},
		phone: "+63 999 877 8518",
		website: "https://www.bravosiargao.com/villas/tadhana-villa.html",
	},
	{
		title: "Tanaw Villas",
		coverPhoto: "/accommodations/airbnbs/tanaw-villas.png",
		description:
			"Tanaw Villas is perched on top of a hill with a rooftop pool overlooking General Luna. Surrounded by a garden, Tanaw Villas feels both open and secluded. Those who plan to stay here should be comfortable with renting motorbikes for easy access to the center of town which is only 5 minutes away.",
		location: {
			name: "Tanaw Villas",
			url: "https://maps.app.goo.gl/SGKLsfc2Bmbkn9Ff8",
		},
		phone: "+63 928 559 5244",
		website: "https://www.booking.com/Share-zbTbPf",
	},
	{
		title: "Nami Villas",
		coverPhoto: "/accommodations/airbnbs/nami-villas.png",
		description:
			"Nami Villas is a stylish and comfortable island villa in a quieter area of General Luna. There are two different villas both bookable through Airbnb.",
		links: [
			{
				name: "Airbnb: Nami Villas 1",
				url: "https://www.airbnb.com/rooms/946075036088899312",
			},
			{
				name: "Airbnb: Nami Villas 2",
				url: "https://www.airbnb.com/rooms/53806070",
			},
		],
		location: {
			name: "Nami Villas",
			url: "https://maps.app.goo.gl/f2Djkt5oJD4zKwNi9",
		},
	},
	{
		title: "Seaclub",
		coverPhoto: "/accommodations/airbnbs/seaclub.png",
		description:
			"Seaclub Villas is located in the heart of the Cloud 9 surfing area. With private pool villas set in lush gardens, Seaclub is great for small groups looking to share a private space. There are multiple villas right next to each other, so this is also a nice option for larger groups wanting to be near one another.",
		location: {
			name: "Seaclub",
			url: "https://maps.app.goo.gl/2R3VUomGBMLNXuzR6",
		},
		phone: "+63 969 017 7718",
		website: "https://book.seaclub.co",
	},
	{
		title: "Kalinaw Villas",
		coverPhoto: "/accommodations/airbnbs/kalinaw-villas.png",
		description:
			"Luxury, premium villas equipped with private pools and sweeping ocean views for an intimate, exclusive stay.",
		location: {
			name: "Kalinaw Villas",
			url: "https://maps.app.goo.gl/6KitTNqkh362shoP7",
		},
		phone: "+63 968 536 5153",
		website: "https://www.kalinawresort.com/",
	},
];
