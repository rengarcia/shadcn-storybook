import type { Meta, StoryObj } from "@storybook/react";

import { TabsDemo } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: TabsDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TabsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
