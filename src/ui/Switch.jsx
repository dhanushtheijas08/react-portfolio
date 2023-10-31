import { BsMoon, BsSun } from "react-icons/bs";

import React, { useState } from "react";
export default function Switch() {
  const [theme, setTheme] = useState("dark");
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
