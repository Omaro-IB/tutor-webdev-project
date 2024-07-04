/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'plain-bg': '#f3edec',
      'plain-fg': '#3e3e3e',
      'primary1': '#EEB798',
      'primary1-transparent': 'rgba(238,183,152,0.1)',
      'primary1-hover': '#e8c8b6',
      'primary2': '#aedee4',
      'primary2-transparent': 'rgba(174,222,228,0.1)',
      'primary2-hover': '#AEC6C9',
      'secondary1': '#A69388',
      'secondary1-hover': '#D8D0CB',
      'secondary2': '#90A1A3',
      'secondary2-hover': '#CFD6D7',
      'accent1': "#60C789",
      'accent1-hover': "#BDE8CE",
      'accent2': "#E3DE9B",
      'accent2-hover': "#efecc6",
      'error':"#ef6363",
      'test1': "#aa0000",
      'test2': "#00288e",
      'test3': "#246000",
      'test4': "#d1bd00",
    },
    fontFamily: {
      'sans': ['TTCommons'],
      'bold': ['TTCommonsBold']
    },
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/src/assets/images/desktop.jpg')",
        'hero-mobile': "url('/src/assets/images/mobile.jpg')",
      }
    },
  },
  plugins: [],
}