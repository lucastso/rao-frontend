import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg-profile.jpg')",
        profile: "url('/bg.jpg')",
      },
    },
    screens: {
      ...defaultTheme.screens,
      xs: "360px",
    },
  },
  plugins: [],
};
export default config;
