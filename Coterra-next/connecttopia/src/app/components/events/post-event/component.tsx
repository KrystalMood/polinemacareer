
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

export default function PostEventContent() {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#0d5c91]">Post an Event</h1>
            <p className="text-lg text-gray-600">
              Share your upcoming event details to reach your audience and maximize participation!
            </p>
          </div>
  
          {/* Event Form */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-10">
            <div className="space-y-8">
              {/* Event Title */}
              <div>
                <label className="block text-[#01020f] text-lg font-semibold mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  className="w-full h-12 bg-gray-50 rounded-lg border border-neutral-300 px-4 focus:outline-none"
                  placeholder="Enter the title of your event"
                />
              </div>
  
              {/* Date, Time, and Location */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[#01020f] text-lg font-semibold mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full h-12 bg-gray-50 rounded-lg border border-neutral-300 px-4 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#01020f] text-lg font-semibold mb-2">
                    Event Time
                  </label>
                  <input
                    type="time"
                    className="w-full h-12 bg-gray-50 rounded-lg border border-neutral-300 px-4 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#01020f] text-lg font-semibold mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full h-12 bg-gray-50 rounded-lg border border-neutral-300 px-4 focus:outline-none"
                    placeholder="Enter event location"
                  />
                </div>
              </div>
  
              {/* About Event */}
              <div>
                <label className="block text-[#01020f] text-lg font-semibold mb-2">
                  About Event
                </label>
                <textarea
                  className="w-full h-32 bg-gray-50 rounded-lg border border-neutral-300 px-4 py-2 focus:outline-none"
                  placeholder="Write a brief description of your event..."
                />
              </div>
  
              {/* Event Schedule */}
              <div>
                <label className="block text-[#01020f] text-lg font-semibold mb-2">
                  Event Schedule
                </label>
                <textarea
                  className="w-full h-32 bg-gray-50 rounded-lg border border-neutral-300 px-4 py-2 focus:outline-none"
                  placeholder="Add event schedule details (e.g., timings, activities, etc.)"
                />
              </div>
  
              {/* Organizer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#01020f] text-lg font-semibold mb-2">
                    Organizer Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-12 bg-gray-50 rounded-lg border border-neutral-300 px-4 focus:outline-none"
                    placeholder="Enter organizer name"
                  />
                </div>
                <div>
                  <label className="block text-[#01020f] text-lg font-semibold mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full h-12 bg-gray-50 rounded-lg border border-neutral-300 px-4 focus:outline-none"
                    placeholder="Enter contact email"
                  />
                </div>
              </div>
  
              {/* Upload Supporting Documents */}
            <div>
                <label className="block text-[#01020f] text-lg font-semibold mb-2">
                    Supporting Documents
                </label>
                <p className="text-sm text-gray-500 mb-2">
                    Upload any relevant documents such as <strong>pamphlets, event schedules, or brochures</strong>.
                </p>
                <div className="h-24 bg-gray-50 border-2 border-dashed border-neutral-300 rounded-lg flex flex-col justify-center items-center">
                    <p className="text-gray-500">
                    Drag your files here or <strong className="text-[#0d5c91]">browse</strong>
                    </p>
                    <p className="text-sm text-gray-400">Max file size: 10 MB</p>
                </div>
            </div>

  
              {/* Submit Button */}
              <div className="text-center">
                <button className="w-40 h-12 bg-[#0d5c91] text-white rounded-lg font-medium">
                  Submit Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  