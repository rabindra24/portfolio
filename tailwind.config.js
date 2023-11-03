/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient_pink' : 'linear-gradient(99deg, #D324A2 20.64%, #3830D9 125.03%);',
        'heroImage' : "url('/images/herobg.webp')"
      },
      colors: {
        'primary': "#0A0018",
        'secondary' : '#FFF',
        'pinkshade' : '#C14FEB',
      },
    },
  },
  plugins: [require("daisyui")],
}
