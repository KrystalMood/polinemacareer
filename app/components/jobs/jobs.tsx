import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  Briefcase,
  Building2,
  Clock,
  DollarSign,
  Filter,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import debounce from "debounce";

// Types & Interfaces
interface Job {
  id: number;
  title: string;
  company: string;
  company_logo: string;
  location: string;
  type: string;
  salary_range: string;
  deadline: string;
}

interface SearchFilters {
  query: string;
  location: string;
  category: string;
}

// Constants
const JOBS_PER_PAGE = 5;
const MAX_VISIBLE_PAGES = 5;
const DEBOUNCE_DELAY = 300;
const API_URL = "http://localhost/polinema_career/api/jobs/index.php";

export default function JobsContent() {
  // State Management
  const [jobs, setJobs] = useState<Job[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalJobs, setTotalJobs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    location: "",
    category: "",
  });
  const [debouncedFilters, setDebouncedFilters] = useState<SearchFilters>({
    query: "",
    location: "",
    category: "",
  });

  // Data Fetching
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === "success") {
          setJobs(data.data);
          setTotalJobs(data.data.length);
          const uniqueCategories = Array.from(
            new Set(data.data.map((job: Job) => job.type)),
          ) as string[];
          setCategories(uniqueCategories);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(`An error occurred while fetching jobs: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const companyParam = params.get("company");

    if (companyParam) {
      setFilters(prev => ({
        ...prev,
        query: companyParam
      }));
      debouncedSetFilters({
        ...filters,
        query: companyParam
      });
    }
  }, []);

  // Search & Filter Utilities
  const searchInText = useCallback((text: string, query: string): boolean => {
    const normalizedText = text.toLowerCase();
    const normalizedQuery = query.toLowerCase();
    const queryWords = normalizedQuery
      .split(/\s+/)
      .filter((word) => word.length > 0);
    return queryWords.every((word) => normalizedText.includes(word));
  }, []);

  const debouncedSetFilters = useCallback(
    debounce((newFilters: SearchFilters) => {
      setDebouncedFilters(newFilters);
    }, DEBOUNCE_DELAY),
    [],
  );

  // Event Handlers
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, query: e.target.value };
    setFilters(newFilters);
    debouncedSetFilters(newFilters);
  };

  const handleLocationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, location: e.target.value };
    setFilters(newFilters);
    debouncedSetFilters(newFilters);
  };

  const handleCategoryClick = (selectedCategory: string) => {
    const newFilters = {
      ...filters,
      category: filters.category === selectedCategory ? "" : selectedCategory,
    };
    setFilters(newFilters);
    debouncedSetFilters(newFilters);
  };

  // Memoized Values
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        !debouncedFilters.query ||
        searchInText(`${job.title} ${job.company}`, debouncedFilters.query);
      const matchesLocation =
        !debouncedFilters.location ||
        searchInText(job.location, debouncedFilters.location);
      const matchesCategory =
        !debouncedFilters.category || job.type === debouncedFilters.category;
      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [jobs, debouncedFilters, searchInText]);

  const paginatedJobs = useMemo(() => {
    const indexOfLastJob = currentPage * JOBS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
    return filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  }, [filteredJobs, currentPage]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  // Pagination Utilities
  const getPageNumbers = useCallback(() => {
    const pageNumbers = [];

    if (totalPages <= MAX_VISIBLE_PAGES) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, "...");
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) pageNumbers.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 2) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  }, [currentPage, totalPages]);

  // Loading & Error States
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#ff9b71] border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white flex min-h-screen items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (
    filteredJobs.length === 0 &&
    !filters.query &&
    !filters.location &&
    !filters.category
  ) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        No jobs found
      </div>
    );
  }

  // Render Main Content
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ff9b71]/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-[#ff9b71]" />
                <span className="text-sm font-medium text-[#ff9b71]">
                  Thousands of jobs available
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Find Your Dream Job
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                <strong className="text-[#ff9b71]">{totalJobs}</strong> jobs
                available
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
                  value={filters.query}
                  onChange={handleSearchInput}
                  placeholder="Search jobs, keywords, companies"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none transition-all focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>

              {/* Location Input */}
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={filters.location}
                  onChange={handleLocationInput}
                  placeholder="Location"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none transition-all focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>

              {/* Filter Button */}
              <button className="inline-flex items-center rounded-xl bg-[#ff9b71]/10 px-6 py-3 font-semibold text-[#ff9b71] transition-all duration-200 hover:bg-[#ff9b71] hover:text-white">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </button>

              {/* Search Button */}
              <button className="inline-flex items-center rounded-xl bg-[#ff9b71] px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#ff8c5c]">
                Search Jobs
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-3 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`rounded-full border ${
                  category === filters.category
                    ? "border-[#ff9b71] bg-[#ff9b71]/10 text-[#ff9b71]"
                    : "border-gray-200 bg-white text-gray-700"
                } px-4 py-2 text-sm font-medium shadow-md transition-all duration-200 hover:border-[#ff9b71] hover:bg-[#ff9b71]/10 hover:text-[#ff9b71]`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {(filters.query || filters.location || filters.category) && (
          <div className="mb-2 px-4 text-sm text-gray-600">
            <strong>{filteredJobs.length}</strong> jobs found
          </div>
        )}

        {/* Job Listings */}
        <div className="grid gap-6">
          {paginatedJobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-2xl border border-[#ff9b71]/10 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#ff9b71]/30 hover:shadow-xl"
            >
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                {/* Company Info */}
                <div className="flex items-start gap-4 sm:items-center">
                  <div className="relative">
                    <img
                      src={job.company_logo || "/public/temp.jpg"}
                      alt={job.company}
                      className="h-16 w-16 rounded-xl object-cover shadow-md transition-all duration-300 group-hover:shadow-lg"
                    />
                    <div className="absolute -right-2 -top-2 rounded-full bg-[#ff9b71]/10 p-1.5">
                      <button className="text-[#ff9b71] transition-transform duration-300 hover:scale-110">
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <h2 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#ff9b71]">
                        {job.title}
                      </h2>
                      <span className="inline-flex w-fit rounded-full bg-[#ff9b71]/10 px-3 py-1 text-sm font-medium text-[#ff9b71]">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="inline-flex items-center">
                        <Building2
                          size={16}
                          className="mr-1.5 text-[#ff9b71]"
                        />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center">
                        <MapPin size={16} className="mr-1.5 text-[#ff9b71]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center">
                        <DollarSign
                          size={16}
                          className="mr-1.5 text-[#ff9b71]"
                        />
                        {job.salary_range}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock size={16} className="mr-1.5 text-[#ff9b71]" />
                        {job.deadline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 sm:ml-auto">
                  <button
                    onClick={() =>
                      (window.location.href = `/jobs/${job.id}`)
                    }
                    className="inline-flex items-center rounded-lg bg-[#ff9b71]/10 px-6 py-2.5 font-semibold text-[#ff9b71] transition-all duration-200 hover:bg-[#ff9b71] hover:text-white"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {jobs.length > JOBS_PER_PAGE && (
          <div className="mt-12 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            {getPageNumbers().map((number, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof number === "number" && setCurrentPage(number)
                }
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  number === currentPage
                    ? "bg-[#ff9b71] text-white"
                    : number === "..."
                      ? "cursor-default"
                      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
