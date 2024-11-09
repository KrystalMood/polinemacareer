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
} from "lucide-react";
import { useHeroAnimation } from "@/app/libs/animations/index/hero";

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
  const {
    titleRef,
    badgeRef,
    descriptionRef,
    searchRef,
    buttonRef,
    suggestionsRef,
    imageRef,
    backgroundBlobRef1,
    backgroundBlobRef2,
  } = useHeroAnimation();

  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div
        ref={backgroundBlobRef1}
        className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
      />
      <div
        ref={backgroundBlobRef2}
        className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto h-[110%] w-[90vw] flex items-center justify-between px-4 md:gap-4">
        <div className="ml-20 max-w-xl space-y-8 text-black">
          <div ref={titleRef} className="flex items-center gap-4">
            <h1 className="text-5xl font-bold text-yellow-400 tracking-tight">
              PolinemaCarrier
            </h1>
          </div>

          <span
            ref={badgeRef}
            className="inline-flex px-3 py-1 text-sm bg-blue-500/20 text-gray-500 rounded-full"
          >
            #1 Job Search Platform
          </span>

          <div className="space-y-8">
            <p
              ref={descriptionRef}
              className="text-base font-normal leading-relaxed text-black"
            >
              Experience a seamless hiring process and an enhanced job search.
              Our platform connects talent with opportunities, helping you
              unlock your potential for a successful career journey!
            </p>

            <div className="space-y-4">
              <div ref={searchRef} className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search job titles..."
                  className="h-12 w-full bg-white rounded-lg pl-10 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>

              <button
                ref={buttonRef}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Find Job
              </button>

              <div
                ref={suggestionsRef}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="text-sm font-medium text-gray-800">
                  Suggestions:
                </span>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_JOBS.map((job) => (
                    <button
                      key={job}
                      className="px-3 py-1 rounded-full bg-gray-300 hover:bg-white/20 text-xs text-gray-600 transition-colors"
                    >
                      {job}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={imageRef} className="hidden lg:block relative mb-10">
          <div className="relative scale-[0.75] overflow-hidden rounded-lg">
            <Image
              src={templateImage}
              alt="Platform preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
