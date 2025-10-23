"use client";
import { Container } from "@/components/ui";
import SideBar from "@/modules/components/SideBar";
import React, { PropsWithChildren } from "react";

const LayoutComponents = ({ children }: PropsWithChildren) => {
  return (
    <Container size={"xl"}>
      <div className="flex pt-5 gap-20">
        <SideBar />
        {children}
      </div>
    </Container>
  );
};

export default LayoutComponents;
