import type { Meta, StoryObj } from "@storybook/react";

import { AccordionEx } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: AccordionEx,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionEx>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    multiple: true,
    items: [
      {
        value: "item-1",
        label: "Is it accessible?",
        content: "Yes, it is accessible",
      },
      {
        value: "item-2",
        label: "Is it styled?",
        content:
          "Yes. It comes with default styles that matches the other components' aesthetic. LOL",
      },
      {
        value: "item-3",
        label: "Is it animated?",
        content:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
  },
};
