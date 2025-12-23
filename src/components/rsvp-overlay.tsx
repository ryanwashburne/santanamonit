import {
	Box,
	Button,
	Container,
	Field,
	Heading,
	Input,
	VStack,
} from "@chakra-ui/react";

type Props = {
	open: boolean;
	onSubmit: (params: { firstName: string; lastName: string }) => void;
};

const RSVPOverlay: React.FC<Props> = ({ open, onSubmit }) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const firstName = formData.get("first_name") as string;
		const lastName = formData.get("last_name") as string;
		onSubmit({ firstName, lastName });
	};

	if (!open) return null;

	return (
		<Box
			backdropFilter="blur(15px)"
			inset={0}
			position="absolute"
			zIndex="overlay"
		>
			<form onSubmit={handleSubmit}>
				<Container maxW="lg" mt={48}>
					<VStack gap={4}>
						<Heading color="primary" fontFamily="title" fontWeight="normal">
							Please enter your name to RSVP
						</Heading>

						<Field.Root>
							<Field.Label>First Name</Field.Label>
							<Input bg="white" name="first_name" />
						</Field.Root>

						<Field.Root>
							<Field.Label>Last Name</Field.Label>
							<Input bg="white" name="last_name" />
						</Field.Root>

						<Button mt={4} type="submit" width="100%">
							View My Schedule
						</Button>
					</VStack>
				</Container>
			</form>
		</Box>
	);
};

export default RSVPOverlay;
