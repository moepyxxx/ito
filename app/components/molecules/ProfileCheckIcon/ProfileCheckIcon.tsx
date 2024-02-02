import { IconImage } from "@/components/atoms/IconImage";
import { Typography } from "@/components/atoms/Typography";
import { CheckIcon } from "@/components/icons/Check";

type Props = {
  nickname: string;
  isChecked: boolean;
  src: string;
};
export const ProfileCheckIcon: React.FC<Props> = ({
  nickname,
  isChecked,
  src,
}) => {
  return (
    <div className="flex items-center">
      <div className="relative">
        {isChecked && (
          <span>
            <CheckIcon size={20} color="secondary" />
          </span>
        )}
        <IconImage src={src} label={`${nickname}のアイコン画像`} />
        <Typography element="p" size="small">
          {nickname}
        </Typography>
      </div>
    </div>
  );
};
