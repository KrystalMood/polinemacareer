import { X } from "lucide-react";
import React, { useState } from "react";

interface CreateJobFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateJobForm({
  onClose,
  onSuccess,
}: CreateJobFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const jobData = {
      title: formData.get("title"),
      type: formData.get("type"),
      location: formData.get("location"),
      description: formData.get("description"),
      requirements: formData.get("requirements"),
      deadline: formData.get("deadline"),
      salary_range: formData.get("salary_range"),
    };

    try {
      const response = await fetch(
        "http://localhost/polinema_career/api/jobs/create.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jobData),
        },
      );

      const data = await response.json();
      if (data.status === "success") {
        onSuccess();
        onClose();
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (err) {
      setError("Server error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-xl bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Create New Job</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
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
                  placeholder="Example: Rp 5,000,000 - Rp 8,000,000"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-200 p-2 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
                />
              </div>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-[#ff9b71] text-white rounded-lg hover:bg-[#ff8c5c] disabled:opacity-50"
            >
              {isLoading ? "Processing..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
