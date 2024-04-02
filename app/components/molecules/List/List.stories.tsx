import { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";
import { Paper } from "@/components/atoms/Paper";

const meta = {
  title: "molecules/List",
  component: List,
  args: {
    listItems: [
      { content: "いと", label: "名前" },
      { content: "いとちゃん", label: "ニックネーム" },
      { content: "オカメインコ", label: "種類" },
      {
        content:
          "歌を歌うこと, 手に乗ってダンスをすること, 友達のうにちゃんと一緒に飛ぶこと",
        label: "特技",
      },
    ],
  },
  decorators: [
    (Story: React.FC) => (
      <Paper className="w-96">
        <Story />
      </Paper>
    ),
  ],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
export const WithNote: Story = {
  args: {
    note: "いとちゃんの特技は、歌を歌うこと, 手に乗ってダンスをすること, 友達のうにちゃんと一緒に飛ぶことです。",
  },
};
