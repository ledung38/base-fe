"use client";

import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps, cva } from "class-variance-authority";
import Flex from "@/components/ui/Flex";
import { cn } from "@/lib/utils";
import { CheckBig } from "@/components/icons";
import { Label } from "@/components/ui/Label";

const checkboxVariants = cva(
  "peer border-main dark:bg-input/30 data-[state=checked]:bg-main dark:data-[state=checked]:bg-main data-[state=checked]:border-main focus-visible:border-main aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:ring-none shrink-0 cursor-pointer rounded-[4px] border-2 shadow-xs transition-shadow outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-white",
  {
    variants: {
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

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: string | React.ReactNode;
  labelClassName?: string;
  containerClassName?: string;
}

function Checkbox({
  className,
  size,
  containerClassName,
  labelClassName,
  label,
  ...props
}: CheckboxProps) {
  const id = React.useId();
  return (
    <Flex
      align="center"
      gap={8}
      className={cn("cursor-pointer", containerClassName ?? "")}
    >
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(checkboxVariants({ size }), className)}
        {...props}
        id={props.id ?? id}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex h-fit w-fit items-center justify-center text-current transition-none"
        >
          <CheckBig
            className={cn("size-4 [&_path]:stroke-white", {
              "size-3": size === "sm",
              "size-4": size === "md",
              "size-5": size === "lg",
              "size-6": size === "3xl",
            })}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {!!label && (
        <Label
          htmlFor={props.id ?? id}
          className={cn("cursor-pointer", labelClassName ?? "")}
        >
          {label}
        </Label>
      )}
    </Flex>
  );
}

export { Checkbox };
