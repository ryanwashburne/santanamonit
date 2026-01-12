import {
	Box,
	Button,
	Container,
	Field,
	Heading,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { api } from "@/trpc/react";

export type GuestLookupResult =
	| {
			found: true;
			firstName: string;
			lastName: string;
			group: number;
			tag: string;
	  }
	| { found: false };

type Props = {
	open: boolean;
	title: string;
	buttonText: string;
	onSubmit: (result: GuestLookupResult) => void;
};

const RSVPOverlay: React.FC<Props> = ({
	open,
	title,
	buttonText,
	onSubmit,
}) => {
	const [error, setError] = useState<string | null>(null);

	const lookupMutation = api.rsvp.lookupGuest.useMutation({
		onSuccess: (result) => {
			if (!result.found) {
				setError("Guest not found. Please check your name and try again.");
				return;
			}
			setError(null);
			onSubmit(result);
		},
		onError: () => {
			setError("An error occurred. Please try again.");
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);
		const formData = new FormData(e.currentTarget);
		const firstName = (formData.get("first_name") as string).trim();
		const lastName = (formData.get("last_name") as string).trim();

		if (!firstName || !lastName) {
			setError("Please enter both first and last name.");
			return;
		}

		lookupMutation.mutate({ firstName, lastName });
	};

	if (!open) return null;

	return (
		<Box
			backdropFilter="blur(18px)"
			inset={0}
			position="absolute"
			zIndex="overlay"
		>
			<form onSubmit={handleSubmit}>
				<Container maxW="lg" mt={32}>
					<VStack gap={6}>
						<Heading color="primary" fontWeight="normal">
							{title}
						</Heading>

						<Field.Root required>
							<Field.Label>First Name</Field.Label>
							<Input bg="white" name="first_name" required />
						</Field.Root>

						<Field.Root required>
							<Field.Label>Last Name</Field.Label>
							<Input bg="white" name="last_name" required />
						</Field.Root>

						{error && (
							<Text color="red.500" fontSize="sm">
								{error}
							</Text>
						)}

						<Button
							loading={lookupMutation.isPending}
							mt={6}
							type="submit"
							width="100%"
						>
							{buttonText}
						</Button>
					</VStack>
				</Container>
			</form>
		</Box>
	);
};

export default RSVPOverlay;
