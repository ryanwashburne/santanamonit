import { Provider } from "@/components/ui/provider";
import { TRPCReactProvider } from "@/trpc/react";

type Props = {
	children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
	return (
		<Provider>
			<TRPCReactProvider>{children}</TRPCReactProvider>
		</Provider>
	);
};

export default Providers;
