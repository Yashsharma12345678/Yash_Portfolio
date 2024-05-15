/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      marlinGeoSQBold: ["MarlinGeoSQ-bold", "sans-serif"],
      marlinGeoSQlight: ["MarlinGeoSQ-light", "sans-serif"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

// MarlinGeoSQ