import { Gender, Specie, Stage } from "@ito/common";
import { GraphQLHandler, GraphQLRequest, GraphQLVariables, graphql } from "msw";
import { Query } from "../generated/client/graphql";

export const createMockTorisans = (
  override: Query["torisans"] = []
): GraphQLHandler<GraphQLRequest<GraphQLVariables>> => {
  return graphql.query("Torisans", (req, res, ctx) => {
    return res(
      ctx.data({
        torisans: [
          {
            id: 1,
            nickname: "いと",
            specie_type: Specie.SekiseiInko,
            stage_type: Stage.Observation,
          },
          {
            id: 2,
            nickname: "たまじろう",
            specie_type: Specie.SekiseiInko,
            stage_type: Stage.Observation,
          },
          {
            id: 3,
            nickname: "うにちゃん",
            specie_type: Specie.SekiseiInko,
            stage_type: Stage.Observation,
          },
          ...override,
        ],
      })
    );
  });
};

export const createMockTorisan = (
  override: Partial<Query["torisan"]> = {}
): GraphQLHandler<GraphQLRequest<GraphQLVariables>> => {
  return graphql.query("Torisan", (req, res, ctx) => {
    return res(
      ctx.data({
        torisan: {
          id: 1,
          name: "いと",
          nickname: "いと",
          birth_date: new Date("2021-01-01"),
          specie_type: Specie.SekiseiInko,
          stage_type: Stage.Observation,
          gender_type: Gender.Man,
          objective: {
            body_weight: 10,
            amount_of_water: 20,
            amount_of_staple_food: 30,
          },
          food: {
            staple_food_type: 1,
            any_staple_food: "",
            any_other_foods: "",
            other_food_types: [1, 2, 3],
          },
          ...override,
        },
      })
    );
  });
};
