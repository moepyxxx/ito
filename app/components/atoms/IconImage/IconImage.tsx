import Image from "next/image";
import { tv } from "tailwind-variants";

const iconImageStyle = tv({
  base: "rounded-full w-11 h-11",
  variants: {
    outlined: {
      primary: "border-primary border-2",
      secondary: "border-secondary border-2",
    },
  },
});

type Props = {
  src: string;
  label: string;
  outlined?: "primary" | "secondary";
};

export const IconImage: React.FC<Props> = ({ src, label, outlined }) => {
  return (
    <Image
      src={src}
      alt={`鳥さんアイコン: ${label}`}
      width={44}
      height={44}
      className={iconImageStyle({ outlined })}
    />
  );
};
