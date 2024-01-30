import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "py-2 px-3 text-black rounded-xl border-2 relative text-lg w-52",
  variants: {
    variant: {
      primary: "bg-thin-primary border-thin-primary",
      secondary: "bg-secondary border-secondary text-white",
      default: "border-black text-sm w-28",
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
      onClick: () => void;
    }
  | {
      elementType: "a";
      href: string;
    };

export type Variant =
  | {
      type: "primary" | "secondary";
      counter?: number;
    }
  | {
      type: "default";
    };

export type Props = {
  children: React.ReactNode;
  variant: Variant;
  disabled?: boolean;
  element: Element;
};

export const Button: React.FC<Props> = ({
  children,
  variant,
  disabled,
  element,
}: Props) => {
  const counter =
    (variant.type === "primary" || variant.type === "secondary") &&
    variant.counter != null
      ? variant.counter
      : undefined;

  if (element.elementType === "button") {
    return (
      <button
        onClick={element.onClick}
        className={buttonStyle({ variant: variant.type, disabled })}
        disabled={disabled}>
        <Child counter={counter}>{children}</Child>
      </button>
    );
  }

  return (
    <a
      href={element.href}
      className={buttonStyle({ variant: variant.type, disabled })}>
      <Child counter={counter}>{children}</Child>
    </a>
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
