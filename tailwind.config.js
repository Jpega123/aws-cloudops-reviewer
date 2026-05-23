/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aws: {
          orange: '#FF9900',
          navy: '#232F3E',
          lightnavy: '#37475A',
          blue: '#146EB4',
          lightblue: '#1A9BDB',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
