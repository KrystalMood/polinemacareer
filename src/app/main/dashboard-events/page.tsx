"use client";

import Header from "@/app/components/common/header/header";
import Footer from "@/app/components/common/footer";
import React, { useState } from "react";
import EventDetail from "../../components/events/dashboard/content";
import EventList from "../../components/events/list/content";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen pt-[80px] py-12">
        {/* Highlight Event Section */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Highlight Event
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Add tighter spacing for the EventDetail */}
              <EventDetail className="pt-0" />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4">
          {/* Title and Search */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Events</h1>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-4 lg:mt-0 w-full lg:w-1/3 px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:ring focus:ring-yellow-300"
            />
          </div>

          {/* Filtering Options */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-300 hover:bg-yellow-100">
              Upcoming
            </button>
            <button className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-300 hover:bg-yellow-100">
              Past Events
            </button>
            <button className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-300 hover:bg-yellow-100">
              Free Events
            </button>
            <button className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-300 hover:bg-yellow-100">
              Paid Events
            </button>
          </div>

          {/* Upcoming Events Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventList />
              <EventList />
              <EventList />
              <EventList />
            </div>
          </section>

          {/* Other Events Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Other Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventList />
              <EventList />
              <EventList />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
