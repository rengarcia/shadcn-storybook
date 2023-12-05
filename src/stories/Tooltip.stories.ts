import type { Meta, StoryObj } from "@storybook/react";

import { TooltipDemo } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: TooltipDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TooltipDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Tooltip: Story = {
  args: {
    btnLabel: "Hover me",
    tooltipContent: "I'm a pretty tooltip",
  },
};
