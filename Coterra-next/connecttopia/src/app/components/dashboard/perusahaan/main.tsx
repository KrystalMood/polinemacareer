import React, { useState } from "react";

export default function CompanyDashboard() {
  const [applications, setApplications] = useState<any[]>([
    {
      candidateName: "Pramud",
      jobTitle: "Software Engineer",
      applicationDate: "2024-11-10",
      status: "New",
    },
    {
      candidateName: "Gio",
      jobTitle: "Product Manager",
      applicationDate: "2024-11-12",
      status: "In Review",
    },
  ]);

  const [interviews, setInterviews] = useState<any[]>([
    {
      candidateName: "Zannur",
      jobTitle: "UX Designer",
      interviewDate: "2024-11-22",
      time: "10:00 AM",
      interviewType: "Online",
      interviewer: "HR Manager",
      status: "Confirmed",
    },
    {
      candidateName: "Fauzi",
      jobTitle: "Data Scientist",
      interviewDate: "2024-11-23",
      time: "02:00 PM",
      interviewType: "On-Site",
      interviewer: "Team Lead",
      status: "Rescheduled",
    },
  ]);

  const [history, setHistory] = useState<any[]>([
    {
      candidateName: "Mera",
      jobTitle: "Sales Manager",
      decisionDate: "2024-11-01",
      result: "Accepted",
      notes: "Great fit for the team.",
    },
    {
      candidateName: "Ata",
      jobTitle: "Graphic Designer",
      decisionDate: "2024-11-03",
      result: "Rejected",
      notes: "Lacked technical skills.",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
         <br />
        Company Dashboard
      </h1>
       
      {/* Tabel Aplikasi yang Masuk */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Aplikasi yang Masuk
        </h2>
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Candidate Name</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Application Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{app.candidateName}</td>
                <td className="px-4 py-2">{app.jobTitle}</td>
                <td className="px-4 py-2">{app.applicationDate}</td>
                <td className="px-4 py-2 text-sm font-semibold">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      app.status === "New"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Tabel Jadwal Wawancara */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Jadwal Wawancara
        </h2>
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Candidate Name</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Interview Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Interview Type</th>
              <th className="px-4 py-2">Interviewer</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((intv, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{intv.candidateName}</td>
                <td className="px-4 py-2">{intv.jobTitle}</td>
                <td className="px-4 py-2">{intv.interviewDate}</td>
                <td className="px-4 py-2">{intv.time}</td>
                <td className="px-4 py-2">{intv.interviewType}</td>
                <td className="px-4 py-2">{intv.interviewer}</td>
                <td className="px-4 py-2 text-sm font-semibold">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      intv.status === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {intv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Tabel Riwayat Aplikasi */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Riwayat Aplikasi
        </h2>
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Candidate Name</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Decision Date</th>
              <th className="px-4 py-2">Result</th>
              <th className="px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {history.map((rec, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{rec.candidateName}</td>
                <td className="px-4 py-2">{rec.jobTitle}</td>
                <td className="px-4 py-2">{rec.decisionDate}</td>
                <td className="px-4 py-2 text-sm font-semibold">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      rec.result === "Accepted"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {rec.result}
                  </span>
                </td>
                <td className="px-4 py-2">{rec.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
