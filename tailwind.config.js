/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'Book-Info-3': '1.5fr 2.5fr 1.1fr',
        'Book-Info-2': 'repeat(auto-fit, minmax(1fr, 1fr))',
      },
    },
    plugins: [],
  }

}