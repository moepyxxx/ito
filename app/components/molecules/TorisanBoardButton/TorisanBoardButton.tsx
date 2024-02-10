import { Chip } from "@/components/atoms/Chip";
import { DecoratedLeading } from "@/components/atoms/DecoratedLeading";
import { IconImage } from "@/components/atoms/IconImage";
import { Typography } from "@/components/atoms/Typography";
import { tv } from "tailwind-variants";

const style = tv({
  base: "border-2 border-solid border-white flex items-center justify-start shadow-sm p-4 rounded-lg bg-white w-full relative",
  variants: {
    isChecked: {
      true: "border-primary bg-thin-primary",
    },
  },
});

type Props = {
  src: string;
  nickname: string;
  chipText: string;
  isChecked: boolean;
  decorationMessage?: string;
  onClick: () => void;
};
export const TorisanBoardButton: React.FC<Props> = ({
  src,
  nickname,
  isChecked,
  chipText,
  onClick,
  decorationMessage,
}) => {
  return (
    <button className={`${style({ isChecked })}`} onClick={onClick}>
      <IconImage src={src} label={`${nickname}のアイコン画像`} />
      <div className="pl-3 text-left">
        <Chip color="black">{chipText}</Chip>
        <Typography bold className="mt-2">
          {nickname}
        </Typography>
      </div>
      {decorationMessage && (
        <DecoratedLeading
          size="medium"
          color="secondary"
          className="absolute top-5 right-[-4px]">
          {decorationMessage}
        </DecoratedLeading>
      )}
    </button>
  );
};
