import React from "react";
import { ArrowRight } from "lucide-react";
import categories from "@/app/data/index/job-categories";

export default function Category() {
  return (
    <div className="min-h-[50vh] bg-[#fffaf8]">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        <div className="mb-10 max-w-[80vw] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-0">
              Browse by Category
            </h1>
            <p className="text-lg text-gray-600">
              Find your dream job in our popular categories
            </p>
          </div>
          <button className="group flex items-center text-md font-semibold text-[#ff9b71] hover:text-[#ffb699] transition-colors">
            View All Categories
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff9b71]/10 text-[#ff9b71]">
                {category.icon}
              </div>
              <div className="mt-4 space-y-2">
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-[#ff9b71] transition-colors">
                  {category.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {category.openPositions.toLocaleString()} Positions
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
