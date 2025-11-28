"use client";

import { Select } from "@/components/ui/Select/index";
import { AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openFlip, setOpenFlip] = useState(false);
  // Đảm bảo chỉ render sau khi client đã mount
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const handleChangeTheme = (theme) => {
    setOpenFlip(true);
    setTheme(theme);
    setTimeout(() => {
      setOpenFlip(false);
    }, 300);
  };

  return (
    <div className="flex items-center gap-2 ">
      <label htmlFor="theme-select" className="text-sm">
        Theme:
      </label>
      <Select
        allowClear
        id="theme-select"
        placeholder="Chọn"
        onChange={handleChangeTheme}
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

      <AnimatePresence>
        {openFlip && (
          <motion.div
            key="flip"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "white",
              transformOrigin: "left center",
              zIndex: 9999,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
