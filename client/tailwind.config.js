/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        dvh: ['calc(100vh - 56px)', 'calc(100dvh - 56px)'],
      },
    },
  },
  plugins: [],
}
