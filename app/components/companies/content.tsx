import React, { useCallback, useEffect, useState } from "react";
import {
  Search,
  MapPin,
  Filter,
  Briefcase,
  Users,
  Star,
  ArrowRight,
  Sparkles,
  Building2,
} from "lucide-react";
// import companies from "~/constants/companies";
import { useNavigate } from "@remix-run/react";
import debounce from "debounce";

interface Company {
  id: number;
  name: string;
  location: string;
  industry: string;
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
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Companies");

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
    }, 500),
    [],
  );

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

  const handleOpenPosition = (companyName: string) => {
    const searchParams = new URLSearchParams();
    searchParams.append("company", companyName);
    router(`/jobs?${searchParams.toString()}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
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

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      !searchQuery ||
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation =
      !locationQuery ||
      company.location.toLowerCase().includes(locationQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Companies" ||
      company.industry === selectedCategory;

    return matchesSearch && matchesLocation && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#ff9b71] border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-red-500">
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
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 outline-none transition-all focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>

              {/* Location Input */}
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  value={locationQuery}
                  onChange={handleLocationSearch}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 outline-none transition-all focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20"
                />
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
                onClick={() => handleCategoryClick(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "border-[#ff9b71] bg-[#ff9b71]/10 text-[#ff9b71]"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#ff9b71] hover:text-[#ff9b71]"
                }`}
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
              {filteredCompanies.map((company) => (
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

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleOpenPosition(company.name)}
                        className="flex items-center gap-2 rounded-lg bg-[#ff9b71]/10 px-4 py-2 text-[#ff9b71] transition-all duration-300 hover:bg-[#ff9b71]/20"
                      >
                        <Briefcase size={16} />
                        <span>Open Positions</span>
                      </button>
                      <button
                        onClick={() => router(`/companies/${company.id}`)}
                        className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-all duration-300 hover:bg-gray-200"
                      >
                        <Building2 size={16} />
                        <span>View Company</span>
                      </button>
                    </div>
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
