/**
 * Guest data types and helper functions.
 * Replace GUESTS_DATA with actual data import later.
 */

export interface Guest {
	id: string;
	groupNumber: number;
	firstName: string;
	lastName: string;
	isPlusOne: boolean;
	// If this guest can bring a plus one
	hasPlusOne: boolean;
	// If hasPlusOne is true, this is the plus one's info (null if not yet defined)
	plusOneGuest: {
		firstName: string;
		lastName: string;
	} | null;
}

export interface GuestLookupResult {
	found: true;
	guest: Guest;
	groupMembers: Guest[];
}

export interface GuestNotFoundResult {
	found: false;
}

export type LookupResult = GuestLookupResult | GuestNotFoundResult;

// =============================================================================
// MOCK DATA - Replace this with actual data import
// =============================================================================

const GUESTS_DATA: Guest[] = [
	// Example group 1: couple with no plus ones
	{
		id: "1",
		groupNumber: 1,
		firstName: "John",
		lastName: "Smith",
		isPlusOne: false,
		hasPlusOne: false,
		plusOneGuest: null,
	},
	{
		id: "2",
		groupNumber: 1,
		firstName: "Jane",
		lastName: "Smith",
		isPlusOne: false,
		hasPlusOne: false,
		plusOneGuest: null,
	},
	// Example group 2: single guest with a known plus one
	{
		id: "3",
		groupNumber: 2,
		firstName: "Mike",
		lastName: "Johnson",
		isPlusOne: false,
		hasPlusOne: true,
		plusOneGuest: {
			firstName: "Sarah",
			lastName: "Johnson",
		},
	},
	// Example group 3: single guest who can add a plus one (unknown)
	{
		id: "4",
		groupNumber: 3,
		firstName: "Emily",
		lastName: "Davis",
		isPlusOne: false,
		hasPlusOne: true,
		plusOneGuest: null,
	},
	// Example group 4: family of 3
	{
		id: "5",
		groupNumber: 4,
		firstName: "Robert",
		lastName: "Wilson",
		isPlusOne: false,
		hasPlusOne: false,
		plusOneGuest: null,
	},
	{
		id: "6",
		groupNumber: 4,
		firstName: "Mary",
		lastName: "Wilson",
		isPlusOne: false,
		hasPlusOne: false,
		plusOneGuest: null,
	},
	{
		id: "7",
		groupNumber: 4,
		firstName: "Tommy",
		lastName: "Wilson",
		isPlusOne: false,
		hasPlusOne: false,
		plusOneGuest: null,
	},
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Normalize a string for comparison (lowercase, trim whitespace)
 */
function normalize(str: string): string {
	return str.toLowerCase().trim();
}

/**
 * Look up a guest by first and last name.
 * Returns the guest and all members of their group.
 */
export function lookupGuest(firstName: string, lastName: string): LookupResult {
	const normalizedFirst = normalize(firstName);
	const normalizedLast = normalize(lastName);

	const guest = GUESTS_DATA.find(
		(g) =>
			normalize(g.firstName) === normalizedFirst &&
			normalize(g.lastName) === normalizedLast,
	);

	if (!guest) {
		return { found: false };
	}

	const groupMembers = getGroupMembers(guest.groupNumber);

	return {
		found: true,
		guest,
		groupMembers,
	};
}

/**
 * Get all guests in a specific group.
 */
export function getGroupMembers(groupNumber: number): Guest[] {
	return GUESTS_DATA.filter((g) => g.groupNumber === groupNumber);
}

/**
 * Check if a guest has a plus one that needs to be added (unknown plus one).
 */
export function needsPlusOneInfo(guest: Guest): boolean {
	return guest.hasPlusOne && guest.plusOneGuest === null;
}

/**
 * Check if a guest has a known plus one already defined.
 */
export function hasKnownPlusOne(guest: Guest): boolean {
	return guest.hasPlusOne && guest.plusOneGuest !== null;
}

/**
 * Build the full list of people who need to RSVP for a group.
 * This includes all group members plus any defined plus ones.
 */
export interface RSVPPerson {
	id: string;
	firstName: string;
	lastName: string;
	isPlusOne: boolean;
	// Reference to the guest who invited this plus one (if applicable)
	invitedBy?: string;
}

export function buildRSVPList(
	groupMembers: Guest[],
	addedPlusOnes: Map<string, { firstName: string; lastName: string }>,
): RSVPPerson[] {
	const people: RSVPPerson[] = [];

	for (const guest of groupMembers) {
		// Add the guest themselves
		people.push({
			id: guest.id,
			firstName: guest.firstName,
			lastName: guest.lastName,
			isPlusOne: guest.isPlusOne,
		});

		// Add their plus one if they have one
		if (guest.hasPlusOne) {
			const plusOneInfo = guest.plusOneGuest ?? addedPlusOnes.get(guest.id);

			if (plusOneInfo) {
				people.push({
					id: `${guest.id}-plusone`,
					firstName: plusOneInfo.firstName,
					lastName: plusOneInfo.lastName,
					isPlusOne: true,
					invitedBy: guest.id,
				});
			}
		}
	}

	return people;
}

/**
 * Get guests in a group who need plus one info added.
 */
export function getGuestsNeedingPlusOneInfo(groupMembers: Guest[]): Guest[] {
	return groupMembers.filter(needsPlusOneInfo);
}
