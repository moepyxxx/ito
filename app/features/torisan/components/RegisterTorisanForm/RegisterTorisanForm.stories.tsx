import type { Meta, StoryObj } from "@storybook/react";

import { RegisterTorisanForm } from "./RegisterTorisanForm";
import { RegisterTorisan } from "../../api";

const meta = {
  title: "organisms/RegisterTorisanForm",
  component: RegisterTorisanForm,
  args: {
    species: [
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
    ],
    onSubmit: (torisan: RegisterTorisan) => console.warn(torisan),
  },
  argTypes: {},
} satisfies Meta<typeof RegisterTorisanForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
