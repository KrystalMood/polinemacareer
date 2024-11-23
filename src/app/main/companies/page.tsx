"use client";
import React from "react";
import Header from "../../components/common/header/header";
import Footer from "../../components/common/footer";
import CompaniesContent from "../../components/companies/content";

export default function CompaniesPage() {
  return (
    <>
      <Header />
      <CompaniesContent />
      <Footer />
    </>
  );
}
