import React from "react";
import Image from "next/image";
import templateImage from "@/public/peakpx.jpg";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function EventList() {
  // Assuming you have an eventId for each event. This is just an example.
  const eventId = "example-event-id"; // Replace with dynamic event ID

  return (
    <Link href={`/main/events/${eventId}`} passHref>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="relative h-48">
          <Image
            src={templateImage}
            alt="Event Cover"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-lg font-semibold text-white">Event Title</h3>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <Calendar className="w-4 h-4" />
            <span>25 March 2024</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <Clock className="w-4 h-4" />
            <span>14:00 - 16:00</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <MapPin className="w-4 h-4" />
            <span>Malang, Indonesia</span>
          </div>
          <button className="w-full mt-4 bg-yellow-400 text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-500">
            Register Now
          </button>
        </div>
      </div>
    </Link>
  );
}
