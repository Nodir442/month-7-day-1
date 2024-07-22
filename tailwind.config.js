/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(13, 13, 13, 1)",
        secondary:"rgba(241, 192, 91, 1)",
        darkSilver: "rgba(179, 179, 179, 1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
        screens: {
          lg: "1400px",
        },
      },
    },
  },
  plugins: [],
};
