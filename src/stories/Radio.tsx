import React from "react";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

interface RadioGroupProps {
  items: Array<{ value: string; label: string }>;
}

/**
 * Primary UI component for forms
 */
export const RadioGroupDemo = ({ items }: RadioGroupProps) => {
  {
    console.log(items);
  }

  return (
    <RadioGroup defaultValue="option-one">
      {items.map((item, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <RadioGroupItem value={item.value} id={item.value} />
          <Label htmlFor={item.value}>{item.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};
