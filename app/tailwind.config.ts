import { Config } from "tailwindcss";
import { getHtmlCodeFromColorKey } from "./utils/color";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: getHtmlCodeFromColorKey("primary"),
      "thin-primary": getHtmlCodeFromColorKey("thin_primary"),
      secondary: getHtmlCodeFromColorKey("secondary"),
      black: getHtmlCodeFromColorKey("black"),
      "deep-gray": getHtmlCodeFromColorKey("deep-gray"),
      gray: getHtmlCodeFromColorKey("gray"),
      "thin-gray": getHtmlCodeFromColorKey("thin-gray"),
      error: getHtmlCodeFromColorKey("error"),
      "thin-error": getHtmlCodeFromColorKey("thin_error"),
      white: getHtmlCodeFromColorKey("white"),
      warning: getHtmlCodeFromColorKey("warning"),
      "thin-warning": getHtmlCodeFromColorKey("thin_warning"),
      "thin-black": getHtmlCodeFromColorKey("thin-black"),
    },
    fontFamily: {
      narrow: ["PT Sans Narrow", "sans-serif"],
      noto: ["Noto Sans JP", "sans-serif"],
      caveat: ["Caveat", "sans-serif"],
    },
  },
  safelist: [
    "bg-primary",
    "bg-thin-primary",
    "bg-secondary",
    "bg-black",
    "bg-deep-gray",
    "bg-gray",
    "bg-thin-gray",
    "bg-error",
    "bg-thin-error",
    "bg-white",
    "bg-warning",
    "bg-thin-warning",
    "text-primary",
    "text-secondary",
    "text-black",
    "text-error",
    "text-warning",
    "text-thin-black",
  ],
  plugins: [],
};
export default config;
