import { motion } from "framer-motion";

export default function AnimatedPage({ children }) {
  const animations = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      x: 100,
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={animations}
      intial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
