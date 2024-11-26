import { Building2, Users, Sparkles, Trophy } from "lucide-react";
import React from "react";

const STATS = [
  { icon: Users, label: "Active Users", value: "10K+" },
  { icon: Building2, label: "Companies", value: "500+" },
  { icon: Trophy, label: "Success Stories", value: "2K+" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fffaf8]">
      <div className="absolute -left-96 top-20 h-[500px] w-[500px] rounded-full bg-[#ff9b71]/10 opacity-80 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-[500px] w-[500px] rounded-full bg-[#ff9b71]/5 blur-3xl" />

      <div className="mx-auto min-h-screen w-[90vw] max-w-7xl py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ff9b71]/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#ff9b71]" />
              <span className="text-sm font-medium text-[#ff9b71]">
                About PolinemaCareer
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl">
              Empowering <span className="text-[#ff9b71]">Career Growth</span>{" "}
              Through Innovation
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              Kami berkomitmen untuk merevolusi cara mahasiswa dan perusahaan
              terhubung, menciptakan peluang karir yang bermakna dan mendorong
              pertumbuhan profesional.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-[#ff9b71]/10 p-3 transition-all duration-300 group-hover:bg-[#ff9b71]/20">
                      <stat.icon className="h-6 w-6 text-[#ff9b71] transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#ff9b71]">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden pl-20 lg:block">
            <span className="absolute inset-0 rounded-2xl bg-[#ff9b71]/10 blur-3xl" />
            <span className="absolute right-2 top-1/2 h-[130%] w-[70%] -translate-y-1/2 rounded-2xl bg-[#de7649]" />
            <img
              src="/public/temp.jpg"
              alt="About Us Hero"
              className="relative z-10 h-[500px] w-[500px] rounded-2xl border-4 border-[#ff9b71] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
