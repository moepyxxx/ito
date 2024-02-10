import { Chip } from "@/components/atoms/Chip";
import { IconImage } from "@/components/atoms/IconImage";
import { Typography } from "@/components/atoms/Typography";
import { StagLabel } from "@/features/torisan/constants";
import { StageType } from "@/features/torisan/types";
import { tv } from "tailwind-variants";

const style = tv({
  base: "border-2 border-solid border-white flex items-center justify-start shadow-sm p-4 rounded-lg bg-white w-full",
  variants: {
    isChecked: {
      true: "border-primary bg-thin-primary",
    },
  },
});

type Props = {
  src: string;
  nickname: string;
  stage: StageType;
  isChecked: boolean;
  onClick: () => void;
};
export const TorisanBoardButton: React.FC<Props> = ({
  src,
  nickname,
  isChecked,
  stage,
  onClick,
}) => {
  return (
    <button className={`${style({ isChecked })}`} onClick={onClick}>
      <IconImage src={src} label={`${nickname}のアイコン画像`} />
      <div className="pl-3 text-left">
        <Chip color="black">{StagLabel[stage]}</Chip>
        <Typography bold className="mt-2">
          {nickname}
        </Typography>
      </div>
    </button>
  );
};
