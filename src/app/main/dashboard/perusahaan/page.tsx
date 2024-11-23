"use client";
import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header/header";
import MainDashboard from "@/app/components/dashboard/perusahaan/main";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <MainDashboard />
      <Footer />
    </>
  );
}
