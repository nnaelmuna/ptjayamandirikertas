/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif;",
        roboto: "'Roboto', serif;",
      },
      colors: {
        primary: "#",
        secondary: "",
        textcolor: ""
      }
    },
  },
  plugins: [],
}

