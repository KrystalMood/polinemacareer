import React from "react";
import Image from "next/image";
import templateImage from "@/public/peakpx.jpg";
import { Calendar, Clock, MapPin, Share2, Users } from "lucide-react";

export default function EventDetail() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={templateImage}
            alt="Event Cover"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Event Title</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>25 March 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>14:00 - 16:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Malang, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">About Event</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quae, voluptate quibusdam
                voluptatibus quidem voluptatem quos quia quas nesciunt.
                Quisquam, quae. Quisquam voluptates, quod, quae, voluptate
                quibusdam voluptatibus quidem voluptatem quos quia quas
                nesciunt. Quisquam, quae.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-24 text-gray-500">14:00</div>
                  <div>
                    <h3 className="font-semibold">Opening Ceremony</h3>
                    <p className="text-gray-600">
                      Welcome speech and introduction
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-24 text-gray-500">14:30</div>
                  <div>
                    <h3 className="font-semibold">Main Event</h3>
                    <p className="text-gray-600">
                      Keynote speaker presentation
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-24 text-gray-500">15:30</div>
                  <div>
                    <h3 className="font-semibold">Networking</h3>
                    <p className="text-gray-600">
                      Connect with other participants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-600">Capacity</p>
                    <p className="font-medium">200 Participants</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-medium">Malang, Indonesia</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Register Now
              </button>
              <button className="w-full mt-3 border border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Event
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Organizer</h3>
              <div className="flex items-center gap-4">
                <Image
                  src={templateImage}
                  alt="Organizer"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">Organizer Name</p>
                  <p className="text-gray-600 text-sm">Event Organizer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
