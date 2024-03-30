import { Meta, StoryObj } from "@storybook/react";
import { Signin } from "./Signin";
import { rest } from "msw";

const meta = {
  title: "Auth/page/Signin",
  component: Signin,
  argTypes: {},
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/api/auth/signin", (req, res, ctx) => {
          return res(
            ctx.status(204),
            ctx.json({
              id: "1",
              email: "user@example.com",
              access_token: "access_token",
              refresh_token: "refresh_token",
            })
          );
        }),
      ],
    },
  },
} satisfies Meta<typeof Signin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
