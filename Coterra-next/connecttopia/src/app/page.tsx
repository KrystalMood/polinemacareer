"use client";
import Image from "next/image";
import IndexHero from "./components/index/hero";
import Header from "./common/header";
import Footer from "./common/footer";
import FeaturedJobs from "./components/index/job";
import IndexIntro from "./components/index/intro";
import IndexLogo from "./components/index/logo";
import IndexCategory from "./components/index/popular-category";
import IndexFeatures from "./components/index/featured-job";
import IndexCompany from "./components/index/top-company";
import IndexEvent from "./components/index/event";

export default function Home() {
  return (
    <>
      <Header />
      <IndexHero />
      <IndexLogo />
      <IndexIntro />
      {/* <FeaturedJobs /> */}
      <IndexCategory />
      <IndexFeatures />
      <IndexCompany />
      <IndexLogo />
      <IndexEvent />
      <Footer />
    </>
  );
}
