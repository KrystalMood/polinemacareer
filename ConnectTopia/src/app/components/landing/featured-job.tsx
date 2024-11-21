import { ArrowRight, BookmarkCheck, Bookmark } from "lucide-react";
import { Clock, MapPin, DollarSign } from "lucide-react";
import templateImage from "@/public/peakpx.jpg";
import Image from "next/image";
import useFeaturedJob from "@/app/libs/hooks/index/featured-job";

export default function FeaturedJobs() {
  const { job, handleBookmarked } = useFeaturedJob();

  return (
    <div className="min-h-[50vh] bg-[#fffaf8]">
      <div className="mx-auto max-w-7xl py-16">
        <div className="mb-10 mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-0">
              Featured Jobs
            </h1>
            <p className="text-lg text-gray-600">
              Discover your next career opportunity
            </p>
          </div>
          <button className="group flex items-center text-md font-semibold text-[#ff9b71] hover:text-[#ffb699] transition-colors">
            View All Jobs
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-8 grid gap-6">
          {job.map((jobItem, index) => (
            <div
              key={jobItem.title}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-4">
                  <Image
                    src={templateImage}
                    alt={jobItem.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h2 className="text-lg font-semibold text-slate-900 group-hover:text-[#ff9b71] transition-colors">
                        {jobItem.title}
                      </h2>
                      <span className="inline-flex px-3 py-1 text-sm font-medium text-[#ff9b71] bg-[#ff9b71]/10 rounded-full w-fit">
                        {jobItem.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="inline-flex items-center">
                        <MapPin size={16} className="mr-1.5 text-gray-400" />
                        {jobItem.location}
                      </span>
                      <span className="inline-flex items-center">
                        <DollarSign
                          size={16}
                          className="mr-1.5 text-gray-400"
                        />
                        {jobItem.payment}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock size={16} className="mr-1.5 text-gray-400" />
                        {jobItem.deadline}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:ml-auto">
                  <button
                    onClick={() => handleBookmarked(index)}
                    className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-[#ff9b71] rounded-lg hover:bg-[#ff9b71]/10 transition-colors"
                  >
                    {jobItem.bookmarked ? (
                      <Bookmark size={20} fill="#ff9b71" stroke="#ff9b71" />
                    ) : (
                      <Bookmark size={20} />
                    )}
                  </button>
                  <button
                    className="inline-flex items-center px-6 py-2.5 text-sm font-semibold bg-[#ff9b71]/10 text-[#ff9b71] rounded-lg group-hover:bg-[#ff9b71] group-hover:text-white transition-all duration-200"
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
}
