/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '425px',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
