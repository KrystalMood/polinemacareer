"use client";
import React from "react";
import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";
import EventDetail from "@/app/components/events/detail/content";

export default function EventDetailPage() {
  return (
    <>
      <Header />
      <EventDetail />
      <Footer />
    </>
  );
} 