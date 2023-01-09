import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{
        x: 30,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: -30,
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
