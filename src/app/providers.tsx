import { Provider } from "@/components/ui/provider";
import { GuestProvider } from "@/contexts/guest-context";
import { TRPCReactProvider } from "@/trpc/react";

type Props = {
	children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
	return (
		<Provider forcedTheme="light">
			<TRPCReactProvider>
				<GuestProvider>{children}</GuestProvider>
			</TRPCReactProvider>
		</Provider>
	);
};

export default Providers;
