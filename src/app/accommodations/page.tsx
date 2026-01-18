"use client";

import { Container, VStack } from "@chakra-ui/react";
import AccommodationsContent from "@/app/accommodations/accommodations-content";
import PageHeader from "@/components/page-header";
import { BOTTOM_PADDING } from "@/constants/spacing";

const AccommodationsPage = () => {
	return (
		<Container pb={BOTTOM_PADDING}>
			<VStack>
				<PageHeader title="Accommodations" />

				<Container maxW="7xl" mt={{ base: 8, md: 16 }}>
					<VStack gap={{ base: 8, md: 16 }}>
						<AccommodationsContent />
					</VStack>
				</Container>
			</VStack>
		</Container>
	);
};

export default AccommodationsPage;
