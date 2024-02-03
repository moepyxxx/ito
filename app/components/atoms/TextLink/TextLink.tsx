import Link from "next/link";
import { typographyStyle } from "../Typography";
import { WithBaseElementProps } from "@/types";

type Props = {
  color: "secondary" | "error" | "primary";
  href: string;
  target?: "_blank";
};

export const TextLink: React.FC<WithBaseElementProps<Props>> = ({
  children,
  color,
  href,
  target,
  className = "",
  id,
}) => {
  return (
    <Link
      id={id}
      href={href}
      target={target}
      className={`${typographyStyle({
        size: "medium",
        color,
        underLine: true,
      })} ${className}`}>
      {children}
    </Link>
  );
};
