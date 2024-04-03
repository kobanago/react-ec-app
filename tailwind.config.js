/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 5.5',
      },
    },
  },
  plugins: [
    iconsPlugin({
      // https://icones.js.org/
      collections: getIconCollections(['material-symbols', 'streamline', 'emojione', 'ph']),
    }),
  ],
};
