/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0158D8",
        secondary: "#1C1C1C",
        tertiary: "#686868",
        gray: "#475467",
        ashen: "#D0D0D0",
      },
      boxShadow: {
        "service-box": "0px 6.79px 19.23px -5.65px rgba(58, 77, 233, 0.15)",
      },
      backgroundImage: {
        "service-box": "url(/src/assets/images/shadow.svg)",
      },
    },
  },
  plugins: [],
};
