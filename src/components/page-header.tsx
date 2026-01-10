import { Box, Heading } from "@chakra-ui/react";

type Props = {
	title: string;
};

const PageHeader: React.FC<Props> = ({ title }) => {
	return (
		<Box mt={8} textAlign="center">
			<Heading
				color="primary"
				fontFamily="cursive"
				fontSize="8xl"
				fontWeight="normal"
				lineHeight={2}
				textTransform="uppercase"
			>
				{title}
			</Heading>
		</Box>
	);
};

export default PageHeader;
