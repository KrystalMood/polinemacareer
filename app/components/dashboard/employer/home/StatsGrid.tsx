import { Users, BriefcaseIcon, CheckCircle } from "lucide-react";

const stats = [
  {
    title: "Total Vacancies",
    value: "12", 
    icon: <BriefcaseIcon className="h-6 w-6 text-blue-600" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Total Applicants",
    value: "48",
    icon: <Users className="h-6 w-6 text-green-600" />,
    bgColor: "bg-green-50",
  },
  {
    title: "Accepted Applicants",
    value: "15",
    icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
    bgColor: "bg-orange-50",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}