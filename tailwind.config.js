/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#541388",
        jiel: "#9381FF",
        secondary: "#EEE1B3",
      },
      screens: {
        "2xl" : "1320px",
      },
    },
  },
  plugins: [],
};

