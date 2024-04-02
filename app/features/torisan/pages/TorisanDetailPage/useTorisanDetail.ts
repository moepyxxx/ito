import { useQuery } from "@/gql/hooks";
import { TORISAN } from "@/gql/queries";
import { Query } from "@/gql/generated/client/graphql";
import { useMemo } from "react";
import { GenderType, SpecieType, StageType } from "@ito/common";
import {
  OtherFoodsAnySelect,
  OtherFoodsSelections,
  StapleFoodAnySelect,
  StapleFoodSelections,
} from "@/features/torisan/constants";

export const useTorisanDetail = (torisanId: number) => {
  const { loading, data } = useQuery<Pick<Query, "torisan">>(TORISAN, {
    variables: { id: torisanId },
  });

  const base = useMemo(() => {
    if (data == null) return null;
    return {
      nickname: data.torisan.nickname,
      stageType: data.torisan.stage_type as StageType,
      genderType: data.torisan.gender_type as GenderType,
      specieType: data.torisan.specie_type as SpecieType,
      birthDate: data.torisan.birth_date,
    };
  }, [data]);

  const objective = useMemo(() => {
    if (data == null) return null;

    if (Object.values(data.torisan.objective).every((value) => value == null)) {
      return null;
    }

    return {
      bodyWeight: data.torisan.objective.body_weight
        ? `${data.torisan.objective.body_weight}g`
        : "-",
      amountOfStapleFood: data.torisan.objective.amount_of_staple_food
        ? `${data.torisan.objective.amount_of_staple_food}g`
        : "-",
      amountOfWater: data.torisan.objective.amount_of_water
        ? `${data.torisan.objective.amount_of_water}ml`
        : "-",
    };
  }, [data]);

  const food = useMemo(() => {
    if (data == null) return null;

    return {
      stapleFood:
        StapleFoodSelections.find(
          (selection) => selection.value === data.torisan.food.staple_food_type
        )?.label || "-",
      anyStapleFood:
        data.torisan.food.staple_food_type === Number(StapleFoodAnySelect)
          ? data.torisan.food.any_staple_food ?? "-"
          : null,
      otherFoods:
        data.torisan.food.other_food_types
          .map(
            (foodType) =>
              OtherFoodsSelections.find(
                (selection) => selection.value === foodType
              )?.label
          )
          .join(", ") || "-",
      anyOtherFoods: data.torisan.food.other_food_types.includes(
        Number(OtherFoodsAnySelect)
      )
        ? data.torisan.food.any_other_foods ?? "-"
        : null,
    };
  }, [data]);

  return {
    loading: loading || data == null,
    base,
    objective,
    food,
  };
};
