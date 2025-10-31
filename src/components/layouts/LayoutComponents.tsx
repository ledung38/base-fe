"use client";
import Footer from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { Container } from "@/components/ui";
import SideBar from "@/modules/components/SideBar";
import React, { PropsWithChildren } from "react";

const LayoutComponents = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Container size={"xl"} className="flex-1 mt-20">
        <div className="flex pt-5 gap-20 ">
          <SideBar />
          {children}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default LayoutComponents;
