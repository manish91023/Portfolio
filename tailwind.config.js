/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        drop: 'drop 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}