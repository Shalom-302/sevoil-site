/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sevoil: {
          dark: "#0C4A6E",      // sky-900 — deep brand
          primary: "#0284C7",   // sky-600 — primary actions
          light: "#F0F9FF",     // sky-50  — page background
          accent: "#38BDF8",    // sky-400 — soft accent
          lime: "#A3E635",      // lime-400 — fresh startup accent
          limeDeep: "#84CC16",  // lime-500
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
