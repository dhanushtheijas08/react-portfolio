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
      delay: 0.06 * 4,
      duration: 0.6,
    },
  },
  viewport: {
    once: true,
  },
};

function ShadowButton({ children }) {
  return (
    <motion.div
      variants={animateVariants}
      initial="initial"
      animate="animate"
      viewport="viewport"
    >
      <button className="py-1 px-2 font-semibold text-lg border-2 text-black dark:text-white border-black dark:border-white hover:shadow-[3px_3px_0_0_#111] hover:dark:shadow-[3px_3px_0_0_#fff] hover:-translate-x-1 hover:-translate-y-1 rounded-md outline-none cursor-pointer transition-all duration-200">
        {children}
      </button>
    </motion.div>
  );
}

export default ShadowButton;
