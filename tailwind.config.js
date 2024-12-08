/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F6976B",
        display: "#333A4C",
        buttonOrange: "#FEA170",
        slate: "#CCCCCC",
        gray: "#EEEEEE",
        equal: "#F78D6C",
      },
    },
  },
  plugins: [require("daisyui")],
};
