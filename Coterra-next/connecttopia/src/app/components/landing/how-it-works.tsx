import React from "react";
import { JOB_STEPS } from "@/app/data/index/how-it-works";

export default function IndexIntro() {
  return (
    <section className="relative h-fit bg-gradient-to-br from-[#1C2056] to-[#2d317a] py-24 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-start mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Start Your Career Journey in{" "}
            <span className="text-yellow-400">4 Simple Steps</span>
          </h1>
          <p className="max-w-2xl text-blue-200/90 text-lg md:text-xl font-light leading-relaxed">
            Your dream job is just four steps away. Let us guide you through the
            process of landing your perfect role.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-sky-400/50 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-12 h-12 border-blue-500 border-2 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 p-4 bg-sky-400/10 rounded-xl inline-block">
                  {React.cloneElement(step.icon, {
                    className: "w-10 h-10 text-sky-400",
                  })}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">
                    {step.title}
                  </h2>
                  <p className="text-blue-200/80 leading-relaxed">
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
