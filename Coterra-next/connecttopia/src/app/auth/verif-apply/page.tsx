"use client";
import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import JobApplicationVerification from "@/app/components/auth/verif-apply/form";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <JobApplicationVerification />
      <Footer />
    </>
  );
}
