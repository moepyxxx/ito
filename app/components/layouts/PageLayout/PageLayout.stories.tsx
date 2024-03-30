import type { Meta, StoryObj } from "@storybook/react";

import { PageLayout } from "./PageLayout";
import { Title } from "@/components/molecules/Title";
import { Typography } from "@/components/atoms/Typography";

const meta = {
  title: "layout/PageLayout",
  component: PageLayout,
  args: {
    children: (
      <div>
        <Title title="タイトルが入ります" />
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>

        <Title title="タイトルが入ります" />
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>

        <Title title="タイトルが入ります" />
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
        <Typography>
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
      </div>
    ),
  },
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
