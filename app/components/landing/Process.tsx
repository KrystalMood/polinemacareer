import React from "react";
import { JOB_STEPS } from "../../constants/process";

export default function Process() {
  return (
    <section className="relative h-fit bg-[#ff9b71]/90 py-16 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#ff9b71]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#ffb699]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-start mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[#2d3748]">
            Start Your Career Journey in{" "}
            <span className="text-[#ffffff] [text-shadow:_2px_2px_0_rgb(255,155,113),_-2px_-2px_0_rgb(255,155,113),_2px_-2px_0_rgb(255,155,113),_-2px_2px_0_rgb(255,155,113)]">
              4 Simple Steps
            </span>
          </h1>
          <p className="max-w-xl text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Your dream job is just four steps away. Let us guide you through the
            process of landing your perfect role.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOB_STEPS.map((step, index) => (
            <div key={step.title} className="relative h-full">
              {/* Connection Line */}
              {index < JOB_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-[#ff9b71]/30 to-transparent transform -translate-y-1/2 z-0" />
              )}

              {/* Card */}
              <div
                className="relative z-10 bg-white h-full shadow-lg rounded-2xl p-6 border border-[#ff9b71]/10 
                hover:border-[#ff9b71]/30 hover:shadow-xl hover:shadow-[#ff9b71]/20 hover:-translate-y-1 
                transition-all duration-300 group"
              >
                {/* Step Number */}
                <div
                  className="absolute -top-2 -right-2 w-10 h-10 bg-[#ff9b71] border-white border-2 
                  rounded-full flex items-center justify-center text-white font-semibold shadow-lg
                  group-hover:bg-[#ffb699] group-hover:scale-110 transition-all duration-300"
                >
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className="mb-4 p-3 bg-[#fff1eb] rounded-xl inline-block
                  group-hover:bg-[#ff9b71]/10 transition-all duration-300"
                >
                  {React.cloneElement(step.icon, {
                    className:
                      "w-8 h-8 text-[#ff9b71] group-hover:scale-110 transition-all duration-300",
                  })}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h2
                    className="text-xl font-semibold text-[#2d3748] 
                    group-hover:text-[#ff9b71] transition-all duration-300"
                  >
                    {step.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
