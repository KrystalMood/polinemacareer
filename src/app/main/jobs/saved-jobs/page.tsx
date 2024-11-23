"use client";
import React from "react";
import Header from "@/app/components/common/header/header";
import Footer from "@/app/components/common/footer";
import PositionContent from "@/app/components/jobs/saved-job/content";

export default function SavedJobsPage() {
  const savedJobs = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Saved Jobs</h1>

          <div className="space-y-6">
            {savedJobs.length > 0 ? (
              <div className="space-y-4">
                {savedJobs.map((job, index) => (
                  <PositionContent key={index} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-12 text-lg">
                You haven’t saved any jobs yet! Start exploring and save your
                favorites.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
