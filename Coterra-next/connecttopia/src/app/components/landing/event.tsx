import templateImage from "@/public/peakpx.jpg";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import events from "@/app/data/index/event";
export default function IndexEvent() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-16">
        <div className="flex items-center justify-between max-w-[90vw] mx-auto">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Event</h1>
            <p className="text-lg text-gray-600">
              Connecting Innovators and Creatives for a Brighter Tomorrow
            </p>
          </div>
          <button className="px-7 py-3 bg-yellow-300 uppercase rounded-md shadow-md hover:scale-105 transition-all duration-200">
            View All
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white shadow-lg rounded-lg group cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition-all duration-200"
            >
              <div className="relative">
                <Image
                  src={templateImage}
                  alt={event.title}
                  className="rounded-t-lg object-cover h-[23rem]"
                />
                <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg opacity-60"></div>
              </div>

              <div className="px-4 py-4 space-y-8">
                <h1 className="font-bold text-xl">{event.title}</h1>
                <p className="font-light text-gray-600">{event.subtitle}</p>
                <div className="flex justify-between w-full">
                  <p className="text-gray-500">{event.date}</p>
                  <button className="inline-flex items-center gap-x-3 group-hover:underline">
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
