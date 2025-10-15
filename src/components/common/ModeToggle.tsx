"use client";

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
      <label htmlFor="theme-select" className="text-sm text-foreground">
        Theme:
      </label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="border border-border rounded-md bg-background text-foreground px-2 py-1"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
        <option value="spring">Spring</option>
      </select>
    </div>
  );
}
