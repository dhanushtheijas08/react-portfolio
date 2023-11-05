import { BsMoon, BsSun } from "react-icons/bs";
import React, { useState, useEffect } from "react";

export default function Switch() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button role="button" onClick={toggleTheme} className="cursor-pointer mx-5">
      {theme === "dark" ? (
        <BsSun className="text-[28px]" />
      ) : (
        <BsMoon className="text-[28px]" />
      )}
    </button>
  );
}
