import { RenderStepActions } from "@/components/layouts/StepperLayout/useStepper";

import { FormSubmitType as TorisanBasic } from "../StepperFormBasic";
import { FormSubmitType as TorisanObjective } from "../StepperFormObjective";
import { FormSubmitType as TorisanFood } from "../StepperFormFood";
import { Typography } from "@/components/atoms/Typography";
import { List } from "@/components/molecules/List";
import { useMemo } from "react";
import {
  NicknameNothingSelect,
  NicknameSelections,
  OtherFoodsSelections,
  StapleFoodSelections,
} from "@/features/torisan/constants";
import { GenderSelections, SpecieSelections } from "@ito/common";
import { format } from "@formkit/tempo";
import { TextButton } from "@/components/atoms/TextButton";
import { Paper } from "@/components/atoms/Paper";

type Props = {
  renderStepperActions: RenderStepActions;
  torisan: {
    basic: TorisanBasic;
    objective: TorisanObjective;
    food: TorisanFood;
  };
  onSpecificStep: (step: string) => void;
};

export const StepperFormConfirm: React.FC<Props> = ({
  renderStepperActions,
  onSpecificStep,
  torisan: { basic, objective, food },
}) => {
  const basicListItems = useMemo(() => {
    return [
      { label: "名前", content: basic.name },
      {
        label: "ニックネーム",
        content:
          basic.nickname === NicknameNothingSelect
            ? basic.name
            : basic.nickname +
              NicknameSelections.find(
                (selection) => selection.value === basic.nickname
              )!.label,
      },
      {
        label: "種類",
        content: SpecieSelections.find(
          (specie) => specie.value === basic.specie_id
        )!.label,
      },
      {
        label: "性別",
        content: GenderSelections.find(
          (gender) => gender.value === basic.gender
        )!.label,
      },
      {
        label: "誕生日",
        content: basic.birth_date ? format(basic.birth_date, "YYYY/MM") : "",
      },
    ];
  }, [basic]);

  const objectiveListItems = useMemo(() => {
    return [
      {
        label: "体重",
        content: objective.body_weight ? objective.body_weight + "g" : "-",
      },
      {
        label: "目標の摂取量",
        content: objective.amount_of_staple_food
          ? objective.amount_of_staple_food + "g"
          : "-",
      },
      {
        label: "目標の水分量",
        content: objective.amount_of_water
          ? objective.amount_of_water + "g"
          : "-",
      },
    ];
  }, [objective]);

  const foodListItems = useMemo(() => {
    return [
      {
        label: "主食",
        content: StapleFoodSelections.find(
          (selection) => selection.value === food.staple_food
        )!.label,
      },
      {
        label: "主食（その他）",
        content: food.any_staple_food || "-",
      },
      {
        label: "副食・おやつ・栄養剤",
        content: food.other_foods
          .map(
            (otherFood) =>
              OtherFoodsSelections.find(
                (selection) => selection.value === otherFood
              )!.label
          )
          .join(", "),
      },
      {
        label: "副食・おやつ・栄養剤（その他）",
        content: food.any_other_foods || "-",
      },
    ];
  }, [food]);

  return (
    <div>
      <div>
        <Typography element="h2" className="mb-2">
          基本情報
        </Typography>
        <Paper>
          <List listItems={basicListItems} />
          <div className="text-right">
            <TextButton
              color="secondary"
              onClick={() => onSpecificStep("basic")}>
              基本情報を修正
            </TextButton>
          </div>
        </Paper>
      </div>
      <div className="mt-4">
        <Typography element="h2" className="mb-2">
          目標
        </Typography>
        <Paper>
          <List listItems={objectiveListItems} />
          <div className="text-right">
            <TextButton
              color="secondary"
              onClick={() => onSpecificStep("objective")}>
              目標を修正
            </TextButton>
          </div>
        </Paper>
      </div>

      <div className="mt-4">
        <Typography element="h2" className="mb-2">
          ごはん
        </Typography>
        <Paper>
          <List listItems={foodListItems} />
          <div className="text-right">
            <TextButton
              color="secondary"
              onClick={() => onSpecificStep("food")}>
              ごはんを修正
            </TextButton>
          </div>
        </Paper>
      </div>

      <div className="pt-2">
        {renderStepperActions(true, {
          onClickPrev: (onPrev: () => void) => onPrev(),
        })}
      </div>
    </div>
  );
};
