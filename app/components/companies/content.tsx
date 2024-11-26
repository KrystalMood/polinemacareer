import React, { useState } from "react";
import { Search, MapPin, Filter, Briefcase, Users, Star, ArrowRight, Sparkles } from "lucide-react";
import companies from "~/constants/companies";
import { useNavigate } from "@remix-run/react";

export default function CompaniesContent() {
  const router = useNavigate();
  const [radius, setRadius] = useState(32);
  const [organizationType, setOrganizationType] = useState<string>("");
  const handleOpenPosition = (id: number) => {
    router(`/main/jobs/position/${id}`);
  };

  const categories = [
    "All Companies",
    "Technology",
    "Healthcare",
    "Education",
    "Finance",
    "Manufacturing",
    "Retail",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10 mb-4">
                <Sparkles className="w-4 h-4 text-[#ff9b71]" />
                <span className="text-sm font-medium text-[#ff9b71]">
                  Top Companies Hiring
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Browse Companies
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                <strong className="text-[#ff9b71]">{companies.length}+</strong> companies
              </span>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies, industries..."
                  className="bg-white w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff9b71] 
                  focus:ring-2 focus:ring-[#ff9b71]/20 outline-none transition-all"
                />
              </div>

              {/* Location Input */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-white w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff9b71] 
                  focus:ring-2 focus:ring-[#ff9b71]/20 outline-none transition-all"
                />
              </div>

              {/* Industry Select */}
              <div className="flex-1">
                <select 
                  className="bg-white text-black w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff9b71] 
                  focus:ring-2 focus:ring-[#ff9b71]/20 outline-none transition-all"
                >
                  <option value="">Select Industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="inline-flex items-center px-8 py-3 bg-[#ff9b71] text-white 
                font-semibold rounded-xl hover:bg-[#ff8c5c] transition-all duration-200">
                Search
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full 
                border border-gray-200 hover:border-[#ff9b71] hover:text-[#ff9b71] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-72 space-y-6">
            

            {/* Organization Type */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Type</h3>
              <div className="space-y-3">
                {[
                  "Government",
                  "Semi-Government",
                  "NGO",
                  "Private Company",
                  "International Agencies",
                  "Others",
                ].map((type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="orgType"
                      value={type}
                      checked={organizationType === type}
                      onChange={(e) => setOrganizationType(e.target.value)}
                      className="text-[#ff9b71] focus:ring-[#ff9b71]"
                    />
                    <span className="text-sm text-gray-600">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                  transition-all duration-300 group border border-[#ff9b71]/10 
                  hover:border-[#ff9b71]/30"
                >
                  {/* Company Header */}
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img
                        src={"/public/temp.jpg"}
                        alt={company.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-xl object-cover shadow-md 
                        group-hover:shadow-lg transition-all duration-300"
                      />
                      {company.isFeatured && (
                        <div className="absolute -top-2 -right-2 bg-[#ff9b71]/10 rounded-full p-1.5">
                          <Star 
                            size={18} 
                            className="text-[#ff9b71] fill-[#ff9b71]"
                          />
                        </div>
                      )}
                    </div>

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
    </div>
  );
}
