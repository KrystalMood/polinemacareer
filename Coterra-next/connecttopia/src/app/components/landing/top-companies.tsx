import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import templateImage from "@/public/peakpx.jpg";
import Image from "next/image";
import companies from "@/app/data/index/top-companies";
import { useRouter } from "next/navigation";

export default function IndexCompany() {
  const router = useRouter();

  const handleOpenPosition = (id: number) => {
    router.push(`/main/jobs/position/${id}`);
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-7xl mx-auto py-16">
        <div className="flex items-center justify-between max-w-[80vw]">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl leading-[1.2] tracking-tight text-gray-900">
              Top Companies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-[1.6] max-w-2xl font-normal">
              Temukan perusahaan-perusahaan terkemuka yang membentuk masa depan
              pekerjaan dan kreativitas
            </p>
          </div>
          <div className="flex text-sky-600">
            <button 
              onClick={() => router.push("/main/companies")}
              className="rounded-lg bg-blue-50 flex items-center font-semibold text-lg px-6 py-3 hover:bg-blue-100 transition-colors duration-300"
            >
              Lihat Semua Perusahaan
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group bg-white rounded-lg shadow-md px-6 py-8 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex space-x-4 items-center">
                <Image
                  src={templateImage}
                  alt={company.name}
                  className="h-20 w-20 object-cover rounded-lg"
                />
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <h2 className="font-semibold text-lg md:text-xl leading-snug text-gray-800">
                      {company.name}
                    </h2>
                    {company.isFeatured && (
                      <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-[#f1c2c2] text-[#E05151] font-medium whitespace-nowrap">
                        Unggulan
                      </span>
                    )}
                  </div>

                  <p className="inline-flex text-gray-500 items-center text-sm md:text-base">
                    <MapPin size={18} className="mr-2 flex-shrink-0" />
                    {company.location}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleOpenPosition(company.id)}
                className="mt-8 w-full items-center font-medium text-base md:text-lg text-gray-900 bg-blue-50 rounded-lg py-3 md:py-4 group-hover:bg-yellow-300 group-hover:text-white transition-all duration-300"
              >
                Lihat Lowongan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
