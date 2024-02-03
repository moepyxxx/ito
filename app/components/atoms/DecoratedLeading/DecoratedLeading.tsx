import { WithBaseElementProps } from "@/types";
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
  color: "primary" | "secondary";
  size: "large" | "medium";
};

export const DecoratedLeading: React.FC<WithBaseElementProps<Props>> = ({
  children,
  color,
  size,
  id,
  className = "",
}) => {
  return (
    <p
      className={`${decoratedLeadingStyle({ color, size })} ${className}`}
      id={id}>
      {children}
    </p>
  );
};
