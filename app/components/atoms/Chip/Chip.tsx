import { WithBaseElementProps } from "@/types";
import { tv } from "tailwind-variants";

const chipStyle = tv({
  base: "border border-solid text-xs rounded py-1 px-3",
  variants: {
    color: {
      secondary: "border-secondary text-secondary",
      error: "border-error text-error",
    },
    disabled: {
      true: "bg-gray border-gray text-deep-gray",
    },
  },
});

type Props = {
  color: "secondary" | "error";
  disabled?: boolean;
};

export const Chip: React.FC<WithBaseElementProps<Props>> = ({
  children,
  color,
  disabled,
  id,
  className = "",
}) => {
  return (
    <span id={id} className={`${chipStyle({ color, disabled })} ${className}`}>
      {children}
    </span>
  );
};
