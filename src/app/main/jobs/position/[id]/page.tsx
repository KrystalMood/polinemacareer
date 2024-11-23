"use client";
import React from "react";
import Header from "@/app/components/common/header/header";
import Footer from "@/app/components/common/footer";
import PositionContent from "@/app/components/jobs/position/content";

export default function JobPositionPage() {
  return (
    <>
      <Header />
      <PositionContent />
      <Footer />
    </>
  );
}
