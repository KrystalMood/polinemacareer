import React, { useState } from "react";

export default function ApplicantDashboard() {
  const [ongoingApplications, setOngoingApplications] = useState<any[]>([
    {
      no: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York",
      appliedDate: "2023-11-10",
      status: "In Review",
    },
    {
      no: 2,
      title: "Product Manager",
      company: "Innovate LLC",
      location: "San Francisco",
      appliedDate: "2023-11-12",
      status: "Waiting for Interview",
    },
  ]);

  const [completedApplications, setCompletedApplications] = useState<any[]>([
    {
      no: 1,
      title: "UX Designer",
      company: "Design Studios",
      location: "Los Angeles",
      decisionDate: "2023-11-01",
      result: "Accepted",
    },
    {
      no: 2,
      title: "Data Scientist",
      company: "Data Solutions",
      location: "Chicago",
      decisionDate: "2023-10-25",
      result: "Rejected",
    },
  ]);

  const [interviewSchedules, setInterviewSchedules] = useState<any[]>([
    {
      no: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      interviewDate: "2023-11-22",
      time: "10:00 AM",
      type: "Online",
      status: "Confirmed",
    },
    {
      no: 2,
      title: "Product Manager",
      company: "Innovate LLC",
      interviewDate: "2023-11-25",
      time: "2:00 PM",
      type: "On-Site",
      status: "Rescheduled",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="py-28 mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 mb-10">
          Welcome to Your Dashboard
        </h1>

        {/* Tabel 1: Aplikasi yang Sedang Berlangsung */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Aplikasi yang Sedang Berlangsung
          </h2>
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Job Title</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Applied Date</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {ongoingApplications.map((application, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{application.no}</td>
                  <td className="px-4 py-2">{application.title}</td>
                  <td className="px-4 py-2">{application.company}</td>
                  <td className="px-4 py-2">{application.location}</td>
                  <td className="px-4 py-2">{application.appliedDate}</td>
                  <td className="px-4 py-2">{application.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabel 2: Riwayat Lamaran yang Telah Selesai */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Riwayat Lamaran yang Telah Selesai
          </h2>
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-md">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Job Title</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Decision Date</th>
                <th className="px-4 py-2">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {completedApplications.map((application, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{application.no}</td>
                  <td className="px-4 py-2">{application.title}</td>
                  <td className="px-4 py-2">{application.company}</td>
                  <td className="px-4 py-2">{application.location}</td>
                  <td className="px-4 py-2">{application.decisionDate}</td>
                  <td className="px-4 py-2">{application.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabel 3: Jadwal Wawancara */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Jadwal Wawancara
          </h2>
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-md">
            <thead className="bg-yellow-500 text-white">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Job Title</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Interview Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Interview Type</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {interviewSchedules.map((interview, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{interview.no}</td>
                  <td className="px-4 py-2">{interview.title}</td>
                  <td className="px-4 py-2">{interview.company}</td>
                  <td className="px-4 py-2">{interview.interviewDate}</td>
                  <td className="px-4 py-2">{interview.time}</td>
                  <td className="px-4 py-2">{interview.type}</td>
                  <td className="px-4 py-2">{interview.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
