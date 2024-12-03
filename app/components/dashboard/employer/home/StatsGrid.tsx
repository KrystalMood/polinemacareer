import { Users, BriefcaseIcon, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  const [totalJobs, setTotalJobs] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotalJobs = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost/polinema_career/api/jobs/employer_total_jobs.php",
          {
            headers: {
              Authorization: token || "",
            },
          },
        );

        const data = await response.json();

        if (data.status === "success") {
          setTotalJobs(data.data.total);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching total jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchTotalJobs();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="animate-pulse rounded-xl bg-white p-6 shadow-sm">
          <div className="h-20 rounded bg-gray-200"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white text-center text-lg text-red-500">{error}</div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <StatsCard
        title="Total Vacancies"
        value={totalJobs}
        icon={<BriefcaseIcon className="h-6 w-6 text-[#ff9b71]" />}
      />
    </div>
  );
}
