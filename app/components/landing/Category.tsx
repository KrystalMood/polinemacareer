import React from "react";
import { ArrowRight } from "lucide-react";
import categories from "../../constants/categories";

export default function Category() {
  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h1>
          <p className="text-lg text-gray-600">
            Find your dream job in our popular categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
              transition-all duration-300 hover:-translate-y-1 border border-[#ff9b71]/10 
              hover:border-[#ff9b71]/30"
            >
              {/* Icon */}
              <div
                className="mb-4 p-3 bg-[#ff9b71]/10 rounded-xl inline-block
                group-hover:bg-[#ff9b71]/20 transition-all duration-300"
              >
                {React.cloneElement(category.icon, {
                  className:
                    "w-6 h-6 text-[#ff9b71] group-hover:scale-110 transition-all duration-300",
                })}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h2
                  className="text-lg font-semibold text-gray-900 
                  group-hover:text-[#ff9b71] transition-colors duration-200"
                >
                  {category.title}
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    {category.openPositions.toLocaleString()} Positions
                  </p>
                  <ArrowRight
                    className="w-4 h-4 text-[#ff9b71] opacity-0 group-hover:opacity-100 
                    group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="mt-10 text-center">
          <button
            className="inline-flex items-center px-8 py-3 bg-[#ff9b71]/10 
            text-[#ff9b71] font-semibold rounded-xl hover:bg-[#ff9b71] 
            hover:text-white transition-all duration-200"
          >
            View All Categories
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute -top-40 -left-20 w-72 h-72 bg-[#ff9b71]/5 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -right-20 w-72 h-72 bg-[#ff9b71]/5 rounded-full blur-3xl opacity-70" />
        </div>
      </div>
    </div>
  );
}
