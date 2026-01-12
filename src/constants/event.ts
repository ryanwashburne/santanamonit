export interface Event {
	id: string;
	title: string;
	date: string;
	time: string;
	additionalQuestion?: string;
}

export const EVENTS: Event[] = [
	{
		id: "rehearsal-brunch",
		title: "Rehersal Brunch",
		date: "June 10",
		time: "10AM",
	},
	{
		id: "welcome-party",
		title: "Welcome Party",
		date: "June 10",
		time: "4PM",
	},
	{
		id: "wedding-day",
		title: "Wedding Day",
		date: "June 11",
		time: "3:30PM",
		additionalQuestion: "Preferred drink(s) of choice",
	},
	{
		id: "island-hopping",
		title: "Island Hopping",
		date: "June 13",
		time: "8AM",
		additionalQuestion: "Diet Restrictions / Allergies / Notes",
	},
];
