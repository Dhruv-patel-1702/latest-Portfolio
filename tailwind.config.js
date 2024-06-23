/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ["General Sans", "sans-serif"],
      },
      fontSize: {
        "9xl": "8rem", // Existing large size
        "10xl": "10rem", 
        "text-11xl": "12rem",
        "text-12xl":" 14rem" 
      },
    },
  },
};
