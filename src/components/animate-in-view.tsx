"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
	enabled: boolean;
	children: ReactNode;
};

const AnimateInView: React.FC<Props> = ({ enabled, children }) => {
	if (!enabled) return children;
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimateInView;
