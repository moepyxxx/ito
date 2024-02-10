import { rest } from "msw";
import { Stage } from "../../types";

export const mockHandlers = [
  rest.get("/a/summary", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          status: Stage.Observation,
          basic: {
            nickname: "string",
            birth_date: "string",
            species_id: 0,
            gender_type: 1,
          },
        },
      ])
    );
  }),
];
