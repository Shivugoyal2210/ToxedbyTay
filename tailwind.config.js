/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/home-page-banner3.jpg')",
      },
    },
  },
  plugins: [],
};
