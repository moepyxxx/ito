import { tv } from "tailwind-variants";
import Link from "next/link";
import { typographyStyle } from "../Typography";

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
  color: "secondary" | "error" | "primary";
  href: string;
  target?: "_blank";
};

export const TextLink: React.FC<Props> = ({
  children,
  color,
  href,
  target,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={typographyStyle({ size: "medium", color, underLine: true })}>
      {children}
    </Link>
  );
};
