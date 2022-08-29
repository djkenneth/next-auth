module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      // "helvetica-thin": ["HelveticaNeue Thin", "Helvetica Neue Thin"],
      // "helvetica-light": ["HelveticaNeue Light", "Helvetica Neue Light"],
      // "helvetica-regular": ["HelveticaNeue Regular", "Helvetica Neue Regular"],
      // "helvetica-medium": ["HelveticaNeue Medium", "Helvetica Neue Medium"],
      // "helvetica-bold": ["HelveticaNeue Bold", "Helvetica Neue Bold"],
    },
    extend: {
      colors: {
        black: "#181818",
        "vivid-yellow": "#facc15",
        "vivid-orange": "#fca311",
        "dark-blue": "#14213d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
