import type { Meta, StoryObj } from "@storybook/react";

import { DatePickerDemo } from "./DatePicker";

const meta = {
  title: "Components/DatePicker",
  component: DatePickerDemo,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePickerDemo>;

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
