import React from "react";
import NavBar from "../components/NavBar";
import ProfilePic from "../ui/ProfilePic";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-50 h-[200vh] dark:bg-black py-5">
      <header className="flex justify-center">
        <NavBar />
      </header>

      <main className="h-screen flex flex-col justify-center items-center">
        <ProfilePic />
        {/* <h2 className="text-xl font-Space">Hi I'm Dhanush Theijas</h2>
   <h1 className="text-6xl text-center max-w-2xl font-Space font-bold text-dark-black dark:text-white">
     Crafting Digital Magic, Pixel by Pixel
   </h1> */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.05,
          }}
          className="mt-10 font-bold dark:text-white text-dark-black text-5xl font-Space"
        >
          I'm Dhanush Theijas
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.05 * 2,
          }}
          className="mt-5 dark:text-white text-dark-black text-lg font-nunito max-w-3xl text-center"
        >
          I'm a dedicated front-end developer with a passion for crafting simple
          and intuitive designs that solve intricate problems. My mission is to
          bridge the gap between user Let's turn your vision into a
          user-friendly reality.
        </motion.p>
      </main>
    </div>
  );
}
