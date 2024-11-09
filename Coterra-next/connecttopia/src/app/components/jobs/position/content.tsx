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
} from "lucide-react";

export default function PositionContent() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Image
              src={templateImage}
              alt="Company Logo"
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  Senior Frontend Developer
                </h1>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  Full Time
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  <span>TechCorp Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  <span>$120K - $150K / Year</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <button className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Apply Now
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Bookmark className="w-5 h-5" />
                Save Job
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Job Description</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are looking for a Senior Frontend Developer to join our team...
              </p>
              
              <h3 className="text-xl font-bold mb-4">Requirements</h3>
              <ul className="space-y-3">
                {[
                  "5+ years of experience with React.js",
                  "Strong understanding of TypeScript",
                  "Experience with Next.js",
                  "Excellent problem-solving skills",
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold mb-6">Job Overview</h2>
              <div className="space-y-4">
                {[
                  { icon: Calendar, label: "Posted Date", value: "20 Mar 2024" },
                  { icon: Clock, label: "Deadline", value: "20 Apr 2024" },
                  { icon: Users, label: "Vacancy", value: "3 Positions" },
                  { icon: GraduationCap, label: "Education", value: "Bachelor's Degree" },
                  { icon: Briefcase, label: "Experience", value: "5+ Years" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <item.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-gray-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 