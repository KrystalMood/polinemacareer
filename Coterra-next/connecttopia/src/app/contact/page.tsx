"use client";
import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import ContactContent from "../components/contact/content";

export default function page() {
  return (
    <>
      <Header />
      <ContactContent />
      <Footer />
    </>
  );
}
