import React from "react";
import Image from "next/image";
import templateImage from "@/public/peakpx.jpg";
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Calendar,
  Building,
  Users,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Bookmark,
  Star,
} from "lucide-react";

export default function PositionContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-20">
        {/* Header Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Company Logo */}
            <div className="relative">
              <Image
                src={templateImage}
                alt="Company Logo"
                className="w-24 h-24 rounded-xl object-cover shadow-md group-hover:shadow-lg transition-all duration-300"
              />
              {/* Featured Badge */}
              <div className="absolute -top-2 -right-2 bg-[#ff9b71]/10 rounded-full p-1.5">
                <Star size={18} className="text-[#ff9b71] fill-[#ff9b71]" />
              </div>
            </div>

            {/* Job Details */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900 group-hover:text-[#ff9b71] transition-colors">
                  Senior Frontend Developer
                </h1>
                <span className="px-3 py-1 text-sm font-medium text-[#ff9b71] bg-[#ff9b71]/10 rounded-full">
                  Full Time
                </span>
                <span className="px-3 py-1 text-sm font-medium text-[#ff9b71] bg-[#ff9b71]/10 rounded-full">
                  Featured
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#ff9b71]" />
                  <span>TechCorp Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#ff9b71]" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#ff9b71]" />
                  <span>$120K - $150K / Year</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <button
                className="inline-flex items-center px-8 py-3 bg-[#ff9b71] text-white font-semibold rounded-xl 
                hover:bg-[#ff8c5c] transition-all duration-200"
                onClick={() => (window.location.href = "main/jobs/apply")}
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1"
                />
              </button>
              <button
                className="inline-flex items-center justify-center px-8 py-3 bg-[#ff9b71]/10 
                text-[#ff9b71] font-semibold rounded-xl hover:bg-[#ff9b71] 
                hover:text-white transition-all duration-200"
              >
                <Bookmark className="w-5 h-5 mr-2" />
                Save Job
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Job Description
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are looking for a Senior Frontend Developer to join our team
                and help us build exceptional user experiences. You'll be
                working with cutting-edge technologies and collaborating with a
                talented team of developers.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Requirements
              </h3>
              <ul className="space-y-4">
                {[
                  "5+ years of experience with React.js",
                  "Strong understanding of TypeScript",
                  "Experience with Next.js",
                  "Excellent problem-solving skills",
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-[#ff9b71]/10 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-[#ff9b71]" />
                    </div>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Job Overview
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Calendar,
                    label: "Posted Date",
                    value: "20 Mar 2024",
                  },
                  { icon: Clock, label: "Deadline", value: "20 Apr 2024" },
                  { icon: Users, label: "Vacancy", value: "3 Positions" },
                  {
                    icon: GraduationCap,
                    label: "Education",
                    value: "Bachelor's Degree",
                  },
                  { icon: Briefcase, label: "Experience", value: "5+ Years" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-[#ff9b71]/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-[#ff9b71]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-gray-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Company Info Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Company Info
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  TechCorp Solutions is a leading technology company
                  specializing in...
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-[#ff9b71]/5 rounded-xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[#ff9b71]">
                      <Briefcase size={16} />
                      <span className="font-semibold">50+</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Open Positions</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[#ff9b71]">
                      <Users size={16} />
                      <span className="font-semibold">500+</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Employees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
