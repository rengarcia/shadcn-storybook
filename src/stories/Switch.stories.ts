import type { Meta, StoryObj } from "@storybook/react";

import { SwitchDemo } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: SwitchDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SwitchDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Switch: Story = {
  args: {
    id: "bichota-mode",
    labelMode: "Bichota Mode",
  },
};
