import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      layout
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: -100,
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
