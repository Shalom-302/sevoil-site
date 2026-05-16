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
          dark: "#0F172A",      // slate-900 — anthracite brand
          primary: "#0284C7",   // sky-600 — primary actions
          light: "#F0F9FF",     // sky-50  — page background
          accent: "#38BDF8",    // sky-400 — soft accent
          yellow: "#FACC15",      // yellow-400 — fresh accent
          yellowDeep: "#EAB308",  // yellow-500
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
