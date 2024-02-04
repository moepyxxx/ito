import { Element } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { tv } from "tailwind-variants";

const IconButtonStyle = tv({
  base: "inline-flex flex-col items-center p-2",
});

type Props = {
  icon: React.ReactNode;
  element: Element;
  label: string;
  description?: string;
};
export const IconButton: React.FC<Props> = ({
  icon,
  element,
  label,
  description = "",
}) => {
  if (element.elementType === "button") {
    return (
      <button
        onClick={element.onClick}
        aria-label={description}
        className={IconButtonStyle()}>
        {icon}
        <Typography size="xSmall" color="black">
          {label}
        </Typography>
      </button>
    );
  }

  return (
    <a
      href={element.href}
      aria-label={description}
      className={IconButtonStyle()}>
      {icon}
      <Typography size="xSmall" color="black">
        {label}
      </Typography>
    </a>
  );
};
