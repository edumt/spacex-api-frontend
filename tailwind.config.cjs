/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rocket: "url('/images/rocket.jpg')",
        "rocket-mobile": "url('/images/rocket-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
