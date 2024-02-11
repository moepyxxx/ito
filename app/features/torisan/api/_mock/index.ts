import { rest } from "msw";
import { Gender, Stage } from "../../types";

export const torisanMockHandlers = [
  rest.get("/a/torisans", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          stage: Stage.Observation,
          basic: {
            nickname: "いと",
            birth_date: "string",
            species_id: 1,
            gender_type: Gender.Man,
          },
        },
        {
          id: 2,
          stage: Stage.Observation,
          basic: {
            nickname: "たまじろう",
            birth_date: "string",
            species_id: 1,
            gender_type: Gender.Man,
          },
        },
        {
          id: 3,
          stage: Stage.Observation,
          basic: {
            nickname: "うにちゃん",
            birth_date: "string",
            species_id: 1,
            gender_type: Gender.Woman,
          },
        },
      ])
    );
  }),
  rest.get("/a/torisans/species", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "セキセイインコ",
        },
        {
          id: 2,
          name: "オカメインコ",
        },
        {
          id: 3,
          name: "コザクラインコ",
        },
      ])
    );
  }),
];
