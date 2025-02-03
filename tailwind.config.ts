import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0F779',
        secondary: '#E69B8D',
        lightBlue: '#87CEFF',
        olive: '#39504A',
      },
      fontFamily: {
        abel: ['Abel', ...fontFamily.sans],
        anton: ['Anton', ...fontFamily.sans],
        dmSans: ['DM Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
