import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface EditJobFormProps {
  jobId: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditJobForm({
  jobId,
  onClose,
  onSuccess,
}: EditJobFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [jobData, setJobData] = useState({
    title: "",
    type: "",
    location: "",
    description: "",
    requirements: "",
    deadline: "",
    salary_range: "",
  });

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(
          `http://localhost/polinema_career/api/jobs/detail.php?id=${jobId}`,
        );
        const data = await response.json();

        if (data.status === "success") {
          setJobData(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching job data");
      }
    };
    fetchJobData();
  }, [jobId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token")?.replace("Bearer ", "");
      const response = await fetch(
        `http://localhost/polinema_career/api/jobs/update.php`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token || "",
          },
          body: JSON.stringify({ ...jobData, id: jobId }),
        },
      );

      const data = await response.json();
      if (data.status === "success") {
        onSuccess();
        onClose();
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred while updating the job " + error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-xl bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Edit Job</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={jobData.title}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-200 p-2 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Type
                </label>
                <select
                  name="type"
                  value={jobData.type}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-200 p-2 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={jobData.location}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-200 p-2 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={jobData.description}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-200 p-2 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Requirements
              </label>
              <textarea
                name="requirements"
                value={jobData.requirements}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-200 p-2 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={jobData.deadline}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-200 p-2 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Salary Range
                </label>
                <input
                  type="text"
                  name="salary_range"
                  value={jobData.salary_range}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-200 p-2 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-[#ff9b71] px-4 py-2 text-white hover:bg-[#ff8c5c] disabled:opacity-50"
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
