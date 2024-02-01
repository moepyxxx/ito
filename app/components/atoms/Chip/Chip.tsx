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
  children: React.ReactNode;
  color: "secondary" | "error";
  disabled?: boolean;
};

export const Chip: React.FC<Props> = ({ children, color, disabled }) => {
  return <span className={chipStyle({ color, disabled })}>{children}</span>;
};
