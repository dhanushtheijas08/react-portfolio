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
      className="flex z-10 w-[95%] fixed justify-between items-center border border-gray-200 rounded-md dark:border-gray-800 bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg px-1 py-3"
    >
      <Logo forNavBar />

      <svg
        width="18"
        height="18"
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
        className="block text-white60"
      >
        <path
          d="M13 18c-2.7614 0-5-2.2386-5-5s2.2386-5 5-5 5 2.2386 5 5-2.2386 5-5 5zm0-13.8947a.6842.6842 0 01-.6842-.6842V.6842a.6842.6842 0 011.3684 0v2.7369A.6842.6842 0 0113 4.1053zm6.3189 2.5758a.7257.7257 0 010-1.0263l2.0526-2.0526a.7257.7257 0 111.0263 1.0263L20.3452 6.681a.7257.7257 0 01-1.0263 0zM21.8947 13a.6842.6842 0 01.6842-.6842h2.7369a.6842.6842 0 010 1.3684h-2.7369A.6842.6842 0 0121.8947 13zm-2.5758 6.3189a.7257.7257 0 011.0263 0l2.0526 2.0526a.7257.7257 0 11-1.0263 1.0263l-2.0526-2.0526a.7257.7257 0 010-1.0263zM13 21.8947a.6842.6842 0 01.6842.6842v2.7369a.6842.6842 0 01-1.3684 0v-2.7369A.6842.6842 0 0113 21.8947zM6.6811 19.319a.7257.7257 0 010 1.0263l-2.0526 2.0526a.7257.7257 0 11-1.0263-1.0263l2.0526-2.0526a.7257.7257 0 011.0263 0zM4.1053 13a.6842.6842 0 01-.6842.6842H.6842a.6842.6842 0 010-1.3684h2.7369A.6842.6842 0 014.1053 13zM6.681 6.6811a.7257.7257 0 01-1.0263 0L3.6022 4.6285a.7257.7257 0 111.0263-1.0263L6.681 5.6548a.7257.7257 0 010 1.0263z"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </svg>
      <ul className="hidden md:flex gap-2 items-center text-lg font-nunito font-semibold dark:text-white">
        {renderList}
      </ul>
      <div className="hidden md:flex">
        <ShadowButton>Resume</ShadowButton>
        <Switch />
      </div>
    </motion.nav>
  );
}
