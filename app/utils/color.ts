export const ColorVariants = {
  primary: "#F3E04B",
  thin_primary: "#F9F8EB",
  secondary: "#087D4C",
  black: "#000000",
  deep_gray: "#D9D9D9",
  gray: "#F0F0ED",
  thin_gray: "#F4F4F1",
  error: "#E83737",
  thin_error: "#FADBDB",
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
