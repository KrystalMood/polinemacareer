import { PlusCircle } from "lucide-react";

export default function JobsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="rounded-xl bg-white p-6 shadow-sm mt-2">
        <h1 className="text-2xl font-bold text-gray-900">Job Vacancies</h1>
        <p className="mt-1 text-gray-600">
          Find job vacancies that match your skills
        </p>
      </div>
      
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff9b71] text-white rounded-lg hover:bg-[#ff8c5c] transition-colors">
        <PlusCircle className="w-5 h-5" />
        <span>Apply for Job</span>
      </button>
    </div>
  );
}