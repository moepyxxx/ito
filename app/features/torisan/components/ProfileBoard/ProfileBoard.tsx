import { Chip } from "@/components/atoms/Chip";
import { IconImage } from "@/components/atoms/IconImage";
import { Typography } from "@/components/atoms/Typography";
import { format } from "@formkit/tempo";
import {
  GenderLabel,
  GenderType,
  SpecieLabel,
  SpecieType,
  StageLabel,
  StageType,
} from "@ito/common";
import { FC, useMemo } from "react";

type Props = {
  src: string;
  stageType: StageType;
  nickname: string;
  birthDate: Date;
  specieType: SpecieType;
  genderType: GenderType;
};

export const ProfileBoard: FC<Props> = ({
  src,
  stageType,
  nickname,
  birthDate,
  specieType,
  genderType,
}) => {
  const baseLists = useMemo(() => {
    return [
      { label: "種類", value: SpecieLabel[specieType] },
      { label: "性別", value: GenderLabel[genderType] },
      { label: "生まれた日", value: format(birthDate, "YYYY/MM") },
    ];
  }, [birthDate, genderType, specieType]);

  return (
    <div className="border-2 border-solid border-white flex justify-start items-start shadow-sm p-4 rounded-lg bg-white w-full">
      <div className="flex item-center flex-col justify-center items-center">
        <Chip color="black">{StageLabel[stageType]}</Chip>
        <IconImage
          className="mt-2"
          src={src}
          label={`${nickname}のアイコン画像`}
        />
      </div>
      <div className="ml-3 grow">
        <Typography className="font-bold mb-2">{nickname}</Typography>
        <div className="flex justify-content flex-col">
          {baseLists.map((list, index) => (
            <div key={index} className="flex justify-between grow">
              <Typography color="deep-gray" className="mr-2" size="small">
                {list.label}
              </Typography>
              <Typography size="small">{list.value}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
