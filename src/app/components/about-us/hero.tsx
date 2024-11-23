import { Building2, Users, Sparkles, Trophy } from "lucide-react";
import React from "react";
import Image from "next/image";
import heroImg from "@/public/aboutus.jpg";

const STATS = [
  { icon: Users, label: "Active Users", value: "10K+" },
  { icon: Building2, label: "Companies", value: "500+" },
  { icon: Trophy, label: "Success Stories", value: "2K+" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#fffaf8] overflow-hidden">
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      <div className="mx-auto w-[90vw] max-w-7xl min-h-screen py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10">
              <Sparkles className="w-4 h-4 text-[#ff9b71]" />
              <span className="text-sm font-medium text-[#ff9b71]">
                About PolinemaCareer
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Empowering <span className="text-[#ff9b71]">Career Growth</span>{" "}
              Through Innovation
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              We're on a mission to revolutionize how students and companies
              connect, creating meaningful career opportunities and fostering
              professional growth.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {STATS.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#ff9b71]/10 rounded-lg">
                      <stat.icon className="w-6 h-6 text-[#ff9b71]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <span className="absolute inset-0 bg-[#ff9b71]/10 rounded-2xl blur-3xl" />
            <span className="absolute top-1/2 -translate-y-1/2 right-10 w-[70%] h-[130%] bg-[#de7649] rounded-2xl" />
            <Image
              src={heroImg}
              alt="About Us Hero"
              className="rounded-2xl shadow-lg border-4 border-[#ff9b71] relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
