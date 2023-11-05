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
      },
      animation: {
        "lower-bounce": "lower-bounce 5s infinite",
      },
      keyframes: {
        "lower-bounce": {
          "0%, 100%": {
            transform: "translateY(-12%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          }
        }
      }
    },
  },
  plugins: [],
};


