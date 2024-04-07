"use client";

import { LampContainer } from "./lamp";
import { motion } from "framer-motion";

export function Lamptitle({ text }: { text: string }) {
	return (
		<LampContainer>
			<motion.div
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.9,
					ease: "easeInOut",
				}}
				// className="h-1  py-2  text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
			>
				<h2 className="font-semibold lg:text-[2.7rem] md:text-4xl text-center text-[1.75rem] text-lightest-slate">
					{text}{" "}
				</h2>
			</motion.div>
		</LampContainer>
	);
}
