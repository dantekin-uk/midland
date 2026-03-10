/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        'steel-grey': '#64748B',
        'text-main': '#2A3036',
        'bg-white': '#FFFFFF',
        'bg-light': '#F7F8F9',
      },
    },
  },
  plugins: [],
}
