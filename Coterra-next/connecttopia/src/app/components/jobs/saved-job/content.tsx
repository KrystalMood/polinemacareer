import React from "react";
import Image from "next/image";
import templateImage from "@/public/peakpx.jpg";
import { MapPin, DollarSign } from "lucide-react";

export default function PositionContent() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex gap-6 hover:shadow-lg transition-shadow">
      {/* Company Logo */}
      <Image
        src={templateImage}
        alt="Company Logo"
        className="w-20 h-20 rounded-lg object-cover"
      />

      {/* Job Info */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-900">
          Senior Frontend Developer
        </h2>
        <p className="text-gray-600 text-sm mb-2">TechCorp Solutions</p>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            <span>$120K - $150K / Year</span>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md font-semibold hover:bg-yellow-500 transition"
            onClick={() => (window.location.href = "main/jobs/apply")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
