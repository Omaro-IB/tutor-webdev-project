/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white-bg': '#e8e5e5',
      'black-fg': '#3e3e3e',
      'blue-primary': '#7690c1',
      'blue-primary-hover': '#97bad3',
      'green-secondary': '#b6ddd0',
      'green-secondary-hover': '#d4e8dc',
      'pink-accent': "#e8c3d4",
      'pink-accent-hover': "#e6d6dd"
    },
    fontFamily: {
      'sans': ['TTCommons'],
      'bold': ['TTCommonsBold']
    },
    extend: {},
  },
  plugins: [],
}