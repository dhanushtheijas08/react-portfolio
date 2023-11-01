import { BsMoon, BsSun } from "react-icons/bs";

import React, { useState } from "react";
export default function Switch() {
  const [theme, setTheme] = useState("light");
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
  console.log(theme);
  return (
    <button
      role="button"
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      className="cursor-pointer mx-5"
    >
      {theme === "dark" ? (
        <BsSun className="text-[28px]" />
      ) : (
        <BsMoon className="text-[28px]" />
      )}
    </button>
  );
}
