module.exports = {
  content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
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
        "vivid-orange-300": "#fcb711",
        "vivid-orange-400": "#fca311",
        "vivid-orange-500": "#fc8f11",
        "vivid-orange-600": "#fc7c11",
        "vivid-orange-700": "#fc6811",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    require("tailwindcss-scoped-groups")({
      groups: ["one", "two"],
    }),
    require("flowbite/plugin"),
  ],
};
