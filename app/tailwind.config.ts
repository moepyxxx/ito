import { Config } from "tailwindcss";
import { getHtmlCodeFromColorKey } from "./utils/color";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: getHtmlCodeFromColorKey("primary"),
      "thin-primary": getHtmlCodeFromColorKey("thin_primary"),
      secondary: getHtmlCodeFromColorKey("secondary"),
      black: getHtmlCodeFromColorKey("black"),
      "deep-gray": getHtmlCodeFromColorKey("deep_gray"),
      gray: getHtmlCodeFromColorKey("gray"),
      "thin-gray": getHtmlCodeFromColorKey("thin_gray"),
      error: getHtmlCodeFromColorKey("error"),
      white: getHtmlCodeFromColorKey("white"),
    },
    fontFamily: {
      narrow: ["var(--font-narrow)", "sans-serif"],
      noto: ["var(--font-noto)", "sans-serif"],
      caveat: ["var(--font-caveat)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
