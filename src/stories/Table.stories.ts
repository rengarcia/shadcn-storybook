import type { Meta, StoryObj } from "@storybook/react";

import { TableDemo } from "./Table";

const meta = {
  title: "Components/Table",
  component: TableDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Table: Story = {
  args: {},
};
