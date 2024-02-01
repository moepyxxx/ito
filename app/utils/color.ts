export const ColorVariants = {
  primary: "#F3E04B",
  thin_primary: "#FAEE89",
  secondary: "#64B090",
  black: "#000000",
  deep_gray: "#D9D9D9",
  gray: "#F0F0ED",
  thin_gray: "#F4F4F1",
  error: "#E83737",
  white: "#FFFFFF",
} as const;

export type ColorVariantKeys = keyof typeof ColorVariants;
export type ColorVariantHtmlCodes =
  (typeof ColorVariants)[keyof typeof ColorVariants];

export const getHtmlCodeFromColorKey = (
  colorKey: ColorVariantKeys
): ColorVariantHtmlCodes => {
  return ColorVariants[colorKey];
};
