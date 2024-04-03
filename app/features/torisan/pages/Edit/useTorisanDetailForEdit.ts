import { useQuery } from "@/gql/hooks";
import { TORISAN } from "@/gql/queries";
import { Query } from "@/gql/generated/client/graphql";
import { useMemo } from "react";
import { FormObjectiveSubmitType } from "../../schemas/objective";
import { FormFoodSubmitType } from "../../schemas/food";

export const useTorisanDetailForEdit = (torisanId: number) => {
  const { loading, data } = useQuery<Pick<Query, "torisan">>(TORISAN, {
    variables: { id: torisanId },
  });

  const detailForEdit: null | (FormObjectiveSubmitType & FormFoodSubmitType) =
    useMemo(() => {
      if (data == null) return null;

      if (data.torisan.food.staple_food_type === undefined) {
        throw new Error("Unexpected staple food type");
      }

      return {
        body_weight: data.torisan.objective.body_weight ?? null,
        amount_of_staple_food:
          data.torisan.objective.amount_of_staple_food ?? null,
        amount_of_water: data.torisan.objective.amount_of_water ?? null,
        staple_food_type: data.torisan.food.staple_food_type,
        any_staple_food: data.torisan.food.any_staple_food ?? "",
        other_food_types: data.torisan.food.other_food_types,
        any_other_foods: data.torisan.food.any_other_foods ?? "",
      };
    }, [data]);

  return {
    loading: loading || data == null,
    detailForEdit,
  };
};
