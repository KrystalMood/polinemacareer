import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import templateImage from "@/public/peakpx.jpg";
import Image from "next/image";

interface Company {
  name: string;
  logo: string;
  location: string;
  isFeatured?: boolean;
}

const companies: Company[] = [
  {
    name: "Astra International",
    logo: "/logos/dribbble.png",
    location: "United States",
    isFeatured: true,
  },
  {
    name: "Pertamina",
    logo: "/logos/upwork.png",
    location: "United States",
  },
  {
    name: "Adaro Energy",
    logo: "/logos/slack.png",
    location: "China",
  },
  {
    name: "United Tractors",
    logo: "/logos/freepik.png",
    location: "United States",
  },
  {
    name: "Pupuk Indonesia",
    logo: "/logos/dribbble.png",
    location: "United States",
    isFeatured: true,
  },
  {
    name: "Japfa Comfeed Indonesia",
    logo: "/logos/upwork.png",
    location: "United States",
  },
  {
    name: "Erajaya Swasembada",
    logo: "/logos/slack.png",
    location: "China",
  },
  {
    name: "PELINDO",
    logo: "/logos/freepik.png",
    location: "United States",
  },
];
export default function IndexCompany() {
  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-7xl mx-auto py-16">
        <div className="flex items-center justify-between max-w-[80vw]">
          <div className="space-y-2">
            <h1 className="font-bold text-4xl">Top Companies</h1>
            <p className="text-lg text-gray-600">
              Discover the leading companies that are shaping the future of work
              and creativity
            </p>
          </div>
          <div className="flex space-x-2 text-sky-600">
            <button className="px-3 py-3 rounded-lg bg-blue-50">
              <ChevronLeft />
            </button>
            <button className="px-3 py-3 rounded-lg bg-blue-50">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group bg-white rounded-md shadow-md px-6 py-6 hover:scale-[1.02] hover:shadow-2xl transition-all duration-200"
            >
              <div className="flex space-x-4 items-center">
                <Image
                  src={templateImage}
                  alt={company.name}
                  className="h-16 w-16 object-cover rounded-lg"
                />
                <div className="space-y-1">
                  <div className="flex items-center">
                    <h1 className="font-medium text-lg">{company.name}</h1>
                    <h2
                      className={`text-sm ml-3 bg-[#f1c2c2] px-3 py-1 rounded-full text-[#E05151] ${
                        company.isFeatured === true ? "block" : "hidden"
                      }`}
                    >
                      Featured
                    </h2>
                  </div>

                  <h4 className="inline-flex text-gray-400 items-center text-sm">
                    <MapPin size={18} className="mr-2" />
                    {company.location}
                  </h4>
                </div>
              </div>
              <button className="mt-10 w-full items-center font-semibold text-gray-950 bg-blue-50 rounded-md py-4 group-hover:bg-yellow-300 group-hover:text-white transition-all duration-200">
                Open Position
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
