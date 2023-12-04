"use client"

import { Button } from "../components/ui/button"
import { ToastAction } from "../components/ui/toast"
import { useToast } from "../components/ui/use-toast"
import { Toaster } from '../components/ui/toaster';


interface ToastProps {
  destructive?: boolean;
}

export function ToastDemo({ destructive }: ToastProps) {
  const { toast } = useToast()

  return (
    <>
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: destructive ? "destructive" : "default",
          title: "Scheduled: Catch up ",
          description: "Wednesday, December 6, 2023 at 12:30 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
    <Toaster />
    </>
  )
}
