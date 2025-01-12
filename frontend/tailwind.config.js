/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#008DDA',
        secondary: '#080B17',
      },
      fontFamily: {
        'inter' : ['Inter', 'serif'],
        'logofont' : ['Merienda', 'serif']
      }
    },
  },
  plugins: [],
}