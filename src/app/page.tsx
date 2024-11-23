"use client";
import Image from "next/image";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer";
import Logo from "./components/landing/trusted-companies";
import Companies from "./components/landing/top-companies";
import Events from "./components/landing/upcoming-events";
import Hero from "./components/landing/hero-section";
import HowItWorks from "./components/landing/how-it-works";
import FeaturedJobs from "./components/landing/featured-job";
import SuccessStories from "@/app/components/landing/success-stories";
import Introduction from "@/app/components/landing/introduction";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Introduction />
      <FeaturedJobs />
      <Companies />
      <SuccessStories />
      <Logo />
      <Events />
      <Footer />
    </>
  );
}
