import { ArrowRight, MapPin } from "lucide-react";
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
    <div className="min-h-screen bg-[#fffaf8] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:max-w-[90vw] lg:max-w-[80vw] space-y-4 sm:space-y-0">
          <div className="space-y-2">
            <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-[1.2] tracking-tight text-black">
              Top Companies
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-[1.6] max-w-xl font-normal">
              Discover the leading companies shaping the future of work and
              creativity.
            </p>
          </div>
          <div className="flex text-[#ff9b71] w-full sm:w-auto">
            <button
              onClick={() => router.push("/main/companies")}
              className="w-full sm:w-auto rounded-lg bg-[#ff9b71]/10 flex items-center justify-center font-medium text-sm md:text-base px-4 py-2 hover:bg-[#ff9b71]/20 transition-colors duration-300"
            >
              View all companies
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group bg-white rounded-lg shadow-sm px-3 sm:px-4 py-4 sm:py-6 hover:scale-[1.02] hover:shadow-md transition-all duration-300"
            >
              <div className="flex space-x-3 items-center">
                <Image
                  src={templateImage}
                  alt={company.name}
                  className="h-12 w-12 sm:h-16 sm:w-16 object-cover rounded-lg"
                />
                <div className="space-y-1 sm:space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-medium text-sm sm:text-base md:text-lg leading-snug text-gray-800 truncate">
                      {company.name}
                    </h2>
                    {company.isFeatured && (
                      <span className="text-xs px-2 py-0.5 sm:py-1 rounded-full bg-[#ff9b71]/10 text-[#ff9b71] font-medium whitespace-nowrap">
                        Excellent
                      </span>
                    )}
                  </div>

                  <p className="inline-flex text-gray-500 items-center text-xs sm:text-sm truncate">
                    <MapPin size={16} className="mr-1 flex-shrink-0" />
                    {company.location}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleOpenPosition(company.id)}
                className="mt-4 sm:mt-6 w-full items-center font-medium text-sm md:text-base text-gray-900 bg-[#ff9b71]/10 rounded-lg py-1.5 sm:py-2 group-hover:bg-[#ff9b71] group-hover:text-white transition-all duration-300"
              >
                View job
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
