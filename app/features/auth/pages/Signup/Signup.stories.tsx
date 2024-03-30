import { Meta, StoryObj } from "@storybook/react";
import { Signup } from "./Signup";
import { rest } from "msw";

const meta = {
  title: "Auth/page/Signup",
  component: Signup,
  argTypes: {},
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/api/auth/signup", (req, res, ctx) => {
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
} satisfies Meta<typeof Signup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
