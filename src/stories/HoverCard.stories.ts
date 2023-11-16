import type { Meta, StoryObj } from "@storybook/react";

import { HoverCardDemo } from "./HoverCard";

const meta = {
  title: "Components/HoverCard",
  component: HoverCardDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    labelButton: "Open Dialog",
    dialogDescription: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    dialogTitle: "This is the title of the dialog",
  },
};
