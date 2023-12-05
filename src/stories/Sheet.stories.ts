import type { Meta, StoryObj } from "@storybook/react";

import { SheetDemo } from "./Sheet";

const meta = {
  title: "Components/Sheet",
  component: SheetDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SheetDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Sheet: Story = {
  args: {
    btnTriggerLabel: "Open the dialog",
  },
};
