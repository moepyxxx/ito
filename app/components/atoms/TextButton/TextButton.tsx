import { typographyStyle } from "../Typography";
import { WithBaseElementProps } from "@/types";

type Props = {
  color: "secondary" | "error" | "primary" | "black";
  onClick: () => void;
};

export const TextButton: React.FC<WithBaseElementProps<Props>> = ({
  children,
  color,
  onClick,
  className = "",
  id,
}) => {
  return (
    <button
      onClick={onClick}
      id={id}
      className={`${typographyStyle({
        size: "medium",
        color,
        underLine: true,
      })} ${className}`}>
      {children}
    </button>
  );
};
