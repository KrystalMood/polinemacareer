import React, { useEffect, useState } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Calendar,
  Building,
  Users,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Bookmark,
  Star,
  ArrowLeft,
} from "lucide-react";
import { useParams } from "@remix-run/react";

interface JobDetail {
  id: number;
  title: string;
  company_name: string;
  company_logo: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  salary_range: string;
  deadline: string;
  created_at: string;
}

export default function PositionContent() {
  const { id } = useParams();
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost/polinema_career/api/jobs/detail.php?id=${id}`,
        );
        const data = await response.json();

        if (data.status === "success") {
          setJob(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching job details");
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetail();
  }, [id]);

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

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-2xl font-semibold">Job not found</div>
      </div>
    );
  }

  const requirementsList = job.requirements
    .split("\n")
    .filter((req) => req.trim());

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-12">
        {/* Header Section */}
        <button
          onClick={() => window.history.back()}
          className="mb-8 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-600 shadow-sm transition-colors hover:bg-gray-50"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Company Logo */}
            <div className="relative">
              <img
                src={job.company_logo || "/public/temp.jpg"}
                alt="Company Logo"
                className="h-24 w-24 rounded-xl object-cover shadow-md transition-all duration-300 group-hover:shadow-lg"
              />
              {/* Featured Badge */}
              <div className="absolute -right-2 -top-2 rounded-full bg-[#ff9b71]/10 p-1.5">
                <Star size={18} className="fill-[#ff9b71] text-[#ff9b71]" />
              </div>
            </div>

            {/* Job Details */}
            <div className="flex-1">
              <div className="mb-4 flex flex-wrap items-center gap-4">
                <h1 className="text-3xl font-bold text-gray-900 transition-colors group-hover:text-[#ff9b71]">
                  {job.title}
                </h1>
                <span className="rounded-full bg-[#ff9b71]/10 px-3 py-1 text-sm font-medium text-[#ff9b71]">
                  {job.type}
                </span>
                <span className="rounded-full bg-[#ff9b71]/10 px-3 py-1 text-sm font-medium text-[#ff9b71]">
                  Featured
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-[#ff9b71]" />
                  <span>{job.company_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#ff9b71]" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-[#ff9b71]" />
                  <span>{job.salary_range}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <button
                className="inline-flex items-center rounded-xl bg-[#ff9b71] px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#ff8c5c]"
                onClick={() => (window.location.href = "/register")}
              >
                Sign Up to Apply
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1"
                />
              </button>
              <button className="inline-flex items-center justify-center rounded-xl bg-[#ff9b71]/10 px-8 py-3 font-semibold text-[#ff9b71] transition-all duration-200 hover:bg-[#ff9b71] hover:text-white">
                <Bookmark className="mr-2 h-5 w-5" />
                Save Job
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Job Description */}
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Job Description
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                {job.description}
              </p>

              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Requirements
              </h3>
              <ul className="space-y-4">
                {requirementsList.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#ff9b71]/10 p-1">
                      <CheckCircle className="h-4 w-4 text-[#ff9b71]" />
                    </div>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Job Overview
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Calendar,
                    label: "Posted Date",
                    value: new Date(job.created_at).toLocaleDateString("id-ID"),
                  },
                  {
                    icon: Clock,
                    label: "Deadline",
                    value: new Date(job.deadline).toLocaleDateString("id-ID"),
                  },
                  { icon: Users, label: "Vacancy", value: "3 Positions" },
                  {
                    icon: GraduationCap,
                    label: "Education",
                    value: "Bachelor's Degree",
                  },
                  { icon: Briefcase, label: "Experience", value: "5+ Years" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="rounded-lg bg-[#ff9b71]/10 p-2">
                      <item.icon className="h-5 w-5 text-[#ff9b71]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-gray-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Company Info Card */}
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Company Info
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  {job.company_name} is a leading technology company
                  specializing in...
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-[#ff9b71]/5 p-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[#ff9b71]">
                      <Briefcase size={16} />
                      <span className="font-semibold">50+</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-600">Open Positions</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[#ff9b71]">
                      <Users size={16} />
                      <span className="font-semibold">500+</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-600">Employees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
