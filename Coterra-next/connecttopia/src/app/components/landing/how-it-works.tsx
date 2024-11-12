import React from "react";
import { JOB_STEPS } from "@/app/data/index/how-it-works";

export default function IndexIntro() {
  return (
    <section className="relative h-fit bg-gradient-to-br from-[#1C2056] to-[#2d317a] py-16 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-start mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Start Your Career Journey in{" "}
            <span className="text-yellow-400">4 Simple Steps</span>
          </h1>
          <p className="max-w-xl text-blue-200/90 text-base md:text-lg font-light leading-relaxed">
            Your dream job is just four steps away. Let us guide you through the
            process of landing your perfect role.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOB_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="relative"
            >
              {/* Connection Line */}
              {index < JOB_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-sky-400/50 to-transparent transform -translate-y-1/2 z-0" />
              )}

              {/* Card */}
              <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-sky-400/50 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-10 h-10 border-blue-500 border-2 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4 p-3 bg-sky-400/10 rounded-xl inline-block">
                  {React.cloneElement(step.icon, {
                    className: "w-8 h-8 text-sky-400",
                  })}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">
                    {step.title}
                  </h2>
                  <p className="text-blue-200/80 text-sm leading-relaxed">
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
