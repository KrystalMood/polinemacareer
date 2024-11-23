
import React from "react";
import {
  Search,
  MapPin,
  Filter,
  DollarSign,
  Clock,
  Bookmark,
} from "lucide-react";
import Image from "next/image";
import templateImage from "@/public/peakpx.jpg";
import jobs from "@/app/data/index/featured-jobs";

export default function AllJobsContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Judul Utama */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold text-[#0d5c91]">
            Post a Job
          </h1>
          <p className="text-lg text-gray-600">
            Create a job posting in just a few steps and connect with the best talent for your needs!
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8 mt-10">
          {/* Row 1: Company Name & Contact Name */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none"
                placeholder="Enter company name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Contact Name
              </label>
              <input
                type="text"
                className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Row 3: Job Title & Category */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Job Title
              </label>
              <input
                type="text"
                className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none"
                placeholder="Enter job title"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Category
              </label>
              <select className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none">
                <option>Select category...</option>
              </select>
            </div>
          </div>

          {/* Row 4: Location & Budget */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none"
                placeholder="Enter location"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Budget
              </label>
              <input
                type="text"
                className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none"
                placeholder="Enter budget"
              />
            </div>
          </div>

          {/* Row 5: Start Date & Skills Required */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                When should the freelancer start this project?
              </label>
              <input
                type="date"
                className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Skills Required
              </label>
              <select className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none">
                <option>Select skills...</option>
              </select>
            </div>
          </div>

          {/* Row 6: Experience Level & Project Type */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Experience Level
              </label>
              <select className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none">
                <option>Select experience level...</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-[#01020f] text-base font-semibold mb-2">
                Project Type
              </label>
              <select className="w-full h-11 bg-white rounded-lg border border-neutral-200 px-4 focus:outline-none">
                <option>Select project type...</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-[#01020f] text-base font-semibold mb-2">
              Project Description
            </label>
            <textarea
              className="w-full h-44 bg-white rounded-lg border border-neutral-200 px-4 py-2 focus:outline-none"
              placeholder="Write a brief description..."
            />
          </div>

          {/* Upload Documents */}
          <div>
            <label className="block text-[#01020f] text-base font-semibold mb-2">
              Upload any relevant documents, such as project briefs or design references
            </label>
            <div className="h-24 bg-white border-2 border-[#0d5c91] rounded-lg flex flex-col justify-center items-center">
              <p className="text-[#01020f] text-base">Drag your file(s) or <strong>browse</strong></p>
              <p className="text-[#01020f] text-sm">Max 10 MB files are allowed</p>
            </div>
          </div>

          {/* Terms & Submit */}
          <div className="flex items-center gap-4">
            <input type="checkbox" className="w-5 h-5 border border-neutral-200 rounded-md" />
            <p className="text-[#01020f] text-sm">
              By submitting this form you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
          <button className="w-32 h-12 bg-[#0d5c91] text-white rounded-lg font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}


