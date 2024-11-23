import { Shield, Target, Users, Trophy, Sparkles } from "lucide-react";
import React from "react";

const MISSION_VALUES = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity",
    description:
      "Delivering managed programs across over the tedious tasks of risk with utmost integrity.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence",
    description:
      "We aim for excellence in every project, ensuring the best results through innovation and precision.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Partnerships",
    description:
      "Building lasting partnerships with our clients to create sustainable growth and success.",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Innovation",
    description:
      "Continuously pushing boundaries to create better solutions for our clients and partners.",
  },
];

export default function OurMission() {
  return (
    <section className="relative bg-[#ff9b71]/90 py-16 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#ff9b71]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#ffb699]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Our Core Values
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-white">
            Building Tomorrow's <span className="text-[#2d3748] ">Careers</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            We are passionate about delivering excellence and building lasting
            partnerships to create sustainable growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_VALUES.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {index < MISSION_VALUES.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-[#ff9b71]/30 to-transparent transform -translate-y-1/2 z-0" />
              )}

              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#ff9b71] rounded-full flex items-center justify-center text-white text-sm font-semibold group-hover:bg-[#ffb699] group-hover:scale-110 transition-all duration-300">
                {index + 1}
              </div>

              <div className="mb-4 p-3 bg-[#fff1eb] rounded-xl inline-block group-hover:bg-[#ff9b71]/10 transition-all duration-300">
                {React.cloneElement(value.icon, {
                  className:
                    "text-[#ff9b71] group-hover:scale-110 transition-all duration-300",
                })}
              </div>

              <h3 className="text-xl font-semibold text-[#2d3748] group-hover:text-[#ff9b71] transition-all duration-300 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
