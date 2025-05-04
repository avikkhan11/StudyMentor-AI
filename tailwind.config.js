/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./index.html",
    ],
    theme: {
      extend: {
        colors: {
          primary: "hsl(263, 75%, 63%)",      // purple
          secondary: "hsl(196, 100%, 50%)",   // blue
          accent: "hsl(12, 100%, 50%)",       // orange
          border: "hsl(240, 3.7%, 15.9%)",
          input: "hsl(240, 3.7%, 15.9%)",
          ring: "hsl(263, 75%, 63%)",
        },
        borderRadius: {
          DEFAULT: "0.5rem",
        },
      },
    },
    plugins: [],
  }
  