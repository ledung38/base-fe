import { cn } from "@/lib/utils";
import * as React from "react";

type InputProps = React.ComponentProps<"input"> & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  containerClassName?: string;
};

function Input({
  className,
  type,
  prefix,
  suffix,
  containerClassName,
  ...props
}: InputProps) {
  return (
    <div
      className={cn("relative flex w-full items-center", containerClassName)}
    >
      {prefix && (
        <div className="pointer-events-none absolute left-3 flex items-center">
          {prefix}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-text-2 placeholder:text-text-disabled selection:bg-main/50 ring-border-color flex h-9 w-full min-w-0 rounded-full border-none bg-white px-3 py-1 text-base shadow-xs ring transition-[color,box-shadow] outline-none selection:text-white file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:ring-main focus-visible:border-none focus-visible:ring",
          "aria-invalid:ring-red/20 aria-invalid:border-red transition-all duration-300 ease-in-out",
          prefix && "pl-9",
          suffix && "pr-9",
          className
        )}
        {...props}
      />
      {suffix && (
        <div className="pointer-events-none absolute right-3 flex items-center">
          {suffix}
        </div>
      )}
    </div>
  );
}

export { Input };
