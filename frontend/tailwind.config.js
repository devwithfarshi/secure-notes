/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#3D3DF4",
      bgDark: "#181818",
      dark: "#232323",
      light: "#ffffff",
      bgLight: "#f7f7f7",
      hoverCardBg: "rgba(255,255,255,0.1)",
      cardBg: "rgba(255,255,255,0.3)",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
