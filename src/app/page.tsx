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

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <FeaturedJobs />
      <Companies />
      <Logo />
      <Events />
      <Footer />
    </>
  );
}
