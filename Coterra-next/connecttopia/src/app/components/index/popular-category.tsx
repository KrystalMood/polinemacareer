import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  Paintbrush,
  Code,
  Megaphone,
  Video,
  Music,
  Calculator,
  HeartPulse,
  Database,
} from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Category {
  title: string;
  icon: JSX.Element;
  openPositions: number;
}

const categories: Category[] = [
  { title: "Code & Programming", icon: <Code />, openPositions: 312 },
  { title: "Digital Marketing", icon: <Megaphone />, openPositions: 297 },
  { title: "Video & Animation", icon: <Video />, openPositions: 247 },
  { title: "Music & Audio", icon: <Music />, openPositions: 204 },
  { title: "Account & Finance", icon: <Calculator />, openPositions: 167 },
  { title: "Health & Care", icon: <HeartPulse />, openPositions: 125 },
  { title: "Data & Science", icon: <Database />, openPositions: 57 },
  { title: "Graphics & Design", icon: <Paintbrush />, openPositions: 357 },
];

export default function IndexCategory() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    cardsRef.current = cardsRef.current.slice(0, categories.length);

    gsap.set([titleRef.current, descriptionRef.current, buttonRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(cardsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    // animasi konten header
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    headerTimeline
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // animasi cards
    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-[50vh] bg-slate-50">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        <div className="mb-10 max-w-[80vw] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h1
              ref={titleRef}
              className="font-display text-4xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-0"
            >
              Popular Category
            </h1>
            <p ref={descriptionRef} className="text-lg text-slate-600">
              Find your dream job in our popular category
            </p>
          </div>
          <button
            ref={buttonRef}
            className="group flex items-center text-md font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            View All Categories
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group block space-y-4 rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                {category.icon}
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h2>
                <p className="text-base text-slate-400">
                  {category.openPositions.toLocaleString()} Positions
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
