import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#F3E04B",
      "thin-primary": "#FAEE89",
      secondary: "#64B090",
      black: "#000000",
      "deep-gray": "#D9D9D9",
      gray: "#F0F0ED",
      "thin-gray": "#F4F4F1",
      white: "#FFFFFF",
    },
    fontFamily: {
      narrow: ["var(--font-narrow)", "sans-serif"],
      noto: ["var(--font-noto)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
