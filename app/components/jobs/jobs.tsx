import React from "react";
import {
  ArrowRight,
  Bookmark,
  Briefcase,
  Building2,
  Clock,
  DollarSign,
  Filter,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $160,000",
    type: "Full-time",
    deadline: "4 Days Remaining",
    bookmarked: false,
    description: "Join our team to build next-generation web applications...",
    logo: "/public/temp.jpg",
  },
];

const categories = [
  "All Jobs",
  "Remote",
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
];

export default function JobsContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-24">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10 mb-4">
                <Sparkles className="w-4 h-4 text-[#ff9b71]" />
                <span className="text-sm font-medium text-[#ff9b71]">
                  Thousands of jobs available
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Find Your Dream Job
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                <strong className="text-[#ff9b71]">2,400</strong> jobs available
              </span>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, keywords, companies"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff9b71] 
                  focus:ring-2 focus:ring-[#ff9b71]/20 outline-none transition-all"
                />
              </div>

              {/* Location Input */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff9b71] 
                  focus:ring-2 focus:ring-[#ff9b71]/20 outline-none transition-all"
                />
              </div>

              {/* Filter Button */}
              <button className="inline-flex items-center px-6 py-3 bg-[#ff9b71]/10 text-[#ff9b71] 
                font-semibold rounded-xl hover:bg-[#ff9b71] hover:text-white transition-all duration-200">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>

              {/* Search Button */}
              <button className="inline-flex items-center px-8 py-3 bg-[#ff9b71] text-white 
                font-semibold rounded-xl hover:bg-[#ff8c5c] transition-all duration-200">
                Search Jobs
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full 
                border border-gray-200 hover:border-[#ff9b71] hover:text-[#ff9b71] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
              transition-all duration-300 border border-[#ff9b71]/10 hover:border-[#ff9b71]/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {/* Company Info */}
                <div className="flex items-start sm:items-center gap-4">
                  <div className="relative">
                    <img
                      src={"/public/temp.jpg"}
                      alt={job.company}
                      className="w-16 h-16 rounded-xl object-cover shadow-md 
                      group-hover:shadow-lg transition-all duration-300"
                    />
                    <div className="absolute -top-2 -right-2 bg-[#ff9b71]/10 rounded-full p-1.5">
                      <button className="text-[#ff9b71] hover:scale-110 transition-transform duration-300">
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff9b71] transition-colors">
                        {job.title}
                      </h2>
                      <span className="inline-flex px-3 py-1 text-sm font-medium text-[#ff9b71] 
                        bg-[#ff9b71]/10 rounded-full w-fit">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="inline-flex items-center">
                        <Building2 size={16} className="mr-1.5 text-[#ff9b71]" />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center">
                        <MapPin size={16} className="mr-1.5 text-[#ff9b71]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center">
                        <DollarSign size={16} className="mr-1.5 text-[#ff9b71]" />
                        {job.salary}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock size={16} className="mr-1.5 text-[#ff9b71]" />
                        {job.deadline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 sm:ml-auto">
                  <button
                    onClick={() => window.location.href = `/main/jobs/position/${job.id}`}
                    className="inline-flex items-center px-6 py-2.5 bg-[#ff9b71]/10 text-[#ff9b71] 
                    font-semibold rounded-lg hover:bg-[#ff9b71] hover:text-white transition-all duration-200"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-3 bg-[#ff9b71]/10 
            text-[#ff9b71] font-semibold rounded-xl hover:bg-[#ff9b71] 
            hover:text-white transition-all duration-200">
            Load More Jobs
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}