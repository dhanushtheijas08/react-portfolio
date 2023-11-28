import { motion } from "framer-motion";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import Logo from "../ui/Logo";
import Switch from "../ui/Switch";
import ShadowButton from "../ui/ShadowButton";
import NavLinks from "./NavLinks";

// const animateVariants = {
//   initial: {
//     opacity: 0,
//     y: "-100%",
//   },
//   animate: (index) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.06 * index,
//       duration: 0.6,
//       ease: "linear",
//     },
//   }),
// };

export default function NavBar() {
  const [shouldVisible, setShouldVisible] = useState(true);
  const [activeLink, setActiveLink] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) =>
    latest < scrollY.getPrevious()
      ? setShouldVisible(true)
      : setShouldVisible(false)
  );

  const navLinks = [
    {
      name: "Home",
      path: "",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  const renderList = navLinks.map((item, index) => (
    <NavLinks
      key={item.name}
      item={item}
      index={index}
      activeLink={activeLink}
      setActiveLink={setActiveLink}
    />
  ));

  return (
    <motion.nav
      variants={{
        visible: { y: 0, transition: { type: "just" } },
        hidden: { y: "-150%", transition: { type: "just" } },
      }}
      animate={shouldVisible ? "visible" : "hidden"}
      className="flex z-10 w-[95%] fixed justify-between items-center border border-gray-200 rounded-md dark:border-gray-800 bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg px-4 py-3"
    >
      <Logo />

      <ul className="hidden md:flex gap-2 items-center text-lg font-nunito font-semibold dark:text-white">
        {renderList}
      </ul>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex">
          <ShadowButton>Resume</ShadowButton>
        </div>
        <Switch />
      </div>
    </motion.nav>
  );
}
