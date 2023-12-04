/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        'ibm' : ['IBM+Plex+Sans','sans']
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
