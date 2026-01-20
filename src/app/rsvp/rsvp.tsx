"use client";

import {
	Box,
	Button,
	Field,
	Input,
	Link,
	Separator,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RSVPEvent, { type EventResponse } from "@/app/rsvp/rsvp-event";
import { EVENTS } from "@/constants/event";
import { useGuest } from "@/contexts/guest-context";
import { api } from "@/trpc/react";

const createEmptyResponses = (): Record<string, EventResponse> =>
	Object.fromEntries(
		EVENTS.map((event) => [event.id, { attending: null, answer: "" }]),
	);

const mergeResponses = (
	base: Record<string, EventResponse>,
	saved: Record<string, EventResponse>,
): Record<string, EventResponse> => {
	const merged = { ...base };
	for (const [key, value] of Object.entries(saved)) {
		if (merged[key]) {
			merged[key] = { ...merged[key], ...value };
		}
	}
	return merged;
};

type MemberState = {
	id: string; // Stable ID for React key
	displayName: string;
	firstName: string;
	lastName: string;
	isPlaceholder: boolean;
	needsNameInput: boolean; // true for empty plus ones that need name entered
	responses: Record<string, EventResponse>;
};

const EMPTY_RESPONSES = createEmptyResponses();

// Reusable component for rendering event list
const EventsList: React.FC<{
	responses: Record<string, EventResponse>;
	onChange: (eventId: string) => (value: EventResponse) => void;
	disabled?: boolean;
}> = ({ responses, onChange, disabled }) => (
	<VStack gap="60px" w="full">
		{EVENTS.map((event) => (
			<RSVPEvent
				disabled={disabled}
				event={event}
				key={event.id}
				onChange={disabled ? () => {} : onChange(event.id)}
				value={responses[event.id] ?? { attending: null }}
			/>
		))}
	</VStack>
);

// Collapsible section for a group member
const MemberSection: React.FC<{
	member: MemberState;
	isExpanded: boolean;
	onToggle: () => void;
	onNameChange: (field: "firstName" | "lastName", value: string) => void;
	onEventChange: (eventId: string) => (value: EventResponse) => void;
	disabled?: boolean;
}> = ({
	member,
	isExpanded,
	onToggle,
	onNameChange,
	onEventChange,
	disabled,
}) => {
	const label = member.isPlaceholder
		? member.displayName.trim()
			? `+ ${member.displayName}`
			: "+ Guest"
		: `+ ${member.displayName}`;

	return (
		<VStack gap={8} w="full">
			<Separator borderColor="#AAB25F" w="full" />
			<Link
				color="primary"
				cursor="pointer"
				fontStyle="italic"
				onClick={onToggle}
				textDecoration="underline"
			>
				{label}
			</Link>

			{isExpanded && (
				<>
					{member.isPlaceholder && (
						<VStack gap={4} w="full">
							{member.needsNameInput && (
								<Field.Root>
									<Field.Label>First Name</Field.Label>
									<Input
										bg="#EAE2E2"
										border="none"
										disabled={disabled}
										onChange={(e) => onNameChange("firstName", e.target.value)}
										value={member.firstName}
									/>
								</Field.Root>
							)}
							<Field.Root>
								<Field.Label>Last Name</Field.Label>
								<Input
									bg="#EAE2E2"
									border="none"
									disabled={disabled}
									onChange={(e) => onNameChange("lastName", e.target.value)}
									value={member.lastName}
								/>
							</Field.Root>
						</VStack>
					)}
					<EventsList
						disabled={disabled}
						onChange={onEventChange}
						responses={member.responses}
					/>
				</>
			)}
		</VStack>
	);
};

const RSVP: React.FC = () => {
	const { guest } = useGuest();

	// Show preview mode when no guest (for blur overlay preview)
	const isPreviewMode = !guest;

	// Current user's responses
	const [myResponses, setMyResponses] =
		useState<Record<string, EventResponse>>(createEmptyResponses);

	// Other group members
	const [otherMembers, setOtherMembers] = useState<MemberState[]>([]);
	const [expandedMembers, setExpandedMembers] = useState<Set<number>>(
		new Set(),
	);
	const [hasInitialized, setHasInitialized] = useState(false);
	const [isDirty, setIsDirty] = useState(false);
	const [validationError, setValidationError] = useState<string | null>(null);

	// Warn user about unsaved changes when leaving the page
	useEffect(() => {
		if (!isDirty) return;

		// Handle browser navigation (refresh, close tab, external URL)
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			return "";
		};

		// Handle Next.js client-side navigation (Link clicks)
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest("a");
			if (!anchor) return;

			// Only intercept internal navigation links
			const href = anchor.getAttribute("href");
			if (!href || href.startsWith("http") || href.startsWith("#")) return;

			// Show confirmation dialog
			const confirmed = window.confirm(
				"You have unsaved changes. Are you sure you want to leave?",
			);
			if (!confirmed) {
				e.preventDefault();
				e.stopPropagation();
			}
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		document.addEventListener("click", handleClick, true);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
			document.removeEventListener("click", handleClick, true);
		};
	}, [isDirty]);

	// Fetch other group members (excludes the requester)
	const { data: groupMembers, isLoading: isLoadingMembers } =
		api.rsvp.getGroupMembers.useQuery(
			{ firstName: guest?.firstName ?? "", lastName: guest?.lastName ?? "" },
			{ enabled: !!guest },
		);

	// Fetch responses for the group
	const { data: groupResponses, isLoading: isLoadingResponses } =
		api.rsvp.getGroupResponses.useQuery(
			{ group: guest?.group ?? 0 },
			{ enabled: !!guest },
		);

	const isLoading = isLoadingMembers || isLoadingResponses;

	const submitMutation = api.rsvp.submitGroupResponses.useMutation({
		onSuccess: () => {
			setIsDirty(false);
		},
	});

	// Initialize from fetched data - wait for BOTH queries to complete
	useEffect(() => {
		if (hasInitialized || !guest || !groupMembers || !groupResponses) return;

		// Initialize my responses
		const myResponse = groupResponses.find(
			(r) => r.firstName === guest.firstName && r.lastName === guest.lastName,
		);
		if (myResponse) {
			setMyResponses((prev) =>
				mergeResponses(
					prev,
					myResponse.responses as Record<string, EventResponse>,
				),
			);
		}

		// Initialize other members with their saved responses
		const members: MemberState[] = groupMembers.map((member, idx) => {
			const saved = groupResponses.find(
				(r) =>
					r.firstName === member.firstName && r.lastName === member.lastName,
			);
			return {
				displayName: member.displayName,
				firstName: member.firstName,
				lastName: member.lastName,
				isPlaceholder: member.isPlaceholder,
				id: `member-${idx}`,
				needsNameInput: member.isPlaceholder && !member.firstName,
				responses: saved
					? mergeResponses(
							createEmptyResponses(),
							saved.responses as Record<string, EventResponse>,
						)
					: createEmptyResponses(),
			};
		});

		setOtherMembers(members);
		setHasInitialized(true);
	}, [groupMembers, groupResponses, hasInitialized, guest]);

	const toggleMemberExpanded = (index: number) => {
		setExpandedMembers((prev) => {
			const next = new Set(prev);
			next.has(index) ? next.delete(index) : next.add(index);
			return next;
		});
	};

	const handleMyEventChange = (eventId: string) => (value: EventResponse) => {
		setIsDirty(true);
		setMyResponses((prev) => ({ ...prev, [eventId]: value }));
	};

	const updateMember = (index: number, updates: Partial<MemberState>) => {
		setIsDirty(true);
		setOtherMembers((prev) =>
			prev.map((m, i) => (i === index ? { ...m, ...updates } : m)),
		);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!guest) return;
		setValidationError(null);

		// Validate main user's responses
		const unansweredEvents = EVENTS.filter(
			(event) => myResponses[event.id]?.attending === null,
		);
		if (unansweredEvents.length > 0) {
			setValidationError("Please answer all events before submitting.");
			return;
		}

		// Validate other members
		for (const member of otherMembers) {
			const hasAnyResponse = EVENTS.some(
				(event) => member.responses[event.id]?.attending !== null,
			);

			// If they have any responses or need name input, validate fully
			if (hasAnyResponse || member.needsNameInput) {
				// Check names for placeholders
				if (member.isPlaceholder) {
					if (!member.firstName.trim() || !member.lastName.trim()) {
						setValidationError(
							"Please fill in first and last name for all guests.",
						);
						return;
					}
				}

				// Check all events answered
				const memberUnanswered = EVENTS.filter(
					(event) => member.responses[event.id]?.attending === null,
				);
				if (memberUnanswered.length > 0) {
					const name = member.displayName || "Guest";
					setValidationError(
						`Please answer all events for ${name} before submitting.`,
					);
					return;
				}
			}
		}

		// Build list of all members to submit
		const allMembers = [
			{
				firstName: guest.firstName,
				lastName: guest.lastName,
				responses: myResponses,
			},
			// Include members with both names filled in
			...otherMembers
				.filter((m) => m.firstName.trim() && m.lastName.trim())
				.map((m) => ({
					firstName: m.firstName.trim(),
					lastName: m.lastName.trim(),
					responses: m.responses,
				})),
		];

		submitMutation.mutate({
			submittedBy: `${guest.firstName} ${guest.lastName}`,
			members: allMembers,
		});
	};

	const displayName = isPreviewMode ? "Jane" : guest?.displayName;
	const displayResponses = isPreviewMode ? EMPTY_RESPONSES : myResponses;

	return (
		<Box maxW="950px" mx="auto" w="100%">
			<Box border="6px solid" borderColor="#56612E" borderRadius="lg" p={3}>
				<Box
					border="6px solid"
					borderColor="#AAB25F"
					borderRadius="lg"
					px={8}
					py={16}
				>
					<form onSubmit={handleSubmit}>
						<VStack>
							<Text fontSize="xl" fontStyle="italic" mb={16} textAlign="center">
								Hi, {displayName}!
							</Text>

							<VStack gap="80px" maxW="300px" mx="auto" w="full">
								<EventsList
									disabled={isPreviewMode || isLoading}
									onChange={handleMyEventChange}
									responses={displayResponses}
								/>

								{!isPreviewMode &&
									otherMembers.map((member, index) => (
										<MemberSection
											disabled={isLoading}
											isExpanded={expandedMembers.has(index)}
											key={member.id}
											member={member}
											onEventChange={(eventId) => (value) =>
												updateMember(index, {
													responses: { ...member.responses, [eventId]: value },
												})
											}
											onNameChange={(field, value) =>
												updateMember(index, { [field]: value })
											}
											onToggle={() => toggleMemberExpanded(index)}
										/>
									))}

								<VStack gap={4} w="100%">
									<Button
										borderRadius="lg"
										disabled={submitMutation.isPending || isLoading || !isDirty}
										h="36px"
										type="submit"
										width="100%"
									>
										{submitMutation.isPending ? "Saving..." : "RSVP"}
									</Button>

									{validationError && (
										<Text color="red.500" fontSize="sm" textAlign="center">
											{validationError}
										</Text>
									)}
									{submitMutation.isSuccess && (
										<Text color="primary" fontStyle="italic" textAlign="center">
											Thank you! You may edit your responses at any time
										</Text>
									)}
								</VStack>
							</VStack>
						</VStack>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default RSVP;
