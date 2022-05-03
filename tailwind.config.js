function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "general-bg": withOpacityValue("--color-general-bg"),
        primary: {
          500: withOpacityValue("--color-primary-500"),
          400: withOpacityValue("--color-primary-400"),
          300: withOpacityValue("--color-primary-300"),
          200: withOpacityValue("--color-primary-200"),
          100: withOpacityValue("--color-primary-100"),
        },
        secondary: {
          400: withOpacityValue("--color-secondary-400"),
          300: withOpacityValue("--color-secondary-300"),
          200: withOpacityValue("--color-secondary-200"),
          100: withOpacityValue("--color-secondary-100"),
          0: withOpacityValue("--color-secondary-0"),
        },
        error: withOpacityValue("--color-error"),
      },
      gridTemplateColumns: {
        questions: "repeat(auto-fit, minmax(250px, 1fr))",
        mainLayout: "auto 1fr",
      },
      gridTemplateRows: {
        questionsWithControls: "auto 1fr auto",
        mainLayout: "64px calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
};
