import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialogEx } from "./AlertDialog";

const meta = {
  title: "Components/Alert Dialog",
  component: AlertDialogEx,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof AlertDialogEx>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AlertDialog: Story = {
  args: {
    labelButton: "Open Dialog",
    dialogDescription: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    dialogTitle: "This is the title of the dialog",
  },
};
