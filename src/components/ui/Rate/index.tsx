"use client";

import React from "react";

import Flex from "@/components/ui/Flex";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { StarIcon } from "@/components/icons";

type Props = {
  value: number;
  size?: number;
  style?: React.CSSProperties;
  showInfo?: boolean;
  infoSize?: string;
  infoWeight?: number;
  onClick?: () => void;
  className?: string;
  infoClassname?: string;
};

const Rate = ({
  value,
  size = 24,
  style,
  onClick,
  showInfo = false,
  infoSize = "small",
  infoWeight = 700,
  className,
  infoClassname,
}: Props) => {
  return (
    <Flex align="center" gap={8}>
      <Flex
        align="center"
        gap={4}
        style={{
          ...style,
          cursor: onClick ? "pointer" : "default",
        }}
        className={cn("", className)}
        onClick={onClick}
      >
        {[...Array(5)].map((_, index) => {
          const isActive = index + 1 <= Math.round(value);
          return (
            <StarIcon
              key={index}
              fill={isActive ? "var(--orange)" : "transparent"}
              stroke={isActive ? "var(--orange)" : "var(--text-disabled)"}
              props={{
                style: {
                  width: size,
                  height: size,
                },
              }}
            />
          );
        })}
      </Flex>
      {showInfo && (
        <Text
          size={infoSize as any}
          weight={infoWeight as any}
          className={cn("pt-0.5", infoClassname)}
        >
          {value}
        </Text>
      )}
    </Flex>
  );
};

export default Rate;
