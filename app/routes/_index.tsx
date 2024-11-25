import type { MetaFunction } from "@remix-run/node";
import MainLayout from "~/components/layouts/MainLayout";
import Hero from "~/components/landing/Hero";
import Introduction from "~/components/landing/Introduction";
import Process from "~/components/landing/Process";
import Category from "~/components/landing/Category";
import FeaturedJobs from "~/components/landing/JobHighlight";
import Companies from "~/components/landing/Company";
import SuccessStories from "~/components/landing/Testimonial";
import Logo from "~/components/landing/Partner";
import Events from "~/components/landing/Events";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Polinema Career" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <MainLayout>
      <Hero />
      <Introduction />
      <Process />
      <Category />
      <FeaturedJobs />
      <Companies />
      <SuccessStories />
      <Logo />
      <Events />
    </MainLayout>
  );
}
