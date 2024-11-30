import React, { useEffect, useState } from "react";
import {
  Search,
  MapPin,
  Filter,
  Briefcase,
  Users,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
// import companies from "~/constants/companies";
import { useNavigate } from "@remix-run/react";

interface Company {
  id: number;
  name: string;
  location: string;
  description: string;
  logo: string;
  employee_count: number;
  is_featured: boolean;
  open_positions: number;
}

export default function CompaniesContent() {
  const router = useNavigate();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          "http://localhost/polinema_career/api/companies/index.php",
        );

        const data = await response.json();

        if (data.status === "success") {
          setCompanies(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching companies.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#ff9b71] border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        {/* Header Section */}
        <div className="mb-12">
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ff9b71]/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-[#ff9b71]" />
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
                <strong className="text-[#ff9b71]">{companies.length}+</strong>{" "}
                companies
              </span>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex flex-col gap-4 md:flex-row">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies, industries..."
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 outline-none transition-all focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>

              {/* Location Input */}
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 outline-none transition-all focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>

              {/* Industry Select */}
              <div className="flex-1">
                <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-black outline-none transition-all focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20">
                  <option value="">Select Industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="inline-flex items-center rounded-xl bg-[#ff9b71] px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#ff8c5c]">
                Search
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#ff9b71] hover:text-[#ff9b71]"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {companies.length === 0 && (
          <div className="flex items-start justify-center">
            No companies found
          </div>
        )}

        {/* Main Content Grid */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Companies Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="group rounded-2xl border border-[#ff9b71]/10 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#ff9b71]/30 hover:shadow-xl"
                >
                  {/* Company Header */}
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img
                        src={company.logo || "/public/temp.jpg"}
                        alt={company.name}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-xl object-cover shadow-md transition-all duration-300 group-hover:shadow-lg"
                      />
                      {company.is_featured && (
                        <div className="absolute -right-2 -top-2 rounded-full bg-[#ff9b71]/10 p-1.5">
                          <Star
                            size={18}
                            className="fill-[#ff9b71] text-[#ff9b71]"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{company.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{company.location}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {company.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenPosition(company.id)}
                      className="rounded-lg bg-blue-50 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-100"
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
