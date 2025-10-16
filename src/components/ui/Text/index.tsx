import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const textVariants = cva("text-foreground break-normal", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-2xl leading-[32px] font-bold",
      h2: "scroll-m-20 text-2xl leading-[32px] font-normal",
      h3: "scroll-m-20 text-2xl leading-[32px] font-normal",
      p: "leading-7 font-normal",
    },
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    weight: {
      100: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
    },
    size: {
      "x-small": "text-xs leading-5",
      small: "text-sm leading-[22px]",
      base: "text-base leading-7", //16
      medium: "text-[17px] leading-[25px]",
      "x-medium": "text-lg leading-[28px]",
      large: "text-2xl leading-8", //24
      "x-large": "text-2xl leading-8", //24
      "2x-large": "text-3xl leading-[60px]", //32
      "3x-large": "text-[40px] leading-[60px]", //40
    },
  },
  defaultVariants: {
    weight: 400,
    textAlign: "left",
  },
});

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants> & {
    as?: "h1" | "h2" | "h3" | "p" | "span";
    ellipsis?: number;
    allowControlEllipsis?: boolean;
    containerClassName?: string;
  };

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      variant,
      textAlign,
      weight,
      color,
      size = "small",
      as = "span",
      children,
      ellipsis,
      allowControlEllipsis,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const Comp = as;
    const [isExpanded, setIsExpanded] = React.useState(false);
    const textRef = React.useRef<HTMLElement>(null);
    const [isEllipsisActive, setIsEllipsisActive] = React.useState(false);

    React.useEffect(() => {
      if (textRef.current && ellipsis) {
        const isTextOverflowing =
          textRef.current.scrollHeight > textRef.current.clientHeight;
        setIsEllipsisActive(isTextOverflowing);
      }
    }, [children, ellipsis]);

    if (allowControlEllipsis) {
      return (
        <div className={cn(containerClassName, "relative inline")}>
          <Comp
            className={cn(
              textVariants({ variant, textAlign, weight, size, className })
            )}
            ref={(element) => {
              if (typeof ref === "function") {
                ref(element);
              } else if (ref) {
                ref.current = element;
              }
              textRef.current = element;
            }}
            {...props}
            style={{
              ...(color ? { color } : {}),
              ...(!isExpanded && ellipsis
                ? {
                    display: "-webkit-box",
                    WebkitLineClamp: ellipsis,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }
                : {}),
              ...(props.style ?? {}),
            }}
          >
            {children}
          </Comp>
          {isEllipsisActive && (
            <Button
              variant={"text"}
              onClick={() => setIsExpanded((prev) => !prev)}
              className="ml-1 h-fit p-0 text-xs hover:bg-transparent"
            >
              {isExpanded ? "Thu gọn" : "Xem thêm"}
            </Button>
          )}
        </div>
      );
    }

    return (
      <Comp
        className={cn(
          textVariants({ variant, textAlign, weight, size, className })
        )}
        ref={(element) => {
          if (typeof ref === "function") {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
          textRef.current = element;
        }}
        {...props}
        style={{
          ...(color ? { color } : {}),
          ...(!isExpanded && ellipsis
            ? {
                display: "-webkit-box",
                WebkitLineClamp: ellipsis,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }
            : {}),
          ...(props.style ?? {}),
        }}
      >
        {children}
      </Comp>
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
