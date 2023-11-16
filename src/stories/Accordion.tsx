import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface AccordionProps {
  multiple?: boolean;
  items: Array<{ value: string; label: string; content: string }>;
}

/**
 * Primary UI component for user interaction
 */
export const AccordionEx = ({
  multiple,
  items
}: AccordionProps) => {
    {console.log(items)}

  return (
    <Accordion type={multiple ? "multiple": "single"} collapsible>
      {items.map((item, index) => (
        <AccordionItem value={item.value} key={index}>
          <AccordionTrigger>{item.label}</AccordionTrigger>
          <AccordionContent>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
