import React from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-gray-50 h-[200vh] dark:bg-black ">
      <header className="">
        <NavBar />
      </header>
      <main className="">
        <section className="h-screen w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-Space font-bold text-dark-black dark:text-white">
              Hi I'm Dhanush Theijas
            </h1>
            <p className="text-xl font-nunito font-semibold text-dark-black dark:text-white">
              Frontend Developer
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
