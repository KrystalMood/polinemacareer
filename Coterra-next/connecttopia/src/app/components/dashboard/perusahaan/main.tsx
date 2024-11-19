import {
  AlignCenter,
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Search,
} from "lucide-react";
import { MapPin } from "lucide-react";
import React, { useState, useEffect } from "react";
import { FilterSection } from "@/app/libs/hooks/apply/FilterSection";
import {
  locationOptions,
  salaryOptions,
  dateOptions,
  experienceOptions,
  employmentOptions,
} from "@/app/data/apply/content";

export default function MainDashboard() {
  const [salaryActive, setSalaryActive] = useState<string>("monthly");
  const [userName, setUserName] = useState<string>(""); // Store the user's name
  const [jobs, setJobs] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch user information on component mount
  useEffect(() => {
    // Check if user info is available in localStorage
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUserName(userData.nama || ""); // Set username if found in localStorage
    } else {
      // If no user data is found in localStorage, you can make an API call to fetch user data if needed
      fetchUserInfo();
    }
  }, []);

  // Function to fetch user information from an API (optional)
  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://sqlsrv.test/dashboard.php");
      const result = await response.json();
      if (result && result.user) {
        setUserName(result.user.name || ""); // Replace 'name' with the correct field
      } else {
        setError("Failed to fetch user data");
      }
    } catch (error) {
      setError("Failed to fetch user data");
      console.error(error);
    }
  };

  const handleSalaryClick = (salaryType: string) => {
    setSalaryActive(salaryType);
  };

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const url = new URL("http://sqlsrv.test/dashboard.php");
      if (searchTerm) url.searchParams.set("search", searchTerm);
      if (location) url.searchParams.set("location", location);

      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        setJobs(result.data);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Failed to fetch jobs");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = () => {
    fetchJobs();
  };

  // if (userName === "") {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <p className="text-xl text-gray-600">
  //         Please login to view your dashboard
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="py-28 mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="text-start w-full">
          <h1 className="text-5xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            Hello, <br /> Let's find{" "}
            <span className="text-blue-500">potential employee</span> for your company
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse thousands talent opportunities and take the next step in your
            company journey.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-10 flex w-full items-center justify-start gap-x-3"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs..."
                className="pl-10 px-4 py-2 border w-full border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
            <div className="relative w-full">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="pl-10 px-4 py-2 border w-full border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 w-[20rem] text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Search
            </button>
          </form>
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
              <h1 className="text-3xl font-bold text-gray-800">{jobs.length} Jobs </h1>
              <button className="inline-flex items-center justify-between w-[12rem] px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center">
                  <AlignCenter className="w-4 h-4 mr-2" />
                  Filter
                </div>
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="flex-1 px-6 mt-8">
              {isLoading ? (
                <div className="text-center">Loading...</div>
              ) : error ? (
                <div className="text-red-500 text-center">{error}</div>
              ) : (
                <>
                  {jobs.map((job, index) => (
                    <div
                      key={index}
                      className="flex mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={job.image || ""}
                        alt={`${job.company_name} Logo`}
                        className="w-20 h-20 object-cover rounded-md shadow-md"
                      />
                      <div className="ml-6 flex flex-col justify-between flex-grow">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-600">
                            {job.company_name}
                          </h2>
                          <h1 className="text-2xl font-bold text-gray-800 mt-1">
                            {job.title}
                          </h1>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-3">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-5 h-5 mr-2" />
                            <p className="text-sm">{job.location}</p>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-5 h-5 mr-2" />
                            <p className="text-sm">{job.type}</p>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <DollarSign className="w-5 h-5 mr-2" />
                            <p className="text-sm">
                              {job.salary} {job.salary_type}
                            </p>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-5 h-5 mr-2" />
                            <p className="text-sm">{job.posting_date}</p>
                          </div>
                        </div>
                        <p className="mt-3 text-gray-600">{job.description}</p>
                      </div>
                      <button className="self-start ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                        Apply
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Talent alerts
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
                Sort potential faster
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
