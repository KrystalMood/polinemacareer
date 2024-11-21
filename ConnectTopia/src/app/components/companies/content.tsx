import React, { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import Image from "next/image";
import companies from "@/app/data/index/top-companies";
import { useRouter } from "next/navigation";

export default function CompaniesContent() {
  const router = useRouter();
  const [radius, setRadius] = useState(32);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [organizationType, setOrganizationType] = useState<string>("");

  const handleOpenPosition = (id: number) => {
    router.push(`/main/jobs/position/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, Keyword..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Category</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors">
            Find Job
          </button>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
            <Filter size={20} />
            Filter
          </button>
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Latest</option>
              <option>Oldest</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>12 per page</option>
              <option>24 per page</option>
              <option>48 per page</option>
            </select>
          </div>
        </div>

        {/* Filters Sidebar and Companies Grid */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Location Radius</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={radius}
                onChange={(e) => setRadius(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-gray-600 mt-2">{radius} miles</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Organization Type</h3>
              <div className="space-y-2">
                {[
                  "Government",
                  "Semi-Government",
                  "NGO",
                  "Private Company",
                  "International Agencies",
                  "Others",
                ].map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="orgType"
                      value={type}
                      checked={organizationType === type}
                      onChange={(e) => setOrganizationType(e.target.value)}
                      className="text-blue-500"
                    />
                    <span className="text-sm text-gray-600">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="flex-1 grid grid-cols-1 gap-4">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{company.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span>{company.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpenPosition(company.id)}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    Open Position →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
