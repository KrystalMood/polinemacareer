import { Link, useNavigate } from "@remix-run/react";
import { 
  Home, 
  BriefcaseIcon, 
  Users, 
  Settings,
  LogOut,
  Bell
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "~/hooks/useAuth";

const menu = [
  {
    name: "Home",
    icon: <Home />,
    path: "/dashboard/employer/home",
  },
  {
    name: "Jobs",
    icon: <BriefcaseIcon />,
    path: "/dashboard/employer/jobs", 
  },
  {
    name: "Applicants",
    icon: <Users />,
    path: "/dashboard/employer/applicants",
  },
  {
    name: "Settings",
    icon: <Settings />,
    path: "/dashboard/employer/settings",
  }
];

export default function EmployerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed left-0 top-0 z-50 h-16 w-full border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src="/favicon.ico" alt="logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-gray-900">Dashboard Perusahaan</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-50"
              >
                <img
                  src="/company-logo.jpg"
                  alt=""
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700">
                  {userData?.companyName || "Perusahaan"}
                </span>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"
                  >
                    Keluar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white">
        <div className="flex flex-col gap-2 p-4">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50"
            >
              <div className="text-gray-500">{item.icon}</div>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 p-8 pt-16">{children}</div>
    </main>
  );
} 