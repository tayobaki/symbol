/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#000",
        white: "#fff",
        red: "#c72a00",
        gray: "#dfe2e5",
        cheeseCake: "#fffcda",
        lightCyan: "#e5b0a3",
        brown: "#420b13",
        green: "#1c3c27",
        blue: "#447cf0",
      },
    },
  },
  plugins: [],
};
