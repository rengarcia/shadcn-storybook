import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main>
      Home
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>El Sebas es Gay?</AccordionTrigger>
          <AccordionContent>
            Yes. Obviosly
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
