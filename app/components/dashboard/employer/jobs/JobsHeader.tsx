import { PlusCircle } from "lucide-react";
import CreateJobForm from "./CreateJobForm";
import { useState } from "react";

export default function JobsHeader() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="mt-2 rounded-xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Job Vacancies</h1>
          <p className="mt-1 text-gray-600">
            Create and manage your job vacancies
          </p>
        </div>

        <button 
        onClick={() => setShowCreateModal(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-[#ff9b71] px-4 py-2 text-white transition-colors hover:bg-[#ff8c5c]">
          <PlusCircle className="h-5 w-5" />
          <span>Create Job</span>
        </button>
      </div>

      {showCreateModal && (
        <CreateJobForm
          onClose={() => setShowCreateModal(false)}
          onSuccess={() => setShowCreateModal(false)}
        />
      )}
    </>
  );
}
