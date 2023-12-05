import type { Meta, StoryObj } from "@storybook/react";

import { ComboboxDemo } from "./Combobox";

const meta = {
  title: "Components/Combobox",
  component: ComboboxDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ComboboxDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Combobox: Story = {
  args: {
    labelButton: "Open Dialog",
    dialogDescription: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    dialogTitle: "This is the title of the dialog",
  },
};
