import { ArrowRight, MapPin, Users, Briefcase, Star } from "lucide-react";
import templateImage from "@/public/peakpx.jpg";
import Image from "next/image";
import companies from "@/app/data/index/top-companies";
import { useRouter } from "next/navigation";

export default function Companies() {
  const router = useRouter();

  const handleOpenPosition = (id: number) => {
    router.push(`/main/jobs/position/${id}`);
  };

  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-[#fffaf8] to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Top Companies Hiring
          </h1>
          <p className="text-lg text-gray-600">
            Join the most innovative companies shaping the future
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Company Header */}
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Image
                    src={templateImage}
                    alt={company.name}
                    className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-lg transition-all duration-300"
                  />
                  {company.isFeatured && (
                    <div className="absolute -top-2 -right-2 bg-[#ff9b71]/10 rounded-full p-1.5">
                      <Star 
                        size={18} 
                        className="text-[#ff9b71] fill-[#ff9b71]"
                      />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff9b71] transition-colors duration-200">
                        {company.name}
                      </h2>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <MapPin size={14} className="mr-1 text-[#ff9b71]" />
                        {company.location}
                      </p>
                    </div>
                    {company.isFeatured && (
                      <span className="px-3 py-1 text-xs font-medium text-[#ff9b71] bg-[#ff9b71]/10 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-[#ff9b71]">
                    <Briefcase size={16} />
                    <span className="font-semibold">{company.openPositions}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Open Positions</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-[#ff9b71]">
                    <Users size={16} />
                    <span className="font-semibold">{company.employeeCount}+</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Employees</p>
                </div>
              </div>

              {/* Company Description */}
              <p className="mt-6 text-gray-600 text-sm line-clamp-2">
                {company.description || "A leading company in technology and innovation, offering great opportunities for career growth and development."}
              </p>

              {/* Action Button */}
              <button
                onClick={() => handleOpenPosition(company.id)}
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-[#ff9b71]/10 text-[#ff9b71] font-semibold rounded-xl 
                hover:bg-[#ff9b71] hover:text-white transition-all duration-200"
              >
                View Open Positions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
