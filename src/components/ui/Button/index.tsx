import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Spin from "@/components/ui/Spin";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      color: {
        default:
          "bg-transparent text-foreground hover:text-primary hover:border-primary",
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary",
        success:
          "bg-success text-success-foreground hover:bg-success/90 border-success",
        warning:
          "bg-warning text-warning-foreground hover:bg-warning/90 border-warning",
        info: "bg-info text-info-foreground hover:bg-info/90 border-info",
        error:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xLg: "h-14  px-8 has-[>svg]:px-6",
        icon: "size-9",
      },
      cursor: {
        default: "cursor-default",
        pointer: "cursor-pointer",
        disabled: "cursor-not-allowed",
      },
      variant: {
        container: "border",
        outline: "border bg-transparent hover:opacity-80 hover:bg-transparent",
        text: "bg-transparent",
        link: "bg-transparent hover:opacity-75 hover:bg-transparent",
        dashed: "border border-dashed bg-transparent",
        filled: "hover:brightness-90",
      },
    },

    compoundVariants: [
      // 1. outline
      {
        variant: "outline",
        color: "primary",
        class: "text-primary  ",
      },
      {
        variant: "outline",
        color: "secondary",
        class: "text-secondary ",
      },
      {
        variant: "outline",
        color: "success",
        class: "text-success ",
      },
      {
        variant: "outline",
        color: "warning",
        class: "text-warning",
      },
      {
        variant: "outline",
        color: "info",
        class: "text-info ",
      },
      {
        variant: "outline",
        color: "error",
        class: "text-destructive ",
      },
      // 2. Dashed
      {
        variant: "dashed",
        color: "primary",
        class: "text-primary hover:bg-primary/10",
      },
      {
        variant: "dashed",
        color: "secondary",
        class: "text-secondary hover:bg-secondary/10",
      },
      {
        variant: "dashed",
        color: "success",
        class: "text-success hover:bg-success/10",
      },
      {
        variant: "dashed",
        color: "warning",
        class: "text-warning hover:bg-warning/10",
      },
      {
        variant: "dashed",
        color: "info",
        class: "text-info hover:bg-info/10",
      },
      {
        variant: "dashed",
        color: "error",
        class: "text-destructive hover:bg-destructive/10",
      },
      // 3. Text
      {
        variant: "text",
        color: "primary",
        class: "text-primary hover:bg-primary/10",
      },
      {
        variant: "text",
        color: "secondary",
        class: "text-secondary hover:bg-secondary/10",
      },
      {
        variant: "text",
        color: "success",
        class: "text-success hover:bg-success/10",
      },
      {
        variant: "text",
        color: "warning",
        class: "text-warning hover:bg-warning/10",
      },
      {
        variant: "text",
        color: "info",
        class: "text-info hover:bg-info/10",
      },
      {
        variant: "text",
        color: "error",
        class: "text-destructive hover:bg-destructive/10",
      },
      {
        variant: "text",
        color: "default",
        class: "hover:bg-accent hover:text-accent-foreground",
      },
      // 4. filled
      {
        variant: "filled",
        color: "primary",
        class: "bg-primary/60 !text-primary-foreground ",
      },
      {
        variant: "filled",
        color: "secondary",
        class: "bg-secondary/60 text-secondary-foreground ",
      },
      {
        variant: "filled",
        color: "success",
        class: "bg-success/60 text-success-foreground ",
      },
      {
        variant: "filled",
        color: "warning",
        class: "bg-warning/60 text-warning-foreground ",
      },
      {
        variant: "filled",
        color: "info",
        class: "bg-info/60 text-info-foreground ",
      },
      {
        variant: "filled",
        color: "error",
        class: "bg-destructive/60 text-destructive-foreground ",
      },
      {
        variant: "filled",
        color: "default",
        class: "bg-accent hover:text-accent-foreground ",
      },

      // link
      {
        variant: "link",
        color: "primary",
        class: "text-primary",
      },
      {
        variant: "link",
        color: "secondary",
        class: "text-secondary",
      },
      {
        variant: "link",
        color: "success",
        class: "text-success",
      },
      {
        variant: "link",
        color: "warning",
        class: "text-warning",
      },
      {
        variant: "link",
        color: "info",
        class: "text-info",
      },
      {
        variant: "link",
        color: "error",
        class: "text-destructive",
      },
    ],
    defaultVariants: {
      variant: "container",
      color: "primary",
      size: "default",
    },
  }
);

const loadingConainerVariants = cva("", {
  variants: {
    size: {
      default: "mr-2",
      sm: "mr-2",
      lg: "mr-2",
      xLg: "mr-4",
      icon: "mr-2",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const loadingVariants = cva("", {
  variants: {
    variant: {
      container: "text-main",
      link: "text-main",
      filled: "text-main",
      dashed: "text-main",
      primary: "text-main",
      outline: "text-main",
      text: "text-main",
    },
    size: {
      default: "size-5",
      sm: "size-5",
      lg: "size-6",
      xLg: "size-8",
      icon: "size-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

function Button({
  className,
  variant,
  size,
  color,
  cursor,
  loading,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          color,
          size,
          cursor: props.onClick ? "pointer" : cursor ?? "default",
        }),
        className
      )}
      {...props}
    >
      {loading ? (
        <Spin
          containerClassName={loadingConainerVariants({ size })}
          className={loadingVariants({ variant, size })}
        />
      ) : (
        <></>
      )}
      {props.children}
    </Comp>
  );
}

export { Button, buttonVariants };
