module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "general-bg": "#FFFF",
        primary: {
          400: "#00e670",
          300: "#c3ea5f",
          200: "#ffeb89",
          100: "#ffeaba"
        },
        secondary: {
          400: "#374151",
          300: "#6B7280",
          200: "#AAB0BB",
          100: "#D1D5DA"
        },
      }
    },
  },
  plugins: [],
}
