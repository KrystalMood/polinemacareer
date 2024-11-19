"use client";
import React from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import EventDetail from "../../components/events/dashboard/content";
export default function page() {
  return (
    <>
      <Header />
      <EventDetail />
      <EventDetail />
      <EventDetail />
      <Footer />
    </>
  );
}
