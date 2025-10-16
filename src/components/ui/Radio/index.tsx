'use client';

import * as React from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const radioGroupItemVariants = cva(
  'border-main focus-visible:border-main focus-visible:ring-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border text-white shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'size-3',
        md: 'size-4',
        lg: 'size-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const radioGroupIndicatorVariants = cva(
  'relative flex items-center justify-center transition-all duration-300 ease-in-out',
  {
    variants: {
      size: {
        sm: '[&>div]:h-1.5 [&>div]:w-1.5',
        md: '[&>div]:h-2 [&>div]:w-2',
        lg: '[&>div]:h-2.5 [&>div]:w-2.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface RadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, size, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={cn(radioGroupIndicatorVariants({ size }))}
      >
        <div className="bg-main rounded-full" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
