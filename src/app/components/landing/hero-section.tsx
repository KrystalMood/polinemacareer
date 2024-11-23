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
  Users2,
  MapPin,
} from "lucide-react";

const SUGGESTED_JOBS = [
  "Management",
  "Sales",
  "Digital Marketing",
  "Programming",
  "Data Science",
  "UI/UX Design",
  "Finance",
  "Human Resources",
  "Engineering",
];

const STATS = [
  { icon: Users, label: "Active Users", value: "10K+" },
  { icon: Building2, label: "Companies", value: "500+" },
  { icon: Trophy, label: "Success Stories", value: "2K+" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#fffaf8] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="mx-auto w-[90vw] max-w-7xl min-h-screen py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10">
              <Sparkles className="w-4 h-4 text-[#ff9b71]" />
              <span className="text-sm font-medium text-[#ff9b71]">
                Your Career Journey Starts Here
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Find Your Dream Job with{" "}
              <span className="text-[#ff9b71]">PolinemaCareer</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Discover thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              applications from start to finish.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
              onClick={() => window.location.href = "/auth/login"}
              className="px-8 py-3 bg-[#ff9b71] text-white font-semibold rounded-xl hover:bg-[#ff8c5c] transition-colors duration-200 flex items-center gap-2">
                Find a Job
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Popular Categories */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 pt-2">
                Popular Categories:
              </span>
              {SUGGESTED_JOBS.map((item) => (
                <button
                  key={item}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-200 hover:border-[#ff9b71] hover:text-[#ff9b71] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="ml-10 relative hidden lg:block">
            <div className="max-w-[500px] mx-auto">
              <Image
                src={templateImage}
                alt="Hero Image"
                className="rounded-2xl shadow-lg"
                priority
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute -left-12 top-1/4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#ff9b71]/10 rounded-lg">
                  <Users2 className="w-6 h-6 text-[#ff9b71]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">10k+</p>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 bottom-1/4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#ff9b71]/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-[#ff9b71]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">5k+</p>
                  <p className="text-sm text-gray-600">Jobs Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
