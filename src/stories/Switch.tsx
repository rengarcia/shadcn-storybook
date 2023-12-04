import { Label } from "../components/ui/label"
import { Switch } from "../components/ui/switch"

interface SwitchProps {
  id: string;
  labelMode: string;
}

/**
 * The most beautiful switch component that you've ever seen
 */
export function SwitchDemo({ id, labelMode }: SwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} />
      <Label htmlFor={id}>{labelMode}</Label>
    </div>
  )
}
