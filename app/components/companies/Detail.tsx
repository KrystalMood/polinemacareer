import { useParams } from "@remix-run/react";
import {
  Briefcase,
  Building2,
  Calendar,
  Globe,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

interface CompanyDetail {
  id: number;
  name: string;
  location: string;
  description: string;
  logo: string;
  employee_count: number;
  is_featured: boolean;
  open_positions: number;
  website?: string;
  industry?: string;
  founded_year?: string;
  email?: string;
  phone?: string;
}

export default function CompanyDetail() {
  const { id } = useParams();
  const [company, setCompany] = useState<CompanyDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompanyDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost/polinema_career/api/companies/detail.php?id=${id}`,
        );
        const data = await response.json();

        if (data.status === "success") {
          setCompany(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Something went wrong" + error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetail();
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

  if (!company) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
          <div className="flex items-center gap-8">
            <div className="relative aspect-square w-24">
              <img
                src={company?.logo || "/public/temp.jpg"}
                alt={company?.name || "Company Logo"}
                className="rounded-xl object-cover"
              />
              {company?.is_featured && (
                <div className="absolute -right-2 -top-2 rounded-full bg-[#ff9b71] p-1.5">
                  <Star className="text-[#ff9b71 h-5 w-5 fill-[#ff9b71]" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900">
                {company?.name}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#ff9b71]" />
                  <span>{company?.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#ff9b71]" />
                  <span>{company?.employee_count} Employees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#ff9b71]" />
                  <span>{company?.open_positions} Open Positions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                About The Company
              </h2>
              <p className="leading-relaxed text-gray-600">
                {company?.description}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Open Positions
                </h2>
                <span className="rounded-full bg-[#ff9b71]/10 px-4 py-2 text-sm font-medium text-[#ff9b71]">
                  {company?.open_positions} Open Positions
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Company Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#ff9b71]/10 p-2">
                    <Building2 className="h-5 w-5 text-[#ff9b71]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Industry</p>
                    <p className="font-medium text-gray-900">
                      {company?.industry || "Not Available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#ff9b71]/10 p-2">
                    <Calendar className="h-5 w-5 text-[#ff9b71]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Founded Year</p>
                    <p className="font-medium text-gray-900">
                      {company?.founded_year || "Not Available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#ff9b71]/10 p-2">
                    <Globe className="h-5 w-5 text-[#ff9b71]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <a
                      href={company?.website || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900"
                    >
                      {company?.website || "Not Available"}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#ff9b71]/10 p-2">
                    <Mail className="h-5 w-5 text-[#ff9b71]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">
                      {company?.email || "Not Available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#ff9b71]/10 p-2">
                    <Phone className="h-5 w-5 text-[#ff9b71]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">
                      {company?.phone || "Not Available"}
                    </p>
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
