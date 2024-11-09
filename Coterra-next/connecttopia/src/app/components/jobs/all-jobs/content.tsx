import {
  AlignCenter,
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Search,
  Timer,
} from "lucide-react";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { FilterSection } from "@/app/libs/hooks/apply/FilterSection";
import {
  locationOptions,
  salaryOptions,
  dateOptions,
  experienceOptions,
  employmentOptions,
} from "@/app/data/apply/content";

export default function AllJobsContent() {
  const [salaryActive, setSalaryActive] = useState<string>("monthly");

  const handleSalaryClick = (salaryType: string) => {
    setSalaryActive(salaryType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="py-28 mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="text-start w-full">
          <h1 className="text-5xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            Find your <span className="text-blue-500">dream job</span> today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse thousands of job opportunities and take the next step in your
            career journey.
          </p>
          <div className="mt-10 flex w-full items-center justify-start gap-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="pl-10 px-4 py-2 border w-[30rem] border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Location"
                className="pl-10 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <div className="w-1/5 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
            <div className="mt-4 space-y-6">
              <FilterSection
                title="Location"
                name="jobLocation"
                options={locationOptions}
                type="radio"
              />

              <div className="space-y-3">
                <label className="text-md font-bold text-gray-700">
                  Salary
                </label>
                <div className="flex items-center justify-center mb-3">
                  <button
                    className={`px-[0.65rem] py-2 border-2 rounded-l-sm transition-colors duration-200 ${
                      salaryActive === "hourly"
                        ? "bg-blue-50 border-blue-600 text-blue-600"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => handleSalaryClick("hourly")}
                  >
                    Hourly
                  </button>
                  <button
                    className={`px-[0.65rem] py-2 border-t-2 border-b-2 transition-colors duration-200 ${
                      salaryActive === "monthly"
                        ? "bg-blue-50 border-blue-600  text-blue-600"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => handleSalaryClick("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-[0.65rem] py-2 border-2 rounded-r-sm transition-colors duration-200 ${
                      salaryActive === "annually"
                        ? "bg-blue-50 border-blue-600 text-blue-600"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => handleSalaryClick("annually")}
                  >
                    Annually
                  </button>
                </div>
                <FilterSection
                  name="salary"
                  options={salaryOptions}
                  type="radio"
                />
              </div>

              <FilterSection
                title="Date of Posting"
                name="dateOfPosting"
                options={dateOptions}
                type="radio"
              />

              <FilterSection
                title="Work Experience"
                name="experience"
                options={experienceOptions}
                type="radio"
              />

              <FilterSection
                title="Type of Employment"
                name="employment"
                options={employmentOptions}
                type="checkbox"
              />
            </div>
          </div>

          <div className="flex-1 px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800">3,177 Jobs</h1>
              <button className="inline-flex items-center justify-between w-[12rem] px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center">
                  <AlignCenter className="w-4 h-4 mr-2" />
                  Filter
                </div>
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="flex mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <img
                src=""
                alt="Logo Perusahaan"
                className="w-20 h-20 object-cover rounded-md shadow-md"
              />
              <div className="ml-6 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-lg font-semibold text-gray-600">
                    Nama Perusahaan
                  </h2>
                  <h1 className="text-2xl font-bold text-gray-800 mt-1">
                    Judul Pekerjaan
                  </h1>
                </div>
                <div className="flex flex-wrap gap-4 mt-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <p className="text-sm">Lokasi</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <p className="text-sm">Jenis Pekerjaan</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <p className="text-sm">Gaji</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <p className="text-sm">Tanggal Posting</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  modi!
                </p>
              </div>
              <button className="self-start ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                Lamar
              </button>
            </div>
          </div>

          <div className="w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Job Alerts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get notified when new jobs match your preferences
              </p>
              <input
                type="text"
                placeholder="Enter your email"
                className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Subscribe
              </button>
            </div>

            <div className="mt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Get noticed faster
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get noticed faster with a premium job listing
              </p>
              <input
                type="submit"
                value="Upload your resume"
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
