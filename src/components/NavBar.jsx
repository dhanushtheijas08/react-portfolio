import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import Logo from "../ui/Logo";
import Switch from "../ui/Switch";

const animateVariants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.45,
      ease: "easeInOut",
    },
  }),
};

export default function NavBar() {
  const [shouldVisible, setShouldVisible] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) =>
    latest < scrollY.getPrevious()
      ? setShouldVisible(true)
      : setShouldVisible(false)
  );
  const data = [
    {
      name: "Projects",
      path: "projects",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];
  const renderList = data.map((item, index) => (
    <motion.li
      variants={animateVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      key={item.name}
      className={`transition-colors duration-200  py-2 px-3 cursor-pointer 
      `}
    >
      <a href={`#${item.path}`}>{item.name}</a>
    </motion.li>
  ));
  return (
    <motion.nav
      variants={{
        visible: { y: 0, transition: { type: "just" } },
        hidden: { y: "-100%", transition: { type: "just" } },
      }}
      animate={shouldVisible ? "visible" : "hidden"}
      //   className="flex justify-between items-center w-full border border-nav-border bg-nav-bg bg-blur rounded-md px-1  shadow py-1 "
      className="flex fixed z-10 justify-between items-center w-full border-b border-b-gray-200 dark:border-b-gray-800 bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg px-1 py-3"
    >
      <Logo forNavBar />

      <ul className="flex gap-2 items-center  text-lg font-nunito font-semibold dark:text-white">
        {...renderList}
        <motion.div
          initial={{ opacity: 0, y: "-150%" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.05 * 3,
              duration: 0.45,
              ease: "easeInOut",
            },
          }}
        >
          <button className="py-1 px-2 border-2 border-black dark:border-white box-shadow-btn dark:box-shadow-btn-dark  rounded-md outline-none cursor-pointer transition-all duration-200">
            Resume
          </button>
        </motion.div>
        <Switch />
      </ul>
    </motion.nav>
  );
}
