/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        dvh: ['calc(100vh - 56px)', 'calc(100dvh - 56px)'],
      },
      colors: {
        background: '#111827',
        textBright: '#F9FAFB',
        pink: '#FE2DAD',
        orange: '#FC7032',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
