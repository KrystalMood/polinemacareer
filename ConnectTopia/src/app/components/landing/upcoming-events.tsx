import templateImage from "@/public/peakpx.jpg";
import { ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import events from "@/app/data/index/upcoming-events";
import { useRouter } from "next/navigation";

export default function Events() {
  const router = useRouter();

  return (
    <div className="min-h-[50vh] bg-[#fffaf8]">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        {/* Header Section */}
        <div className="mb-10 max-w-[90vw] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-0">
              Upcoming Events
            </h1>
            <p className="text-lg text-gray-600">
              Connecting Innovators and Creatives for a Brighter Tomorrow
            </p>
          </div>
          <button
            onClick={() => router.push("/main/dashboard-events")}
            className="group flex items-center text-md font-semibold text-[#ff9b71] hover:text-[#ffb699] transition-colors"
          >
            View All Events
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              {/* Event Image */}
              <div className="relative">
                <Image
                  src={templateImage}
                  alt={event.title}
                  className="rounded-t-lg object-cover h-[23rem]"
                />
                <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg opacity-60"></div>
              </div>

              {/* Event Details */}
              <div className="px-4 py-4 space-y-8">
                <h1 className="font-bold text-xl">{event.title}</h1>
                <p className="font-light text-gray-600">{event.subtitle}</p>
                <div className="flex justify-between w-full">
                  <p className="text-gray-500">{event.date}</p>
                  <button
                    onClick={() => router.push(`/main/events/${event.id}`)}
                    className="inline-flex items-center gap-x-3 group-hover:underline"
                  >
                    See more <ChevronRight size={18} />
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
