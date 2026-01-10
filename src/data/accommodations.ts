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
		title: "Paradise Beach Resort",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Luxury beachfront resort with stunning ocean views and world-class amenities.",
		location: {
			name: "Cloud 9, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7890",
		website: "https://paradisebeach.com",
	},
	{
		title: "Tropical Haven Hotel",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Modern hotel nestled in lush tropical gardens with easy beach access.",
		location: {
			name: "General Luna, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7891",
		website: "https://tropicalhaven.com",
	},
	{
		title: "Sunset Villa Resort",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Intimate resort featuring private villas with breathtaking sunset views.",
		location: {
			name: "Pacifico, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7892",
		website: "https://sunsetvilla.com",
	},
	{
		title: "Coral Bay Retreat",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Eco-friendly resort with direct access to pristine coral reefs.",
		location: {
			name: "Burgos, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7893",
		website: "https://coralbay.com",
	},
	{
		title: "Surfside Luxury Resort",
		coverPhoto: "https://via.placeholder.com/400x300",
		description: "Premier resort catering to surfers and beach lovers alike.",
		location: {
			name: "Cloud 9, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7894",
		website: "https://surfside.com",
	},
	{
		title: "Island Paradise Hotel",
		coverPhoto: "https://via.placeholder.com/400x300",
		description:
			"Family-friendly hotel with pools, restaurants, and island tour services.",
		location: {
			name: "General Luna, Siargao",
			url: "https://maps.google.com",
		},
		phone: "+63 123 456 7895",
		website: "https://islandparadise.com",
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
