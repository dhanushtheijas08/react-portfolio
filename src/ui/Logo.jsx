import { motion } from "framer-motion";

const animateVariants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export default function Logo({ forNavBar = false }) {
  return (
    <motion.h1
      variants={animateVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={`text-2xl font-Space font-bold text-dark-black ${
        forNavBar ? "ml-5" : "ml-0"
      }`}
    >
      Dhanush Theijas
    </motion.h1>
  );
}
