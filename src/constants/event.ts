import { AttendeeType } from "@/constants/attendee";

export interface Event {
	id: string;
	title: string;
	date: string;
	time: string;
	additionalQuestion?: string;
	condition: (attendeeType: AttendeeType) => boolean;
}

export const EVENTS: Event[] = [
	{
		id: "rehearsal-brunch",
		title: "Rehearsal Brunch",
		date: "June 10",
		time: "10AM",
		condition: (attendeeType) => attendeeType !== AttendeeType.GUEST,
	},
	{
		id: "welcome-party",
		title: "Welcome Party",
		date: "June 10",
		time: "4PM",
		condition: () => true,
	},
	{
		id: "wedding-day",
		title: "Wedding Day",
		date: "June 11",
		time: "3:30PM",
		additionalQuestion: "Preferred drink(s) of choice",
		condition: () => true,
	},
	{
		id: "island-hopping",
		title: "Island Hopping",
		date: "June 13",
		time: "8AM",
		additionalQuestion: "Diet Restrictions / Allergies / Notes",
		condition: (attendeeType) => attendeeType === AttendeeType.WP,
	},
];
