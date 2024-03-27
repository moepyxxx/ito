import { WithBaseElementProps } from "@/types";
import { tv } from "tailwind-variants";
import Link from "next/link";

const buttonStyle = tv({
  base: "py-2 px-3 text-black rounded-xl border relative text-lg w-52",
  variants: {
    variant: {
      primary: "bg-primary border-primary",
      secondary: "bg-secondary border-secondary text-white",
      default: "border-black text-sm w-28",
      "secondary-border": "border-secondary text-secondary",
    },
    disabled: {
      true: "border-gray bg-gray text-deep-gray pointer-events-none",
    },
  },
});

const counterStyle = tv({
  base: "absolute top-[-12px] right-[-12px] bg-primary text-white rounded-full w-7 h-7 text-center bg-primary bg-black text-sm leading-loose font-narrow",
});

export type Element =
  | {
      elementType: "button";
      onClick?: () => void;
      buttonType?: "button" | "submit";
    }
  | {
      elementType: "a";
      href: string;
    };

export type Variant =
  | {
      type: "primary" | "secondary" | "secondary-border";
      counter?: number;
    }
  | {
      type: "default";
    };

export type Props = {
  variant?: Variant;
  disabled?: boolean;
  element?: Element;
};

export const Button: React.FC<WithBaseElementProps<Props>> = ({
  disabled,
  variant = { type: "default" },
  element = { elementType: "button", buttonType: "button", onClick: () => {} },
  children,
  id,
  className = "",
}) => {
  const counter =
    (variant.type === "primary" || variant.type === "secondary") &&
    variant.counter != null
      ? variant.counter
      : undefined;

  if (element.elementType === "button") {
    return (
      <button
        id={id}
        onClick={element.onClick}
        type={element.buttonType}
        className={`${buttonStyle({
          variant: variant.type,
          disabled,
        })} ${className}`}
        disabled={disabled}>
        <Child counter={counter}>{children}</Child>
      </button>
    );
  }

  return (
    <Link
      id={id}
      href={element.href}
      className={`${buttonStyle({
        variant: variant.type,
        disabled,
      })} ${className}`}>
      <Child counter={counter}>{children}</Child>
    </Link>
  );
};

type ChildProps = {
  children: React.ReactNode;
  counter?: number;
};
const Child: React.FC<ChildProps> = ({ children, counter }) => (
  <>
    {children}
    {counter != null && <span className={counterStyle()}>{counter}</span>}
  </>
);
