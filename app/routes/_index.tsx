import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/common/footer";
import Header from "~/components/common/header";
import Category from "~/components/landing/Category";
import Companies from "~/components/landing/Company";
import Events from "~/components/landing/Events";
import Hero from "~/components/landing/Hero";
import Introduction from "~/components/landing/Introduction";
import FeaturedJobs from "~/components/landing/JobHighlight";
import Logo from "~/components/landing/Partner";
import Process from "~/components/landing/Process";
import SuccessStories from "~/components/landing/Testimonial";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Polinema Career" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Process />
      <Category />
      <FeaturedJobs />
      <Companies />
      <SuccessStories />
      <Logo />
      <Events />
      <Footer />
    </>
  );
}
