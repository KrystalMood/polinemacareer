import { Clock, Edit2, MoreVertical, Trash2, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import EditJobForm from "./EditJobForm";

type Job = {
  id: number;
  title: string;
  type: string;
  applicants: number;
  status: string;
  deadline: string;
  created: string;
};

export default function JobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const [showStatusMenu, setShowStatusMenu] = useState<number | null>(null);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost/polinema_career/api/jobs/employer_jobs.php",
        {
          headers: {
            Authorization: token || "",
          },
        },
      );
      const data = await response.json();
      if (data.status === "success") {
        setJobs(data.jobs);
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (error) {
      setError("Server error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleEditClick = (jobId: number) => {
    setSelectedJobId(jobId);
    setShowEditModal(true);
  };

  const handleDeleteClick = async (jobId: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus lowongan ini?")) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost/polinema_career/api/jobs/delete.php?id=${jobId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: token || "",
            },
          },
        );

        const data = await response.json();
        if (data.status === "success") {
          fetchJobs();
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Terjadi kesalahan saat menghapus job");
      }
    }
  };

  const handleStatusChange = async (jobId: number, newStatus: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost/polinema_career/api/jobs/update_status.php`,
        {
          method: "PUT",
          headers: {
            Authorization: token || "",
          },
          body: JSON.stringify({ id: jobId, status: newStatus }),
        },
      );
      const data = await response.json();

      if (data.status === "success") {
        fetchJobs();
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (error) {
      setError("Something went wrong: " + error);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Position
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Applicants
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Deadline
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-100">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="font-medium text-gray-900">{job.title}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{job.type}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    {job.applicants}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : job.status === "Closed"
                          ? "bg-red-100 text-red-800"
                          : job.status === "Draft"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-yellow-100 text-yellow-800"
                    } `}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {job.deadline}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {job.created}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditClick(job.id)}
                      className="rounded-lg p-1 hover:bg-gray-100"
                    >
                      <Edit2 className="h-4 w-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(job.id)}
                      className="rounded-lg p-1 hover:bg-gray-100"
                    >
                      <Trash2 className="h-4 w-4 text-gray-500" />
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => setShowStatusMenu(job.id)}
                        className="rounded-lg p-1 hover:bg-gray-100"
                      >
                        <MoreVertical className="h-4 w-4 text-gray-500" />
                      </button>

                      {showStatusMenu === job.id && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white">
                          <button
                            onClick={() => {
                              handleStatusChange(job.id, "Active");
                              setShowStatusMenu(null);
                            }}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Set Active
                          </button>

                          <button
                            onClick={() => {
                              handleStatusChange(job.id, "Closed");
                              setShowStatusMenu(null);
                            }}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Set Closed
                          </button>

                          <button
                            onClick={() => {
                              handleStatusChange(job.id, "Draft");
                              setShowStatusMenu(null);
                            }}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Set Draft
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showEditModal && selectedJobId && (
        <EditJobForm
          jobId={selectedJobId}
          onClose={() => setShowEditModal(false)}
          onSuccess={() => {
            setShowEditModal(false);
            fetchJobs();
          }}
        />
      )}
    </div>
  );
}
