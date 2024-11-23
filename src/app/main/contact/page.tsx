"use client";
import React from "react";
import Header from "../../components/common/header/header";
import Footer from "../../components/common/footer";
import ContactContent from "../../components/contact/content";

export default function page() {
  return (
    <>
      <Header />
      <ContactContent />
      <Footer />
    </>
  );
}
