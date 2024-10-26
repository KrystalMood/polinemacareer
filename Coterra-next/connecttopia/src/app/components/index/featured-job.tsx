import { ArrowRight, BookmarkCheck, Bookmark } from "lucide-react";
import { Clock, MapPin, DollarSign } from "lucide-react";
import templateImage from "@/public/templatePost.png";
import Image from "next/image";
import { useState } from "react";

interface Job {
  title: string;
  image: string;
  type: string;
  location: string;
  payment: string;
  deadline: string;
  bookmarked: boolean;
}

const jobs: Job[] = [
  {
    title: "Senior UX Designer",
    image: "/api/placeholder/48/48",
    type: "Contract Base",
    location: "Australia",
    payment: "$30K-$35K",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
  {
    title: "Software Engineer",
    image: "/api/placeholder/48/48",
    type: "Full Time",
    location: "China",
    payment: "$50K-$60K",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
  {
    title: "Junior Graphic Designer",
    image: "/api/placeholder/48/48",
    type: "Full Time",
    location: "Canada",
    payment: "$50K-$70K",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
  {
    title: "Product Designer",
    image: "/api/placeholder/48/48",
    type: "Full Time",
    location: "United States",
    payment: "$35K-$40K",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
  {
    title: "Marketing Officer",
    image: "/api/placeholder/48/48",
    type: "Internship",
    location: "Germany",
    payment: "$50K-$90K",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
  {
    title: "Interaction Designer",
    image: "/api/placeholder/48/48",
    type: "Full Time",
    location: "France",
    payment: "$5K-$10K",
    deadline: "4 Days Remaining",
    bookmarked: false,
  },
];

export default function IndexFeatures() {
  const [job, setJob] = useState<Job[]>(jobs);

  const handleBookmarked = (index: number) => {
    const updatedJobs = job.map((job, i) =>
      i === index ? { ...job, bookmarked: !job.bookmarked } : job
    );
    setJob(updatedJobs);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Featured Jobs
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              Discover your next career opportunity
            </p>
          </div>
          <button className="group inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors">
            View All Jobs
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-150" />
          </button>
        </div>

        <div className="grid gap-6">
          {job.map((jobItem, index) => (
            <div
              key={jobItem.title}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-sky-100 hover:shadow-lg hover:shadow-sky-50/50 transition-all duration-150"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-4">
                  <Image
                    src={templateImage}
                    alt={jobItem.title}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-100 shadow-sm"
                  />
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h2 className="text-xl font-semibold text-gray-900">
                        {jobItem.title}
                      </h2>
                      <span className="inline-flex px-3 py-1 text-sm font-medium text-sky-700 bg-sky-50 rounded-full w-fit">
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
                    className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
                  >
                    {jobItem.bookmarked ? (
                      <Bookmark size={20} fill="yellow" stroke="yellow" />
                    ) : (
                      <Bookmark size={20} />
                    )}
                  </button>
                  <button className="inline-flex items-center px-6 py-2.5 bg-sky-50 text-sky-600 font-semibold rounded-lg group-hover:bg-yellow-400 group-hover:text-white transition-all duration-150">
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
