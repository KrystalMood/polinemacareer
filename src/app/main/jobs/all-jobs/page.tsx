"use client";
import React from "react";
import Header from "../../../components/common/header/header";
import Footer from "../../../components/common/footer";
import AllJobsContent from "../../../components/jobs/all-jobs/content";

export default function page() {
  return (
    <>
      <Header />
      <AllJobsContent />
      <Footer />
    </>
  );
}
