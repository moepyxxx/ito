import Image from "next/image";
import { tv } from "tailwind-variants";

const iconImageStyle = tv({
  base: "rounded-full w-11 h-11",
  variants: {
    outlined: {
      true: "border-primary border",
    },
  },
});

type Props = {
  src: string;
  label: string;
  outlined?: boolean;
};

export const IconImage: React.FC<Props> = ({
  src,
  label,
  outlined = false,
}) => {
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
