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
      className={`transition-colors duration-200  py-2 px-3 cursor-pointer $`}
    >
      <a href={`#${item.path}`}>{item.name}</a>
    </motion.li>
  ));
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={shouldVisible ? "visible" : "hidden"}
      className="flex justify-between items-center w-full border border-nav-border bg-nav-bg bg-blur rounded-md px-1  shadow py-1 "
    >
      <Logo forNavBar />

      <ul className="flex gap-2 items-center text-lg font-nunito font-semibold">
        {...renderList}
        <motion.button
          className="py-1 px-2 border-[1.99px] border-black rounded-md box-shadow-btn transition-all duration-200 outline-none cursor-pointer"
          initial={{ opacity: 0, y: "-150%" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.05 },
          }}
          //   transition={{ delay: 0.2 }}
        >
          Resume
        </motion.button>
        <Switch />
      </ul>
    </motion.nav>
  );
}
