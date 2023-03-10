/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'mobile-medium': '375px',

      tablet: '426px',
      desktop: '900px',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
