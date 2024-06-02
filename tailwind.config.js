/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        tilt: {
          "0%,50%,  100%": {
            transfrom: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },
      animation: {
        tilt: "tilt 4s infinite linear",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
