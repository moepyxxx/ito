import { Element } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { tv } from "tailwind-variants";
import Link from "next/link";
import { Icon, IconType } from "@/components/atoms/Icon";

const iconButtonStyle = tv({
  base: "inline-flex flex-col items-center p-2 relative",
});

type Props = {
  icon: IconType;
  element: Element;
  label: string;
  notification?: boolean;
  strong?: boolean;
  labelHidden?: boolean;
};
export const IconButton: React.FC<Props> = ({
  icon,
  element,
  label,
  notification = false,
  strong = false,
  labelHidden = false,
}) => {
  const ariaLabel = labelHidden ? label : undefined;
  const Child = () => (
    <>
      <Icon icon={icon} size={28} color="black" />
      {!labelHidden && (
        <Typography size="xSmall" color="black" bold={strong}>
          {label}
        </Typography>
      )}
      {notification && (
        <span className="inline-block w-2 h-2 bg-secondary rounded absolute top-2 right-2" />
      )}
    </>
  );
  if (element.elementType === "button") {
    return (
      <button
        onClick={element.onClick}
        className={iconButtonStyle()}
        aria-label={ariaLabel}>
        <Child />
      </button>
    );
  }

  return (
    <Link
      href={element.href}
      className={iconButtonStyle()}
      aria-label={ariaLabel}>
      <Child />
    </Link>
  );
};
