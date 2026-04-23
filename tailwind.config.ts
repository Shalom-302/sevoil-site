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
          dark: '#004A61',    // Le bleu profond des titres
          primary: '#005B7F', // Le bleu des boutons
          light: '#F4F7F9',   // Le gris de fond de page
          accent: '#00A3C4',  // Bleu ciel pour les badges
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'], // Pour le côté "Corporate"
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;