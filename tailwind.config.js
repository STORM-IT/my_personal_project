/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'white':"#ffff",
      'black': '#000000',
      'gray': '#D4D4D4',
      'boldGray':'#30475E',
      'liteGray': '#E5E5E5',
      'purple': '#6B21A8',
      'litePurple': '#9333EA',
      'textV1':"#30475E"
    },
    screens: {
      'mobile':{'max': '639px'},

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptopDown': {'max': '1023px'},
      'laptopUp': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },fontSize: {
      s: ".500rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [],
}
