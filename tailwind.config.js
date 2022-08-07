module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5362E9",
        secondary: "#9C81EA",
        tertiary: "#F5F5F5",
        box: "#343141",
        grey: "#928CA6",
        txtGrey: "#DADADA",
        errorRed: "#E63D70",
        bg: "#1F1D26",
      },
      width: {
        lg: "1240px",
      },
      screens: {
        sm: "476px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
      },
      fontFamily: {
        mono: "Roboto Mono, ui-monospace",
        sans: "Roboto, ui-sans",
        sora: "Sora, ui-serif",
      },
      boxShadow: {
        container:
          "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
        "elevation-08dp":
          "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
        "elevation-24dp":
          "0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)",
        "elevation-04dp":
          "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
        none: "0px 0px 0px rgba(0,0,0,0)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
