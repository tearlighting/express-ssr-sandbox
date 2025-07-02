/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,tsx,less}"],
  theme: {
    extend: {
      colors: {
        // 👇 把 primary 放到 theme.colors，而不是 extend.colors
        primary: {
          500: "#FF6B6B",
        },
      },
      colors: {
        primary: {
          500: "#FF6B6B",
        },
      },
    },
  },
  plugins: [],
}
