const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", ...defaultTheme.fontFamily.sans],
        // "Dana-FaNum", "Dana",
      },
      colors: {
        primary: "#00C6C6",
        secondary: "#1136EF",
        "alternative-one": "#F4CF65",
        "alternative-two": "#8ACFFF",
        error: "#ff9138",
        pink: "#E42C64",
        success: "#2ED477",
        info: "#F4CF65",
        level: {
          0: "#0c3148",
          50: "#455a64",
          100: "#94a3b8",
        },
        gray: {
          0: "#ffffff",
          50: "#f1f5f9",
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#ACBEBD",
          500: "#515959",
          600: "#38414D",
          700: "#1C242E",
          800: "#272D3B",
          900: "#0B0C0D",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
