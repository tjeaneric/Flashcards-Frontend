/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightOrange: "#EB7224",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRed: "hsl(12, 88%, 59%)",
        greyLight: "#dbdbdb",
      },
    },
  },
  plugins: [],
};
