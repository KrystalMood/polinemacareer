import { Building2 } from "lucide-react";
import { MapPin } from "lucide-react";
import { Calendar } from "lucide-react";
import React from "react";

interface HistoryCardProps {
  jobTitle: string;
  company: string;
  location: string;
  appliedDate: string;
  status: "pending" | "accepted" | "rejected";
  logo: string;
}

export default function HistoryCard({
  jobTitle,
  company,
  location,
  appliedDate,
  status,
  logo,
}: HistoryCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-50 text-yellow-600";
      case "accepted":
        return "bg-green-50 text-green-600";
      case "rejected":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "accepted":
        return "Accepted";
      case "rejected":
        return "Rejected";
      default:
        return status;
    }
  };
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex gap-4">
        <img
          src={logo}
          alt={company}
          className="h-12 w-12 rounded-lg object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{jobTitle}</h3>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(status)}`}
            >
              {getStatusText(status)}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4" />
              <span>{company}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>Applied on {appliedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
