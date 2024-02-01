import { tv } from "tailwind-variants";

const decoratedLeadingStyle = tv({
  base: "font-caveat rotate-[-4deg]",
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
    size: {
      large: "text-3xl",
      medium: "text-xl",
    },
  },
});

type Props = {
  children: React.ReactNode;
  color: "primary" | "secondary";
  size: "large" | "medium";
};

export const DecoratedLeading: React.FC<Props> = ({
  children,
  color,
  size,
}) => {
  return <p className={decoratedLeadingStyle({ color, size })}>{children}</p>;
};
