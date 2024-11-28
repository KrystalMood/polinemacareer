import { Building2, MapPin, Timer } from "lucide-react";
import JobDetailModal from "./JobDetailModal";
import { useState } from "react";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  logo: string;
}

export default function JobCard({
  id,
  title,
  company,
  location,
  type,
  logo,
}: JobCardProps) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex gap-4">
          <img
            src={logo}
            alt={company}
            className="h-12 w-12 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{title}</h3>

            <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4" />
                <span>{company}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Timer className="h-4 w-4" />
                <span>{type}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowDetail(true)}
            className="rounded-lg px-4 py-2 font-medium text-[#ff9b71] transition-colors hover:bg-[#ff9b71]/10"
          >
            Lihat Detail
          </button>
        </div>
      </div>

      {showDetail && (
        <JobDetailModal jobId={id} onClose={() => setShowDetail(false)} />
      )}
    </>
  );
}
