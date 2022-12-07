/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cool-pink": "#FF86C3",
        "cool-orange": "#FCC478",
        "cool-purple": "#C7A8F7",
        "text-purple": "#A66EFE",
      },
    },
  },
  plugins: [],
};
