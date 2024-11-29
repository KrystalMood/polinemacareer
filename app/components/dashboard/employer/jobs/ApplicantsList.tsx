import { useEffect } from "react";

import { useState } from "react";

interface Applicant {
  id: number;
  full_name: string;
  email: string;
  status: string;
  created_at: string;
}

export default function ApplicantsList({ jobId }: { jobId: number }) {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost/polinema_career/api/applications/applicants.php?job_id=${jobId}`,
          {
            headers: {
              Authorization: token || "",
            },
          }
        );
        const data = await response.json();
        if (data.status === "success") {
          setApplicants(data.data);
        }
      } catch (error) {
        console.error("Error fetching applicants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [jobId]);

  const getStatusBadge = (status: string) => {
    const styles = {
        Pending: "bg-yellow-100 text-yellow-800",
        Reviewed: "bg-blue-100 text-blue-800",
        Accepted: "bg-green-100 text-green-800",
        Rejected: "bg-red-100 text-red-800",
    }
    return `px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`;

  }

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (applicants.length === 0) {
    return <div className="text-center py-4 text-gray-500">No applicants found</div>;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-4">Daftar Pelamar</h3>
      <div className="space-y-4">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{applicant.full_name}</h4>
                <p className="text-sm text-gray-500">{applicant.email}</p>
              </div>
              <div className={getStatusBadge(applicant.status)}>
                {applicant.status}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(applicant.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
