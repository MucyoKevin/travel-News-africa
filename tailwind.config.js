/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      text: {
        size: {
          "text-size": "var(--text-size)",
          "card-font-size": "var(--card-font-size)",
        },
        fontFamily: {
          "primary-font": "var(--font-cormarant)",
          "secondary-font": "var(--font-baskerville)",
        },
      },
    },
  },
  plugins: [],
};
