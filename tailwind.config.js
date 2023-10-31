/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "nunito" : ["Nunito Sans", "sans-serif"],
        "Space": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "dark-black": "#111",
        "nav-border": "rgb(235, 238, 241)",
        "nav-bg": "rgba(255, 255, 255, 0.5)"
      }
    },
  },
  plugins: [],
};
