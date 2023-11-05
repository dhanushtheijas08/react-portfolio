import { motion } from "framer-motion";

const animateVariants = {
  initial: {
    opacity: 0,
    y: "-150%",
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * (index + 1),
      duration: 0.6,
    },
  }),
};

function NavLinks({ item, index, activeLink, setActiveLink }) {
  return (
    <motion.li
      variants={animateVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="transition-colors relative duration-200 py-2 px-3 cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 group"
      onClick={() => setActiveLink(index)}
    >
      <a href={`${item.path}`}>{item.name}</a>
      {/* underline */}
      {activeLink === index && (
        <motion.div
          layoutId="underline"
          className="absolute w-1/2 h-0.5 bg-gray-800 dark:bg-white group-hover:bg-gray-600  dark:group-hover:bg-gray-400 left-1/4"
        ></motion.div>
      )}
    </motion.li>
  );
}

export default NavLinks;
