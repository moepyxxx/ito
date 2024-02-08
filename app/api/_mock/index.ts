import { rest } from "msw";

export const mockHandlers = [
  rest.get("/api/todos/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 1,
        id: 1,
        title: "ほげちゃん",
        completed: false,
      })
    );
  }),
];
