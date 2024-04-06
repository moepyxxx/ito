"use client";

import { StageType } from "@ito/common";
import { PageLayout } from "@/components/layouts/PageLayout/PageLayout";
import { ProfileBoard } from "../../components/ProfileBoard";
import { SpecieSrcPath } from "../../constants";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { useMemo } from "react";
import { List, ListItem } from "@/components/molecules/List";
import { Paper } from "@/components/atoms/Paper";
import { useDetail } from "./useDetail";

type Props = {
  torisanId: number;
};
export const Detail: React.FC<Props> = ({ torisanId }) => {
  const { loading, base, objective, food } = useDetail(torisanId);

  const objectiveList = useMemo(() => {
    if (objective == null) return [];
    return [
      {
        label: "体重",
        content: objective.bodyWeight,
      },
      {
        label: "ごはんの量",
        content: objective.amountOfStapleFood,
      },
      {
        label: "お水の量",
        content: objective.amountOfWater,
      },
    ];
  }, [objective]);

  const foodList = useMemo(() => {
    if (food == null) return [];

    const list: ListItem[] = [
      {
        label: "主食",
        content: food.stapleFood,
      },
    ];
    if (food.anyStapleFood !== null) {
      list.push({
        label: "主食（その他）",
        content: food.anyStapleFood,
      });
    }
    list.push({
      label: "副食・おやつ・栄養剤",
      content: food.otherFoods,
    });
    if (food.anyOtherFoods !== null) {
      list.push({
        label: "副食・おやつ・栄養剤（その他）",
        content: food.anyOtherFoods,
      });
    }

    return list;
  }, [food]);

  if (loading || food == null || base == null) return <></>;

  return (
    <PageLayout>
      <ProfileBoard
        nickname={base.nickname}
        genderType={base.genderType}
        birthDate={base.birthDate}
        specieType={base.specieType}
        src={SpecieSrcPath[base.specieType]}
        stageType={base.stageType as StageType}
      />
      <div className="flex justify-center my-5">
        <Button
          variant={{ type: "secondary-border" }}
          element={{ elementType: "button" }}>
          レポートを確認する
        </Button>
      </div>
      <div className="space-y-4">
        {objective != null && (
          <div>
            <Typography>標準目標情報</Typography>
            <Paper>
              <List
                note="標準目標が設定されている場合、毎日の変化について標準情報を起点にレポートを作成します。平均ではなく、お医者さんから指示された数値を元に設定してください。"
                listItems={objectiveList}
              />
            </Paper>
          </div>
        )}
        <div>
          <Typography>ごはんの環境</Typography>
          <Paper>
            <List listItems={foodList} />
          </Paper>
        </div>
      </div>
      <div className="flex justify-center my-5 text-center">
        <Button
          variant={{ type: "secondary-border" }}
          element={{ elementType: "a", href: `/p/torisan/${torisanId}/edit` }}>
          鳥さん情報を編集
        </Button>
      </div>
    </PageLayout>
  );
};
