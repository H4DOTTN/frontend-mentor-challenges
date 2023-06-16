/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'illustration-sign-up-mobile':
          "url('./src/assets/images/illustration-sign-up-mobile.svg')",
        'illustration-sign-up-desktop':
          "url('./src/assets/images/illustration-sign-up-desktop.svg')",
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(4, 100%, 67%)',
        },
        neutral: {
          'dark-slate-grey': 'hsl(234, 29%, 20%)',
          'charcoal-grey': 'hsl(235, 18%, 26%)',
          grey: 'hsl(231, 7%, 60%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontSize: {
        'body-copy': '16px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
