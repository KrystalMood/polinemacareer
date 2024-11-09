import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { JOB_STEPS } from "@/app/data/index/how-it-works";
import useIntroAnimation from "@/app/libs/animations/index/intro";

export default function IndexIntro() {
  const { titleRef, descriptionRef, stepsRef } = useIntroAnimation();
  return (
    <section className="h-fit bg-[#1C2056] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h1
              ref={titleRef}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 lg:mb-0 max-w-[30rem]"
            >
              Mulai Karirmu dalam{" "}
              <span className="text-yellow-400">4 Tahap</span>
            </h1>
          </div>
          <div className="flex items-center">
            <p
              ref={descriptionRef}
              className="text-white/90 italic text-base md:text-lg font-light leading-relaxed"
            ></p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {JOB_STEPS.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
              className="group bg-sky-900/50 rounded-lg p-6 transition-all duration-300 hover:bg-sky-900/70 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block">{step.icon}</span>
                  <span className="flex items-center justify-center w-8 h-8 text-sm font-medium text-sky-950 bg-sky-400 rounded-full">
                    {index + 1}
                  </span>
                </div>
                <div className="space-y-2">
                  <h2 className="font-bold text-xl text-white">{step.title}</h2>
                  <p className="text-sky-200 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
