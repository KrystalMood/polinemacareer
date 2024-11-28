import { ArrowUpDown, Search } from "lucide-react";

interface JobFiltersProps {
  onSort: (field: string) => void;
}

export default function JobFilters({ onSort }: JobFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Cari lowongan..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]"
          />
        </div>

        {/* Sort */}
        <button
          onClick={() => onSort('created_at')}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-50 flex items-center gap-2"
        >
          <ArrowUpDown className="w-4 h-4" />
          Tanggal
        </button>

        <button
          onClick={() => onSort('title')}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-50 flex items-center gap-2"
        >
          <ArrowUpDown className="w-4 h-4" />
          Judul
        </button>

        <button
          onClick={() => onSort('company')} 
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-50 flex items-center gap-2"
        >
          <ArrowUpDown className="w-4 h-4" />
          Perusahaan
        </button>

        {/* Filters */}
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]">
          <option value="">Semua Kategori</option>
          <option value="fulltime">Full Time</option>
          <option value="parttime">Part Time</option>
          <option value="intern">Internship</option>
        </select>

        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71]">
          <option value="">Semua Lokasi</option>
          <option value="malang">Malang</option>
          <option value="surabaya">Surabaya</option>
          <option value="jakarta">Jakarta</option>
        </select>
      </div>
    </div>
  );
} 