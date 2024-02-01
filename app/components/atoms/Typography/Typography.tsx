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
  },
});

type Props = {
  children: React.ReactNode;
  element: "p" | "h1" | "h2" | "h3";
  size: "medium" | "small" | "large";
};

export const Typography: React.FC<Props> = ({ children, element, size }) => {
  const Element = element;
  return <Element className={typographyStyle({ size })}>{children}</Element>;
};
