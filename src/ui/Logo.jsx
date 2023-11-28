import { motion } from "framer-motion";

const animateVariants = {
  initial: {
    opacity: 0,
    y: "-150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function Logo() {
  return (
    <motion.h1
      variants={animateVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="text-xl md:text-2xl font-Space font-bold text-dark-black dark:text-white"
    >
      Dhanush Theijas
    </motion.h1>
  );
}

export default Logo;
