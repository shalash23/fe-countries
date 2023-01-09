import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedPage({ children }) {
  const animations = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: "spring",
      },
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: "spring",
      },
    },
    leave: {
      x: -100,
    },
  };

  return (
    <motion.div
      layout
      variants={animations}
      initial="enter"
      exit="leave"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
