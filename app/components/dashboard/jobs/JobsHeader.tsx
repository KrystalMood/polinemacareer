import { PlusCircle } from "lucide-react";

export default function JobsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Lowongan Pekerjaan</h1>
        <p className="mt-1 text-gray-600">
          Temukan lowongan pekerjaan yang sesuai dengan keahlian Anda
        </p>
      </div>
      
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff9b71] text-white rounded-lg hover:bg-[#ff8c5c] transition-colors">
        <PlusCircle className="w-5 h-5" />
        <span>Lamar Pekerjaan</span>
      </button>
    </div>
  );
} 