/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_pink: '#F6D0CD',
        custom_yellow: '#DAAE30',
        custom_green: '#1E464E',
        custom_white:'#F6F1EE'
      },
    },
  },
  plugins: [],
}

