function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "general-bg": withOpacityValue("--color-general-bg"),
        primary: {
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
      },
    },
  },
  plugins: [],
};
