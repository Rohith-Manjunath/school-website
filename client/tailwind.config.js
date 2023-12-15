/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01416f",
        secondary: "#ebebeb",
        tertiary: "#e4e4e4",
        ctcPrimary: "#2a5276",
        ctcSecondary: "#c73938",
        textPrimary: "#ffffff",
      },
      fontSize: {
        "2xl": "1.75rem", // Add a custom font size
      },
      fontFamily: {
        custom: ["Nunito", "sans-serif"], // Add a custom font family
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"], // Enable the 'active' variant for background colors
    },
  },
  plugins: [],
};
