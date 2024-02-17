import { WithBaseElementProps } from "@/types";
import { ColorVariantKeys } from "@/utils/color";
import { tv } from "tailwind-variants";

export const typographyStyle = tv({
  base: "leading-7 text-black whitespace-pre-wrap	",
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      xSmall: "text-xs",
    },
    underLine: {
      true: "underline",
    },
    color: {
      black: "text-black",
      primary: "text-primary",
      secondary: "text-secondary",
      error: "text-error",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    bold: {
      true: "font-bold",
    },
  },
});

type Props = {
  color?: ColorVariantKeys;
  align?: "left" | "center" | "right";
  element?: "p" | "h1" | "h2" | "h3";
  size?: "medium" | "small" | "large" | "xSmall";
  bold?: boolean;
};

export const Typography: React.FC<WithBaseElementProps<Props>> = ({
  children,
  color = "black",
  element = "p",
  size = "medium",
  align = "left",
  className = "",
  id,
  bold = false,
}) => {
  const Element = element;
  return (
    <Element
      id={id}
      className={`${typographyStyle({
        size,
        align,
        bold,
      })} text-${color} ${className}`}>
      {children}
    </Element>
  );
};
