/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'mobile-medium': '375px',
      'mobile-large': '425px',
      tablet: '426px',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
