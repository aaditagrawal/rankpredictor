import { classNames } from "@/app/ui.stylex";
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  classNames.button121,
  {
    variants: {
      variant: {
        default: classNames.button122,
        destructive:
          classNames.button123,
        outline:
          classNames.button124,
        secondary:
          classNames.button125,
        ghost:
          classNames.button126,
        link: classNames.button127,
      },
      size: {
        default: classNames.button128,
        xs: classNames.button129,
        sm: classNames.button130,
        lg: classNames.button131,
        icon: classNames.button132,
        "icon-xs": classNames.button133,
        "icon-sm": classNames.button134,
        "icon-lg": classNames.button135,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
