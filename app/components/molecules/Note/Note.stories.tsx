import { Typography } from "@/components/atoms/Typography";
import { Note } from "./Note";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "molecules/Note",
  component: Note,
  decorators: [
    (Story: React.FC) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "目標について",
    children: (
      <Typography size="small">
        itoは毎日の鳥さんの健康状態の”変化”に気づくことを目的としており、基本的には記録された体重・食べたご飯の量やお水の量に関して、毎日の変化を通知します。しかし、すでにお医者さんをはじめとした専門の方により目指すべき標準目標の約束がある場合、毎日の変化について標準情報と比べた結果をレポートとして作成します。基本的にすでにお医者さんにかかった鳥さんのための機能であり、この目標はあなたの鳥さんを直接見た専門の方からのアドバイスがある場合のみ設定することをおすすめしています。
      </Typography>
    ),
  },
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const NoTitle: Story = {
  args: {
    title: undefined,
  },
};
