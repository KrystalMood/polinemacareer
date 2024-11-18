"use client";
import Image from "next/image";
import IndexHero from "./components/landing/hero-section";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import FeaturedJobs from "./components/landing/job-listings";
import IndexIntro from "./components/landing/how-it-works";
import IndexLogo from "./components/landing/trusted-companies";
import IndexCategory from "./components/landing/job-categories";
import IndexFeatures from "./components/landing/featured-job";
import IndexCompany from "./components/landing/top-companies";
import IndexEvent from "./components/landing/upcoming-events";

export default function Home() {
   
  return (
    <>
      <Header />
      <IndexHero />
      <IndexIntro />
      <IndexCategory />
      <IndexFeatures />
      <IndexCompany />
      <IndexLogo />
      <IndexEvent />
      <Footer />
    </>
  );
}
