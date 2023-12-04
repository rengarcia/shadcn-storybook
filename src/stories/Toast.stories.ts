import type { Meta, StoryObj } from "@storybook/react";

import { ToastDemo } from "./Toast";

const meta = {
  title: "Components/Toast",
  component: ToastDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    destructive: false,
  },
};
