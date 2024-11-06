"use client";
import Image from "next/image";
import IndexHero from "./components/landing/hero";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import FeaturedJobs from "./components/landing/job";
import IndexIntro from "./components/landing/intro";
import IndexLogo from "./components/landing/logo";
import IndexCategory from "./components/landing/category";
import IndexFeatures from "./components/landing/featured-job";
import IndexCompany from "./components/landing/top-company";
import IndexEvent from "./components/landing/event";

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
