"use client";

import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import React from "react";
import Hero from "@/app/components/about-us/hero";
import OurMission from "@/app/components/about-us/our-mission";
import Team from "@/app/components/about-us/team";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Hero />
      <OurMission />
      <Team />
      <Footer />
    </>
  );
}
