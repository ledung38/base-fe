import { ModeToggle } from "@/components/common/ModeToggle";
import React from "react";

export const Header = () => {
  return (
    <div className="text-2xl text-white p-2 h-20 flex bg-primary px-20 fixed inset-0 z-9999 shadow-sm">
      <div className="flex-1  self-center text-primary-foreground">
        LD - Design
      </div>

      <div className="flex align-middle">
        <ModeToggle />
      </div>
    </div>
  );
};
