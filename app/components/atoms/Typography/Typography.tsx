import { ColorVariantKeys } from "@/utils/color";
import { tv } from "tailwind-variants";

export const typographyStyle = tv({
  base: "leading-7 text-black",
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
  },
});

type Props = {
  children: React.ReactNode;
  color?: ColorVariantKeys;
  align?: "left" | "center" | "right";
  element?: "p" | "h1" | "h2" | "h3";
  size?: "medium" | "small" | "large" | "xSmall";
  className?: string;
};

export const Typography: React.FC<Props> = ({
  children,
  color = "black",
  element = "p",
  size = "medium",
  align = "left",
  className = "",
}) => {
  const Element = element;
  return (
    <Element
      className={`${typographyStyle({
        size,
        align,
      })} text-${color} ${className}`}>
      {children}
    </Element>
  );
};
