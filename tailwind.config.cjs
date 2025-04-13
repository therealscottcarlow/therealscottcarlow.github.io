/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // We'll handle dark mode ourselves with data-theme
  theme: {
    extend: {
      colors: {
        // We'll use our CSS variables for colors to maintain consistency
        accent: 'var(--accent)',
        'accent-dark': 'var(--accent-dark)',
        'accent-light': 'var(--accent-light)',
      },
    },
  },
  plugins: [],
};