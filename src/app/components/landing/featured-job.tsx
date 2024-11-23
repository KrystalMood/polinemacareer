import { ArrowRight, BookmarkCheck, Bookmark } from "lucide-react";
import { Clock, MapPin, DollarSign } from "lucide-react";
import templateImage from "@/public/peakpx.jpg";
import Image from "next/image";
import useFeaturedJob from "@/app/libs/hooks/index/featured-job";

export default function FeaturedJobs() {
  const { job, handleBookmarked } = useFeaturedJob();

  return (
    <div className="min-h-[50vh] bg-[#fffaf8] px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-8 md:mb-10 flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Featured Jobs
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Discover your next career opportunity
            </p>
          </div>
          <button className="mx-auto md:mx-0 group flex items-center text-sm md:text-md font-semibold text-[#ff9b71] hover:text-[#ffb699] transition-colors">
            View All Jobs
            <ArrowRight className="ml-2 size-4 md:size-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {job.map((jobItem, index) => (
            <div
              key={jobItem.title}
              className="group bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200"
            >
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center justify-between gap-4">
                {/* Job Details */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <Image
                    src={templateImage}
                    alt={jobItem.title}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover"
                  />
                  <div className="text-center md:text-left space-y-2">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <h2 className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-[#ff9b71] transition-colors">
                        {jobItem.title}
                      </h2>
                      <span className="text-xs md:text-sm inline-flex px-2 py-1 font-medium text-[#ff9b71] bg-[#ff9b71]/10 rounded-full">
                        {jobItem.type}
                      </span>
                    </div>
                    
                    {/* Job Meta Information */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                      <span className="inline-flex items-center">
                        <MapPin size={14} className="mr-1 text-gray-400" />
                        {jobItem.location}
                      </span>
                      <span className="inline-flex items-center">
                        <DollarSign size={14} className="mr-1 text-gray-400" />
                        {jobItem.payment}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock size={14} className="mr-1 text-gray-400" />
                        {jobItem.deadline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center md:justify-end items-center gap-2 md:gap-3">
                  <button
                    onClick={() => handleBookmarked(index)}
                    className="p-2 text-gray-400 hover:text-[#ff9b71] rounded-lg hover:bg-[#ff9b71]/10 transition-colors"
                  >
                    {jobItem.bookmarked ? (
                      <Bookmark size={18} fill="#ff9b71" stroke="#ff9b71" />
                    ) : (
                      <Bookmark size={18} />
                    )}
                  </button>
                  <button
                    className="inline-flex items-center px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold bg-[#ff9b71]/10 text-[#ff9b71] rounded-lg group-hover:bg-[#ff9b71] group-hover:text-white transition-all duration-200"
                    onClick={() => (window.location.href = "main/jobs/apply")}
                  >
                    Apply Now
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
