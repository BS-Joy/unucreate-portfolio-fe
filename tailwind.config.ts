import type { Config } from "tailwindcss";

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
    },
  },
  plugins: [],
} satisfies Config;
