import { FC } from "react";
import {
  FormObjectiveEditType,
  FormObjectiveSubmitType,
  getInitialObjectiveValue,
  objectiveSchema,
} from "../../schemas/objective";
import {
  FormFoodEditType,
  FormFoodSubmitType,
  addFoodOtherRule,
  foodSchema,
  getInitialFoodValue,
} from "../../schemas/food";
import { Title } from "@/components/molecules/Title";
import { Typography } from "@/components/atoms/Typography";
import { Paper } from "@/components/atoms/Paper";
import { List } from "@/components/molecules/List";
import {
  GenderLabel,
  GenderType,
  SpecieLabel,
  SpecieType,
} from "../../../../../common/src";
import { format } from "@formkit/tempo";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RHFFormObjective } from "../RHF/RHFFormObjective";
import { RHFFormFood } from "../RHF/RHFFormFood";
import { Button } from "@/components/atoms/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@/gql/hooks";
import {
  Mutation,
  MutationEditTorisanArgs,
} from "@/gql/generated/client/graphql";
import { EDIT_TORISAN } from "@/gql/queries";

export type DetailForEdit = FormObjectiveSubmitType & FormFoodSubmitType;

export type DetailReadonly = {
  nickname: string;
  genderType: GenderType;
  specieType: SpecieType;
  birthDate: Date;
};

type Props = {
  torisanId: number;
  detailForEdit: DetailForEdit;
  detailReadonly: DetailReadonly;
};

export const EditForm: FC<Props> = ({
  torisanId,
  detailForEdit,
  detailReadonly,
}) => {
  const router = useRouter();

  const defaultValues = {
    ...getInitialObjectiveValue({
      body_weight: detailForEdit.body_weight,
      amount_of_staple_food: detailForEdit.amount_of_staple_food,
      amount_of_water: detailForEdit.amount_of_water,
    }),
    ...getInitialFoodValue({
      staple_food_type: detailForEdit.staple_food_type,
      any_staple_food: detailForEdit.any_staple_food,
      other_food_types: detailForEdit.other_food_types,
      any_other_foods: detailForEdit.any_other_foods,
    }),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormObjectiveEditType & FormFoodEditType, any, DetailForEdit>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(addFoodOtherRule(objectiveSchema.merge(foodSchema))),
  });

  const { mutationFn } = useMutation<
    Pick<Mutation, "editTorisan">,
    MutationEditTorisanArgs
  >(EDIT_TORISAN);

  const currentStapleFood = useWatch({
    control,
    name: "staple_food_type",
  });
  const currentOtherFoods = useWatch({
    control,
    name: "other_food_types",
  });

  const onSubmit = handleSubmit((data) => {
    mutationFn({
      variables: {
        torisanId,
        torisan: {
          objective: {
            body_weight: data.body_weight,
            amount_of_staple_food: data.amount_of_staple_food,
            amount_of_water: data.amount_of_water,
          },
          food: {
            staple_food_type: data.staple_food_type,
            any_staple_food: data.any_staple_food,
            any_other_foods: data.any_other_foods,
            other_food_types: data.other_food_types,
          },
        },
      },
      onCompleted: () => {
        toast.success(`編集が完了しました`);
        router.push(`/p/torisan/${torisanId}`);
      },
    });
  });

  return (
    <>
      <Title title={`${detailReadonly.nickname}の情報を編集`} />
      <div className="space-y-5">
        <div>
          <Typography>基本情報（編集できません）</Typography>
          <Paper>
            <List
              listItems={[
                { label: "ニックネーム", content: detailReadonly.nickname },
                {
                  label: "性別",
                  content: GenderLabel[detailReadonly.genderType],
                },
                {
                  label: "種類",
                  content: SpecieLabel[detailReadonly.specieType],
                },
                {
                  label: "誕生日",
                  content: format(detailReadonly.birthDate, "YYYY/MM"),
                },
              ]}
            />
          </Paper>
        </div>
        <div>
          <Typography>標準目標情報</Typography>
          <Paper>
            {/** @ts-expect-error エラーでるが動く */}
            <RHFFormObjective rhfRegister={register} rhfErrors={errors} />
          </Paper>
        </div>
        <div>
          <Typography>ごはんの環境</Typography>
          <Paper>
            <RHFFormFood
              // @ts-expect-error エラーでるが動く
              rhfRegister={register}
              rhfErrors={errors}
              currentStapleFood={currentStapleFood}
              currentOtherFoods={currentOtherFoods}
            />
          </Paper>
        </div>
      </div>
      <div className="text-center mt-6">
        <Button
          element={{ elementType: "button", onClick: onSubmit }}
          variant={{ type: "primary" }}>
          保存する
        </Button>
      </div>
    </>
  );
};
