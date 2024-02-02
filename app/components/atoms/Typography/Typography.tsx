import { tv } from "tailwind-variants";

export const typographyStyle = tv({
  base: "leading-7 text-black",
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
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
  align: "left" | "center" | "right";
  element?: "p" | "h1" | "h2" | "h3";
  size?: "medium" | "small" | "large";
  className?: string;
};

export const Typography: React.FC<Props> = ({
  children,
  element = "p",
  size = "medium",
  align = "left",
  className = "",
}) => {
  const Element = element;
  return (
    <Element className={`${typographyStyle({ size, align })} ${className}`}>
      {children}
    </Element>
  );
};
