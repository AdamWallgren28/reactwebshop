/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {       
        lg: "700px"
      },
      boxShadow: {
        'upper': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

