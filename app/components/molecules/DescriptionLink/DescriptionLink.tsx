import { Typography } from "@/components/atoms/Typography";
import { tv } from "tailwind-variants";
import Link from "next/link";

const linkStyle = tv({
  base: "inline-block py-2 px-4 border-thin-black border rounded-lg bg-white w-full",
  variants: {
    disabled: {
      true: "opacity-40 pointer-events-none",
    },
  },
});

type Props = {
  href: string;
  title: string;
  description: string;
  disabled?: boolean;
};
export const DescriptionLink: React.FC<Props> = ({
  href,
  title,
  description,
  disabled = false,
}) => {
  return (
    <Link
      href={href}
      className={linkStyle({ disabled })}
      aria-label={`ariaLabel`}>
      <Typography size="medium" className="font-bold">
        {title}
      </Typography>
      <Typography size="small" color="thin-black">
        {description}
      </Typography>
    </Link>
  );
};
