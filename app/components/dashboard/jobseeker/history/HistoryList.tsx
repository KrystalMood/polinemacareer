import React, { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";

interface Application {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  appliedDate: string;
  status: "pending" | "accepted" | "rejected";
  logo: string;
}
export default function HistoryList() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(
          "http://localhost/polinema_career/api/applications/history.php",
        );
        const data = await response.json();
        if (data.status === "success") {
          setApplications(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching applications");
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  if (loading) return <div className="py-8 text-center">Loading...</div>;
  if (error)
    return <div className="py-8 text-center text-red-500">{error}</div>;

  if (applications.length === 0) {
    return (
      <div className="mt-2 rounded-xl bg-white p-6 shadow-sm">
        <div className="py-8 text-center text-gray-500">
          There are no applications yet
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <HistoryCard key={application.id} {...application} />
      ))}
    </div>
  );
}
