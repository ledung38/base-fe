"use client";

import { Select } from "@/components/ui/Select/index";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Đảm bảo chỉ render sau khi client đã mount
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 ">
      <label htmlFor="theme-select" className="text-sm">
        Theme:
      </label>
      <Select
        allowClear
        id="theme-select"
        placeholder="Chọn"
        onChange={(value) => setTheme(value)}
        value={theme}
        triggerClassName="hover:border-primary-foreground"
        valueClassName="!text-primary-foreground"
        options={[
          {
            value: "light",
            label: "Light",
          },
          {
            value: "dark",
            label: "Dark",
          },
          {
            value: "system",
            label: "System",
          },
          {
            value: "spring",
            label: "Spring",
          },
        ]}
      />
    </div>
  );
}
