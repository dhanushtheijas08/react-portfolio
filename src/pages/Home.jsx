import React from "react";
import NavBar from "../components/NavBar";
import ProfilePic from "../ui/ProfilePic";

export default function Home() {
  return (
    <div className="bg-gray-50 h-[200vh] dark:bg-black">
      <NavBar />
    </div>
  );
}

// <main className="h-screen flex flex-col justify-center items-center">
//   <ProfilePic />
//   {/* <h2 className="text-xl font-Space">Hi I'm Dhanush Theijas</h2>
//   <h1 className="text-6xl text-center max-w-2xl font-Space font-bold text-dark-black dark:text-white">
//     Crafting Digital Magic, Pixel by Pixel
//   </h1> */}
//   <h2 className="text-5xl font-Space">I'm Dhanush Theijas</h2>
//   <p className="text-lg font-nunito max-w-3xl text-center">
//     I'm a dedicated front-end developer with a passion for crafting simple
//     and intuitive designs that solve intricate problems. My mission is to
//     bridge the gap between user Let's turn your vision into a
//     user-friendly reality.
//   </p>
// </main>
