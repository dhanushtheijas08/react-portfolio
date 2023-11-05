import { motion } from "framer-motion";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

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
      delay: 0.06 * index,
      duration: 0.6,
      ease: "linear",
    },
  }),
};

function NavItem({ item, index }) {
  return (
    <motion.li
      variants={animateVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={`transition-colors duration-200 py-2 px-3 cursor-pointer`}
    >
      <a href={`#${item.path}`}>{item.name}</a>
    </motion.li>
  );
}

function ResumeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-150%" }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.06 * 3,
          duration: 0.6,
          ease: "linear",
        },
      }}
    >
      <button className="py-1 px-2 border-2 border-black dark:border-white hover:shadow-[3px_3px_0_0_#111] hover:dark:shadow-[3px_3px_0_0_#fff] hover:-translate-x-1 hover:-translate-y-1 rounded-md outline-none cursor-pointer transition-all duration-200">
        Resume
      </button>
    </motion.div>
  );
}

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
    <NavItem key={item.name} item={item} index={index} />
  ));

  return (
    <motion.nav
      variants={{
        visible: { y: 0, transition: { type: "just" } },
        hidden: { y: "-150%", transition: { type: "just" } },
      }}
      animate={shouldVisible ? "visible" : "hidden"}
      className="flex z-10 centered-div fixed w-[95%] justify-between items-center border border-gray-200 rounded-md dark:border-gray-800 bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg px-1 py-3"
    >
      <Logo forNavBar />

      <ul className="flex gap-2 items-center text-lg font-nunito font-semibold dark:text-white">
        {renderList}
        <ResumeButton />
        <Switch />
      </ul>
    </motion.nav>
  );
}
