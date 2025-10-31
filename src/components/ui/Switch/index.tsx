"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const switchVariants = cva(
  "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
  {
    variants: {
      color: {
        primary:
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80",
        secondary:
          "data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80",
        success:
          "data-[state=checked]:bg-success data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80",
        warning:
          "data-[state=checked]:bg-warning data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80",
        error:
          "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80",
        info: "data-[state=checked]:bg-info data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80",
        default: "",
      },
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        "3xl": "size-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  label?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg" | "3xl";
};
function Switch({ className, children, color, size, ...props }: SwitchProps) {
  return (
    <div className="flex items-center gap-2">
      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
          "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(switchVariants({ color, size }))}
        />
      </SwitchPrimitive.Root>
      {children}
    </div>
  );
}

export { Switch };
