import { Clock, Edit2, MoreVertical, Trash2, Users } from "lucide-react";
import React from "react";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    type: "Full Time",
    applicants: 10,
    status: "Active",
    deadline: "2024-01-01",
    created: "2024-01-01",
  },
  {
    id: 2,
    title: "Database Engineer",
    type: "Full Time",
    applicants: 10,
    status: "Active",
    deadline: "2024-01-01",
    created: "2024-01-01",
  },
];
export default function JobsList() {
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
                <td className="px-4 px-6">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : job.status === "Closed"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
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
                    <button className="rounded-lg p-1 hover:bg-gray-100">
                      <Edit2 className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="rounded-lg p-1 hover:bg-gray-100">
                      <Trash2 className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="rounded-lg p-1 hover:bg-gray-100">
                      <MoreVertical className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
