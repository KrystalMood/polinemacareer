import React from "react";

export default function HistoryHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="rounded-xl bg-white p-6 shadow-sm mt-2">
        <h1 className="text-2xl font-bold text-gray-900">
          Application History
        </h1>
        <p className="mt-1 text-gray-600">
          Here you can see your application history
        </p>
      </div>
    </div>
  );
}
