"use client";
import React from "react";
import Header from "@/app/components/common/header/header";
import Footer from "@/app/components/common/footer";
import AllJobsContent from "@/app/components/jobs/post-a-jobs/content";

export default function JobPositionPage() {
  return (
    <>
      <Header />
      <AllJobsContent />
      <Footer />
    </>
  );
}
