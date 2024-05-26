import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormObjectiveEditType } from "@/features/torisan/schemas/objective";
import { Note } from "@/components/molecules/Note";

type Props = {
  rhfRegister: UseFormRegister<FormObjectiveEditType>;
  rhfErrors: FieldErrors<FormObjectiveEditType>;
};
export const RHFFormObjective: FC<Props> = ({ rhfRegister, rhfErrors }) => {
  return (
    <>
      <Note title="目標について">
        itoは毎日の鳥さんの健康状態の”変化”に気づくことを目的としており、基本的には記録された体重・食べたご飯の量やお水の量に関して、毎日の変化を通知します。しかし、すでにお医者さんをはじめとした専門の方により目指すべき標準目標の約束がある場合、毎日の変化について標準情報と比べた結果をレポートとして作成します。基本的にすでにお医者さんにかかった鳥さんのための機能であり、この目標はあなたの鳥さんを直接見た専門の方からのアドバイスがある場合のみ設定することをおすすめしています。
      </Note>
      <FormTextBox
        label="体重（g）"
        inputType="number"
        {...rhfRegister("body_weight")}
        errorMessage={rhfErrors.body_weight && rhfErrors.body_weight.message}
      />
      <FormTextBox
        label="ごはんの量（g）"
        inputType="number"
        {...rhfRegister("amount_of_staple_food")}
        errorMessage={
          rhfErrors.amount_of_staple_food &&
          rhfErrors.amount_of_staple_food.message
        }
      />
      <FormTextBox
        label="お水の量（g）"
        inputType="number"
        {...rhfRegister("amount_of_water")}
        errorMessage={
          rhfErrors.amount_of_water && rhfErrors.amount_of_water.message
        }
      />
    </>
  );
};
