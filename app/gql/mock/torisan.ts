import { Specie, Stage } from "@ito/common";
import { graphql } from "msw";

export const torisanMockHandlers = [
  graphql.query("Torisans", (req, res, ctx) => {
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
        ],
      })
    );
  }),
];
