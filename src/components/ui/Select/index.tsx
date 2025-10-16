import { useState } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';
import { RiCloseLine } from '@remixicon/react';

import { Button } from '@/shared/components/ui/Button';
import { Text } from '@/shared/components/ui/Text';
import useDidUpdateEffect from '@/shared/hooks/useDidUpdateEffect';

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from './select';

type Props = {
  value?: string | number;
  placeholder?: string;
  onChange: (value: any) => void;
  triggerClassName?: string;
  valueClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  options: {
    label: string | number;
    value: string | number;
  }[];
  id?: string;
  defaultValue?: string;
  allowClear?: boolean;
  disabled?: boolean;
};

export const Select = (props: Props) => {
  const [value, setValue] = useState<string | undefined | null>(
    props.defaultValue || null,
  );
  const selectedOption = props.options.find((option) => option.value == value);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    props.onChange?.(newValue);
  };

  const handleClear = (e: any) => {
    console.log(e);
    e.stopPropagation();
    setValue(undefined);
    props.onChange?.(undefined);
  };

  useDidUpdateEffect(() => {
    setValue(
      props.value ? props.value?.toString() : props.defaultValue || undefined,
    );
  }, [props.value]);
  return (
    <div className="relative">
      <ShadcnSelect
        value={value || ''}
        onValueChange={handleValueChange}
        disabled={props.disabled}
      >
        <SelectTrigger
          isHideIcon={!!props.allowClear && !!value}
          id={props.id}
          className={props.triggerClassName}
        >
          <Text
            color={
              selectedOption?.label ? 'var(--text-1)' : 'var(--text-disabled)'
            }
            className={props.valueClassName}
          >
            {selectedOption?.label ?? props.placeholder}
          </Text>

          {value && props.allowClear && (
            <SelectPrimitive.Icon className="opacity-0">
              <RiCloseLine />
            </SelectPrimitive.Icon>
          )}
        </SelectTrigger>
        <SelectContent className={props.contentClassName}>
          {props.options.map((option) => (
            <SelectItem key={option.value} value={`${option.value}`}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
      {value && props.allowClear && (
        <SelectPrimitive.Icon
          className="absolute top-1/2 right-0 -translate-y-1/2"
          onClick={handleClear}
        >
          <RiCloseLine size={16} />
        </SelectPrimitive.Icon>
      )}
    </div>
  );
};
