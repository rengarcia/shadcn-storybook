import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroupDemo } from "./Radio";

const meta = {
  title: "Components/Radio Group",
  component: RadioGroupDemo,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroupDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    items: [
      {
        value: "option-1",
        label: "Nothing",
      },
      {
        value: "option-2",
        label: "More than nothing",
      },
      {
        value: "option-3",
        label: "Something",
      },
    ],
  },
};
