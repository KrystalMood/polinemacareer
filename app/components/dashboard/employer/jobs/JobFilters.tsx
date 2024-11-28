import { ArrowUpDown, Search } from "lucide-react";
import React from "react";

export default function JobFilters() {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Find job"
            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20"
          />
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-[#ff9b71] px-4 py-2 text-white focus:outline-none">
          <ArrowUpDown className="h-4 w-4" />
          <span>Date</span>
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-[#ff9b71] px-4 py-2 text-white focus:outline-none">
          <ArrowUpDown className="h-4 w-4" />
          <span>Status</span>
        </button>

        <select className="rounded-lg border border-gray-200 py-2 pl-4 pr-8 focus:border-[#ff9b71] focus:outline-none focus:ring-2 focus:ring-[#ff9b71]/20">
          <option value="active">Active</option>
          <option value="closed">Closed</option>
          <option value="draft">Draft</option>
        </select>
      </div>
    </div>
  );
}
