"use client";

import { motion } from "framer-motion";
import { zoomIn } from "@/utils/anim";

type AnimatedCardProps = {
  children: React.ReactNode;
  styles?: string;
};

const AnimatedCard = ({ children, styles }: AnimatedCardProps) => {
  return (
    <motion.div
      variants={zoomIn(0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={styles}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
