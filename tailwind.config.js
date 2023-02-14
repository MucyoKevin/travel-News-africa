/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors :{
        "primary-color" : "var(--primary-color)",
        "secondary-color" : "var(--secondary-color)"
      },
      text :{
        size : {
          "text-size" : "var(--text-size)",
        },
        font :{
          "main-font" : "var(--main-font)",
          "secondary-font" : "var(--secondary-font)"
        }
      }
    },

  },
  plugins: [],
}
