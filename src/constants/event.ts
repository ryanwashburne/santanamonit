import { AttendeeType } from "@/constants/attendee";

export type Event = {
	type: "event";
	id: string;
	title: string;
	date: string;
	time: string;
	condition: (attendeeType: AttendeeType) => boolean;
};

export type Question = {
	type: "question";
	id: string;
	question: string;
	condition: (attendeeType: AttendeeType) => boolean;
};

export type EventItem = Event | Question;

export const isEvent = (item: EventItem): item is Event =>
	item.type === "event";
export const isQuestion = (item: EventItem): item is Question =>
	item.type === "question";

export const EVENTS: EventItem[] = [
	{
		type: "event",
		id: "rehearsal-brunch",
		title: "Rehearsal Brunch",
		date: "June 10",
		time: "10AM",
		condition: (attendeeType) => attendeeType !== AttendeeType.GUEST,
	},
	{
		type: "event",
		id: "welcome-party",
		title: "Welcome Party",
		date: "June 10",
		time: "4PM",
		condition: () => true,
	},
	{
		type: "event",
		id: "wedding-day",
		title: "Wedding Day",
		date: "June 11",
		time: "3:30PM",
		condition: () => true,
	},
	{
		type: "question",
		id: "preferred-drinks",
		question: "Preferred drink(s) of choice",
		condition: () => true,
	},
	{
		type: "event",
		id: "island-hopping",
		title: "Island Hopping",
		date: "June 13",
		time: "8AM",
		condition: (attendeeType) => attendeeType === AttendeeType.WP,
	},
	{
		type: "question",
		id: "diet-restrictions",
		question: "Diet Restrictions / Allergies / Notes",
		condition: () => true,
	},
];
