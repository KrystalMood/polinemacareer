import { ArrowRight, BookmarkCheck, Bookmark } from "lucide-react";
import { Clock, MapPin, DollarSign } from "lucide-react";
import { useState } from "react";
import jobs from "~/constants/featuredJobs";

export default function FeaturedJobs() {

  const [featuredJobs, setFeaturedJobs] = useState(jobs);

  const handleBookmarked = (index: number) => {
    setFeaturedJobs(prevJobs => 
      prevJobs.map((job, i) => 
        i === index ? { ...job, bookmarked: !job.bookmarked } : job
      )
    );
  };

  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-[#fffaf8] to-white px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-2 md:py-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Jobs
          </h1>
          <p className="text-lg text-gray-600">
            Discover your next career opportunity with top companies
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 gap-8">
          {featuredJobs.map((jobItem: any, index: number) => (
            <div
              key={jobItem.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Job Details */}
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="relative">
                    <img
                      src={"/public/temp.jpg"}
                      alt={jobItem.title}
                      className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-lg transition-all duration-300"
                    />
                    <div className="absolute -top-2 -right-2 bg-[#ff9b71]/10 rounded-full p-1.5">
                      <button
                        onClick={() => handleBookmarked(index)}
                        className="text-[#ff9b71] hover:scale-110 transition-transform duration-300 group"
                      >
                        {jobItem.bookmarked ? (
                          <Bookmark size={18} fill="#ff9b71" stroke="#ff9b71" />
                        ) : (
                          <Bookmark size={18} />
                        )}
                      </button>
                    </div>
                  </div>
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
