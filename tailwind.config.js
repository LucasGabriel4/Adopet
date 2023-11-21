/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
     'blue': '#3772FF',
     'green': '#36D6AD',
     'Orange': '#FC7071',
     'cream': '#FCF0E3',
     'gray': '#737380',
     'light-gray': '#BCBCBC',
     'light-gray-2': '#F6F6F6',
     'white': 'white',
     'btnHover': '#FF9D9E',
     'red': 'red'
    },
  },
  plugins: [],
}