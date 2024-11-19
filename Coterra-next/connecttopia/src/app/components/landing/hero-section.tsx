import React from "react";
import templateImage from "@/public/index/work.png";
import Image from "next/image";
import {
  Search,
  Briefcase,
  Users,
  Building2,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const SUGGESTED_JOBS = [
  "Management",
  "Sales",
  "Digital Marketing",
  "Programming",
  "Design",
];

const STATS = [
  { icon: Users, label: "Active Users", value: "10K+" },
  { icon: Building2, label: "Companies", value: "500+" },
  { icon: Trophy, label: "Success Stories", value: "2K+" },
];

export default function IndexHero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-[6.5rem]">
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-80" />
      {/* <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl animate-pulse" /> */}

      {/* Main content container */}
      <div className="container mx-auto min-h-screen w-[90vw] flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:gap-8">
        {/* Left content section */}
        <div className="lg:ml-20 max-w-2xl space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">
              <Sparkles className="w-4 h-4" />
              Your Career Journey Starts Here
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Find Your Dream Job with{" "}
              <span className="text-yellow-500">PolinemaCareer</span>
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-lg font-normal leading-relaxed text-gray-600">
              Experience a seamless hiring process and an enhanced job search.
              Our platform connects talent with opportunities, helping you
              unlock your potential for a successful career journey!
            </p>

            <div className="space-y-6">
              <div className="relative group">
                {/* <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search job titles..."
                  className="h-14 w-full bg-gray-100 rounded-2xl pl-12 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-200 hover:border-blue-500/50"
                /> */}
              </div>

              <button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-2" onClick={() => (window.location.href = "main/jobs/all-jobs")}>
                Find Job
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-600">
                  Popular Searches:
                </span>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_JOBS.map((job) => (
                    <button
                      key={job}
                      className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 transition-all hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                    >
                      {job}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:block relative mb-10 lg:mb-20">
          <div className="relative scale-90 overflow-hidden rounded-2xl border-8 border-gray-100 shadow-2xl">
            <Image
              src={templateImage}
              alt="Platform preview"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
