import templateImage from "@/public/peakpx.jpg";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import events from "~/constants/events";

export default function Events() {
  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-gray-600">
            Join our exclusive career events and networking opportunities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative h-48 md:h-56">
                <img
                  src={"/public/temp.jpg"}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-t-2xl">
                  {/* Event Date Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 rounded-lg p-2 backdrop-blur-sm">
                    <div className="text-center">
                      <span className="block text-sm font-semibold text-[#ff9b71]">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </span>
                      <span className="block text-xl font-bold text-gray-900">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-4">
                {/* Event Type Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium text-[#ff9b71] bg-[#ff9b71]/10 rounded-full">
                    {event.type || "Career Event"}
                  </span>
                </div>

                {/* Event Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff9b71] transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {event.subtitle}
                  </p>
                </div>

                {/* Event Details */}
                <div className="pt-4 space-y-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#ff9b71]" />
                    <span>{event.time || "14:00 - 16:00 WIB"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#ff9b71]" />
                    <span>{event.location || "Virtual Event"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-[#ff9b71]" />
                    <span>{event.attendees || "150+"} Attendees</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() =>
                    (window.location.href = `/main/events/${event.id}`)
                  }
                  className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 bg-[#ff9b71]/10 text-[#ff9b71] 
                  font-semibold rounded-xl hover:bg-[#ff9b71] hover:text-white transition-all duration-200"
                >
                  Register Now
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => (window.location.href = "/main/dashboard-events")}
            className="inline-flex items-center px-8 py-3 bg-[#ff9b71]/10 text-[#ff9b71] font-semibold rounded-xl 
            hover:bg-[#ff9b71] hover:text-white transition-all duration-200"
          >
            View All Events
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
