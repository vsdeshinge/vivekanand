/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body
        sans: ["Raleway", "system-ui", "sans-serif"],
        // Headings / logo
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
