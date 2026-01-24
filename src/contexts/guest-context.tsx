"use client";

import { createContext, useContext, useState } from "react";
import type { AttendeeType } from "@/constants/attendee";

export type Guest = {
	displayName: string;
	firstName: string;
	lastName: string;
	group: number;
	attendeeType: AttendeeType;
};

type GuestContextValue = {
	guest: Guest | null;
	setGuest: (guest: Guest) => void;
	clearGuest: () => void;
};

const GuestContext = createContext<GuestContextValue | null>(null);

type GuestProviderProps = {
	children: React.ReactNode;
};

export const GuestProvider: React.FC<GuestProviderProps> = ({ children }) => {
	const [guest, setGuestState] = useState<Guest | null>(null);

	const setGuest = (guest: Guest) => {
		setGuestState(guest);
	};

	const clearGuest = () => {
		setGuestState(null);
	};

	return (
		<GuestContext.Provider value={{ guest, setGuest, clearGuest }}>
			{children}
		</GuestContext.Provider>
	);
};

export const useGuest = (): GuestContextValue => {
	const context = useContext(GuestContext);
	if (!context) {
		throw new Error("useGuest must be used within a GuestProvider");
	}
	return context;
};
