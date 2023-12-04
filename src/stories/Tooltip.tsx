import { Button } from "../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

interface TooltipProps {
  btnLabel: string;
  tooltipContent: string;
}

/**
 * An perfect tooltip component
 */
export function TooltipDemo({ btnLabel, tooltipContent }: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">{btnLabel}</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="my-0">{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
