"use client";
import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header/header";
import JobsContent from "@/app/components/jobs/jobs";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <JobsContent />
      <Footer />
    </>
  );
}
