import { useNavigate } from "@remix-run/react";
import {
  Clock,
  DollarSign,
  MapPin,
  X,
  Building2,
  Calendar,
} from "lucide-react";
import { useEffect, useState } from "react";

interface JobDetailModalProps {
  jobId: number;
  onClose: () => void;
}

interface JobDetail {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  salary_range: string;
  deadline: string;
  created_at: string;
}

export default function JobDetailModal({
  jobId,
  onClose,
}: JobDetailModalProps) {
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost/polinema_career/api/jobs/detail.php?id=${jobId}`,
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
  }, [jobId]);

  const handleApply = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost/polinema_career/api/applications/apply.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token || "",
          },
          body: JSON.stringify({
            job_id: jobId,
          }),
        },
      );

      const data = await response.json();

      if (data.status === "success") {
        alert("Application submitted successfully");
        onClose();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred while submitting application");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white">
        <div className="bg-gradient-to-r from-[#ff9b71] to-[#ff8c5c] p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Job Details</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#ff9b71] border-t-transparent"></div>
            </div>
          )}

          {error && (
            <div className="rounded-lg bg-red-50 p-4 text-center text-red-500">
              {error}
            </div>
          )}

          {job && (
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#ff9b71]" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#ff9b71]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#ff9b71]" />
                    <span>{job.salary_range}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#ff9b71]" />
                    <span>Deadline: {job.deadline}</span>
                  </div>
                </div>
                <div className="inline-flex rounded-full bg-[#ff9b71]/10 px-4 py-2 text-sm font-medium text-[#ff9b71]">
                  {job.type}
                </div>
              </div>

              <div className="space-y-4 rounded-xl bg-gray-50 p-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Job Description
                </h4>
                <p className="whitespace-pre-wrap leading-relaxed text-gray-600">
                  {job.description}
                </p>
              </div>

              <div className="space-y-4 rounded-xl bg-gray-50 p-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Requirements
                </h4>
                <p className="whitespace-pre-wrap leading-relaxed text-gray-600">
                  {job.requirements}
                </p>
              </div>

              <div className="flex justify-end border-t pt-6">
                <button
                  onClick={handleApply}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#ff9b71] px-6 py-3 font-medium text-white transition-colors hover:bg-[#ff8c5c]"
                >
                  <Clock className="h-5 w-5" />
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
