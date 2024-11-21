import React, { useState } from "react";
import { AlignCenter, Calendar, ChevronDown, Clock, DollarSign, Search } from "lucide-react";
import { MapPin } from "lucide-react";

export default function MainDashboard() {
  const [salaryActive, setSalaryActive] = useState<string>("monthly");
  const [userName, setUserName] = useState<string>("Guest"); // Default to "Guest"
  const [jobs, setJobs] = useState<any[]>([
    { title: "Software Engineer", company: "Tech Corp", location: "New York" },
    { title: "Product Manager", company: "Innovate LLC", location: "San Francisco" },
    { title: "UX Designer", company: "Design Studios", location: "Los Angeles" },
    { title: "Data Scientist", company: "Data Solutions", location: "Chicago" }
  ]); // Sample static job data
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSalaryClick = (salaryType: string) => {
    setSalaryActive(salaryType);
  };

  const handleSearch = () => {
    // Placeholder for search functionality
    console.log("Search initiated with term:", searchTerm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="py-28 mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="text-start w-full">
          <h1 className="text-5xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            Hello, {userName}! <br /> Let's find{" "}
            <span className="text-blue-500">some jobs</span> for you
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse thousands of job opportunities and take the next step in your career journey.
          </p>
        </div>
        <div className="mt-8">
          
        </div>
        <div className="flex space-x-8 overflow-x-auto">
  {/* First Table */}
  <div className="flex-1 min-w-0">
    <table className="w-full text-left border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border border-gray-300">Job Title</th>
          <th className="px-4 py-2 border border-gray-300">Company</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">{job.title}</td>
            <td className="px-4 py-2 border border-gray-300">{job.company}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Second Table */}
  <div className="flex-1 min-w-0">
    <table className="w-full text-left border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border border-gray-300">Location</th>
          <th className="px-4 py-2 border border-gray-300">Status</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">{job.location}</td>
            <td className="px-4 py-2 border border-gray-300">{job.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Third Table */}
  <div className="flex-1 min-w-0">
    <table className="w-full text-left border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border border-gray-300">Job Title</th>
          <th className="px-4 py-2 border border-gray-300">Location</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">{job.title}</td>
            <td className="px-4 py-2 border border-gray-300">{job.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        <div className="mt-10">
          {/* Tabel untuk Menampilkan Pekerjaan */}
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">No</th>
                <th className="px-4 py-2 border border-gray-300">Job Title</th>
                <th className="px-4 py-2 border border-gray-300">Company</th>
                <th className="px-4 py-2 border border-gray-300">Location</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300">{job.title}</td>
                  <td className="px-4 py-2 border border-gray-300">{job.company}</td>
                  <td className="px-4 py-2 border border-gray-300">{job.location}</td>
                  <td className="px-4 py-2 border border-gray-300">{job.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
