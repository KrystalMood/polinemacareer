import React from "react";
import {
  ArrowRight,
  Bookmark,
  Briefcase,
  Clock,
  MapPin,
  Wallet,
} from "lucide-react";

const jobListings = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $160,000",
    type: "Full-time",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
  {
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
  {
    title: "Data Scientist",
    company: "DataDriven Co.",
    location: "Remote",
    salary: "$100,000 - $140,000",
    type: "Full-time",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
];

const FeaturedJobs = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-4 py-0 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Featured Jobs
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              Discover your next career opportunity
            </p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-[#FFE4D6] p-6 hover:border-[#FFBB9C] hover:shadow-lg hover:shadow-[#FFE4D6]/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {/* Left Section - Company Info */}
                <div className="flex items-start sm:items-center gap-4">
                  <img
                    src={"/temp.jpg"}
                    alt={job.company}
                    className="w-16 h-16 rounded-lg object-cover border border-[#FFE4D6] shadow-sm"
                  />
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h2 className="text-xl font-semibold text-gray-900">
                        {job.company}
                      </h2>
                      <span className="inline-flex px-3 py-1 text-sm font-medium text-[#E05151] bg-[#f1c2c2] rounded-full w-fit">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="inline-flex items-center">
                        <MapPin size={16} className="mr-1.5 text-[#E05151]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center">
                        <Wallet size={16} className="mr-1.5 text-[#E05151]" />
                        {job.salary}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock size={16} className="mr-1.5 text-[#E05151]" />
                        {job.deadline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-3 sm:ml-auto">
                  <button className="inline-flex items-center justify-center p-2 text-[#E05151] hover:text-[#E05151] rounded-lg hover:bg-[#f1c2c2] transition-colors">
                    <Bookmark size={20} />
                  </button>
                  <button
                    className="inline-flex items-center px-6 py-2.5 bg-[#f1c2c2] text-[#E05151] font-semibold rounded-lg hover:bg-yellow-300 hover:text-white transition-all duration-150"
                    onClick={() => (window.location.href = "main/jobs/apply")}
                  >
                    Apply Now
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
