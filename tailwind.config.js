import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#387ADF",
        secondary: "#FBA834",
        accent: "#50C4ED",
        primaryDark: "#333A73",
        light: "#ffffff",
        dark: "#2f2d2d",
      },
    },
  },
  // important: true,
  plugins: [flowbite.plugin()],
};
