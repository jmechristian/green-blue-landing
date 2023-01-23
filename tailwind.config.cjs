/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gb-green': '#76ae74',
        'gb-blue': '#00b6de',
        'gb-bluegreen': '#71CBD1',
        'gb-darkerblue': '#1A8DCD',
        'gb-darkergreen': '#6D9B74',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
