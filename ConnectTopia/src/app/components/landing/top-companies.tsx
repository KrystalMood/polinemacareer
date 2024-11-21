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
    <div className="min-h-screen bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex items-center justify-between max-w-[80vw]">
          <div className="space-y-2">
            <h1 className="font-semibold text-2xl md:text-3xl leading-[1.2] tracking-tight text-black">
              Top Companies
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-[1.6] max-w-xl font-normal">
              Discover the leading companies shaping the future of work and
              creativity.
            </p>
          </div>
          <div className="flex text-[#ff9b71]">
            <button
              onClick={() => router.push("/main/companies")}
              className="rounded-lg bg-[#ff9b71]/10 flex items-center font-medium text-sm md:text-base px-4 py-2 hover:bg-[#ff9b71]/20 transition-colors duration-300"
            >
              View all companies
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group bg-white rounded-lg shadow-sm px-4 py-6 hover:scale-[1.02] hover:shadow-md transition-all duration-300"
            >
              <div className="flex space-x-3 items-center">
                <Image
                  src={templateImage}
                  alt={company.name}
                  className="h-16 w-16 object-cover rounded-lg"
                />
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <h2 className="font-medium text-base md:text-lg leading-snug text-gray-800">
                      {company.name}
                    </h2>
                    {company.isFeatured && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[#ff9b71]/10 text-[#ff9b71] font-medium">
                        Excellent
                      </span>
                    )}
                  </div>

                  <p className="inline-flex text-gray-500 items-center text-sm">
                    <MapPin size={16} className="mr-1" />
                    {company.location}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleOpenPosition(company.id)}
                className="mt-6 w-full items-center font-medium text-sm md:text-base text-gray-900 bg-[#ff9b71]/10 rounded-lg py-2 group-hover:bg-[#ff9b71] group-hover:text-white transition-all duration-300"
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
