import React from "react";
import { ArrowRight } from "lucide-react";
import categories from "@/app/data/index/job-categories";

export default function IndexCategory() {
  return (
    <div className="min-h-[50vh] bg-slate-50">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        <div className="mb-10 max-w-[80vw] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-0">
              Popular Category
            </h1>
            <p className="text-lg text-slate-600">
              Find your dream job in our popular category
            </p>
          </div>
          <button className="group flex items-center text-md font-semibold text-sky-600 hover:text-sky-700 transition-colors">
            View All Categories
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group block space-y-4 rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                {category.icon}
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-slate-900">
                  {category.title}
                </h2>
                <p className="text-sm text-slate-400">
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
