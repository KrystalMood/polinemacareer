import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  ChevronRight,
  Building2,
  Users,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import templateImage from "@/public/peakpx.jpg";

const STATS = [
  { icon: Users, label: "Active Jobs", value: "150+" },
  { icon: Building2, label: "Companies", value: "50+" },
  { icon: Trophy, label: "Applications", value: "25+" },
];

export default function MainDashboard() {
  const [user, setUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recentJobs, setRecentJobs] = useState<any[]>([
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "Jakarta",
      salary: "$3000-4000",
      type: "Full Time",
      posted: "2 days ago",
    },
    {
      title: "UX Designer",
      company: "Creative Agency",
      location: "Bandung",
      salary: "$2500-3500",
      type: "Full Time",
      posted: "3 days ago",
    },
    {
      title: "Product Manager",
      company: "Startup Inc",
      location: "Surabaya",
      salary: "$4000-5000",
      type: "Full Time",
      posted: "1 day ago",
    },
  ]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.name || "Guest"}! 👋
          </h1>
          <p className="text-gray-600 mt-2">Let's find your dream job today</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {STATS.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#ff9b71]/10 rounded-xl">
                  <stat.icon className="w-6 h-6 text-[#ff9b71]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search Section */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b71]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="px-6 py-2 bg-[#ff9b71] text-white rounded-lg hover:bg-[#ff8c5c] transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Recent Jobs */}
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
              {recentJobs.map((job, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {job.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {job.company}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {job.location}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {job.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
