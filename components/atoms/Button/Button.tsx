import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "py-2 px-3 text-black rounded-xl border-2 relative",
  variants: {
    color: {
      primary: "bg-primary text-primary border-primary",
      secondary: "bg-secondary text-secondary border-secondary",
    },
    variant: {
      contained: "text-black",
      outlined: "bg-transparent",
    },
    size: {
      large: "text-lg w-52",
    },
    disabled: {
      true: "border-gray bg-gray text-deep-gray pointer-events-none",
    },
  },
});

const counterStyle = tv({
  base: "absolute top-[-8px] right-[-8px] bg-primary text-white rounded-full w-5 h-5 text-center bg-primary bg-black text-sm",
});

type Props = {
  children: React.ReactNode;
  color: "primary" | "secondary";
  variant: "contained" | "outlined";
  counter?: number;
  disabled?: boolean;
  size: "large";
  onClick: () => void;
};

export const Button: React.FC<Props> = ({
  children,
  color,
  variant,
  counter,
  disabled,
  size,
}: Props) => {
  return (
    <button
      className={buttonStyle({ color, variant, size, disabled })}
      disabled={disabled}>
      {children}
      {counter && <span className={counterStyle()}>{counter}</span>}
    </button>
  );
};
