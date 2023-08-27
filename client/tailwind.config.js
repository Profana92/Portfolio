/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        buttonsFix: '402px',
        tall: { raw: '(min-height: 420px)' },
      },
      minHeight: {
        dvh: ['calc(100vh)', 'calc(100dvh)'],
      },
      maxHeight: {
        dvh: ['calc(100vh)', 'calc(100dvh)'],
      },
      colors: {
        background: '#090120',
        textBright: '#F9FAFB',
        pink: '#FE2DAD',
        orange: '#FC7032',
        buttonOrange: '#B44F22',
        buttonBlue: '#112389',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'home-hero-pattern': [
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))',
          "url('./assets/home_background_tiny.jpg')",
        ],
      },
    },
  },
  plugins: [],
}
