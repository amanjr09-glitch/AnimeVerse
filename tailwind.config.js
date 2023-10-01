/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
        gray: {
          50: "#F5F5F5",
          100: "#F0F0F0",
          200: "#E5E5E5",
          300: "#999999",
          400: "#2B2B2B",
          500: "#262626",
          550: "#232322",
          600: "#1C1C1C",
          700: "#171717",
          800: "#020202",
        },
        pallete:{
          red:"#ef4444",
          darkgreen:"#034737",
          blue:"#84E6FF",
          darkblue:"#007fff",
          green: "#abe098",
        },
        theme: "#57c84d",
        
    }
    },
  },
  plugins: [require("tailwindcss-animate")],
}