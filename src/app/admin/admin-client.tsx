"use client";

import {
	Accordion,
	Box,
	Button,
	Container,
	Field,
	Heading,
	HStack,
	Input,
	Span,
	Spinner,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";

function setCookie(name: string, value: string, maxAge: number) {
	// biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API has limited support
	document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
}

function deleteCookie(name: string) {
	// biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API has limited support
	document.cookie = `${name}=; path=/; max-age=0`;
}

type Props = {
	initialIsAdmin: boolean;
	isDev: boolean;
};

type ResponseValue = {
	attending: boolean | null;
	answer?: string;
};

function formatDateTime(date: Date): string {
	return date.toLocaleString(undefined, {
		dateStyle: "medium",
		timeStyle: "short",
	});
}

const AdminDashboard: React.FC<{ onLogout: () => void; isDev: boolean }> = ({
	onLogout,
	isDev,
}) => {
	const responsesQuery = api.admin.getAllResponses.useQuery();
	const clearMutation = api.admin.clearAllResponses.useMutation({
		onSuccess: () => {
			responsesQuery.refetch();
		},
	});

	const handleClearAll = () => {
		if (
			window.confirm(
				"Are you sure you want to delete ALL RSVP responses? This cannot be undone.",
			)
		) {
			clearMutation.mutate();
		}
	};

	return (
		<Container maxW="4xl" py={12}>
			<VStack align="stretch" gap={6}>
				<HStack justify="space-between">
					<Heading>Admin Dashboard</Heading>
					<HStack>
						{isDev && (
							<Button
								colorPalette="red"
								loading={clearMutation.isPending}
								onClick={handleClearAll}
								size="sm"
								variant="outline"
							>
								[DEV] Clear All
							</Button>
						)}
						<Button onClick={onLogout} size="sm" variant="outline">
							Logout
						</Button>
					</HStack>
				</HStack>

				<Heading size="md">
					RSVP Responses ({responsesQuery.data?.length ?? 0})
				</Heading>

				{responsesQuery.isLoading && (
					<HStack justify="center" py={8}>
						<Spinner />
						<Text>Loading responses...</Text>
					</HStack>
				)}

				{responsesQuery.error && (
					<Text color="red.500">
						Error loading responses: {responsesQuery.error.message}
					</Text>
				)}

				{responsesQuery.data && responsesQuery.data.length === 0 && (
					<Text color="fg.muted">No RSVP responses yet.</Text>
				)}

				{responsesQuery.data && responsesQuery.data.length > 0 && (
					<Accordion.Root collapsible variant="enclosed">
						{responsesQuery.data.map((response) => (
							<Accordion.Item key={response.id} value={response.id}>
								<Accordion.ItemTrigger>
									<Span flex="1">
										{response.firstName} {response.lastName}
										{response.submittedBy &&
											response.submittedBy !==
												`${response.firstName} ${response.lastName}` && (
												<Text as="span" color="fg.muted" fontSize="sm" ml={2}>
													(via {response.submittedBy})
												</Text>
											)}
									</Span>
									<Text color="fg.muted" fontSize="sm">
										{formatDateTime(new Date(response.updatedAt))}
									</Text>
									<Accordion.ItemIndicator />
								</Accordion.ItemTrigger>
								<Accordion.ItemContent>
									<Accordion.ItemBody>
										<VStack align="stretch" gap={3}>
											<HStack gap={4} wrap="wrap">
												<Text color="fg.muted" fontSize="xs">
													Created:{" "}
													{formatDateTime(new Date(response.createdAt))}
												</Text>
												<Text color="fg.muted" fontSize="xs">
													Updated:{" "}
													{formatDateTime(new Date(response.updatedAt))}
												</Text>
												{response.submittedBy && (
													<Text color="fg.muted" fontSize="xs">
														Submitted by: {response.submittedBy}
													</Text>
												)}
											</HStack>
											{Object.entries(
												response.responses as Record<string, ResponseValue>,
											).map(([eventId, value]) => (
												<Box
													bg="bg.subtle"
													borderRadius="md"
													key={eventId}
													p={3}
												>
													<Text fontWeight="medium">{eventId}</Text>
													<HStack gap={4} mt={1}>
														<Text color="fg.muted" fontSize="sm">
															Attending:{" "}
															{value.attending === true
																? "Yes"
																: value.attending === false
																	? "No"
																	: "Undecided"}
														</Text>
														{value.answer && (
															<Text color="fg.muted" fontSize="sm">
																Answer: {value.answer}
															</Text>
														)}
													</HStack>
												</Box>
											))}
										</VStack>
									</Accordion.ItemBody>
								</Accordion.ItemContent>
							</Accordion.Item>
						))}
					</Accordion.Root>
				)}
			</VStack>
		</Container>
	);
};

const AdminClient: React.FC<Props> = ({ initialIsAdmin, isDev }) => {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const verifyQuery = api.admin.verify.useQuery(undefined, {
		retry: false,
		initialData: initialIsAdmin ? { isAdmin: true } : undefined,
	});

	const isAuthenticated = verifyQuery.data?.isAdmin === true;

	const loginMutation = api.admin.login.useMutation({
		onSuccess: (data) => {
			setCookie("admin-token", data.token, 60 * 60 * 24 * 7);
			router.refresh();
		},
		onError: (err) => {
			setError(err.message);
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);
		const formData = new FormData(e.currentTarget);
		const password = formData.get("password") as string;
		loginMutation.mutate({ password });
	};

	const handleLogout = () => {
		deleteCookie("admin-token");
		window.location.reload();
	};

	if (isAuthenticated) {
		return <AdminDashboard isDev={isDev} onLogout={handleLogout} />;
	}

	return (
		<Container maxW="lg" py={12}>
			<form onSubmit={handleSubmit}>
				<VStack gap={6}>
					<Heading>Admin Login</Heading>

					<Field.Root required>
						<Field.Label>Password</Field.Label>
						<Input
							autoComplete="current-password"
							bg="white"
							name="password"
							required
							type="password"
						/>
					</Field.Root>

					{error && (
						<Text color="red.500" fontSize="sm">
							{error}
						</Text>
					)}

					<Button loading={loginMutation.isPending} type="submit" width="100%">
						Login
					</Button>
				</VStack>
			</form>
		</Container>
	);
};

export default AdminClient;
