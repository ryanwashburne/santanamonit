"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
	enabled: boolean;
	children: ReactNode;
	/** If true, animates immediately on mount instead of waiting for scroll */
	immediate?: boolean;
	/** Delay in seconds for the animation */
	delay?: number;
};

const AnimateInView: React.FC<Props> = ({
	enabled,
	children,
	immediate = false,
	delay = 0,
}) => {
	if (!enabled) return children;
	return (
		<motion.div
			{...(immediate
				? { animate: { opacity: 1, y: 0 } }
				: { whileInView: { opacity: 1, y: 0 } })}
			initial={{ opacity: 0, y: 24 }}
			transition={{ duration: 0.3, ease: "easeOut", delay }}
			viewport={{ once: true, amount: 0.3 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimateInView;
