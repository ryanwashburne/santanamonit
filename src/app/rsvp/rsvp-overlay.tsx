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
	title: string;
	buttonText: string;
	onSubmit: (params: { firstName: string; lastName: string }) => void;
};

const RSVPOverlay: React.FC<Props> = ({
	open,
	title,
	buttonText,
	onSubmit,
}) => {
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

						<Field.Root>
							<Field.Label>First Name</Field.Label>
							<Input bg="white" name="first_name" />
						</Field.Root>

						<Field.Root>
							<Field.Label>Last Name</Field.Label>
							<Input bg="white" name="last_name" />
						</Field.Root>

						<Button mt={6} type="submit" width="100%">
							{buttonText}
						</Button>
					</VStack>
				</Container>
			</form>
		</Box>
	);
};

export default RSVPOverlay;
