import { Link } from "@remix-run/react";
import { BellIcon, BriefcaseIcon, Home, LogOut, UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const menu = [
  {
    name: "Home",
    icon: <Home />,
    path: "/dashboard/home",
  },
  {
    name: "Jobs",
    icon: <BriefcaseIcon />,
    path: "/dashboard/jobs",
  },
  {
    name: "Profile",
    icon: <UserIcon />,
    path: "/dashboard/profile",
  },
  {
    name: "Logout",
    icon: <LogOut />,
    path: "/",
  },
];
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentIndex, setCurrentIndex] = useState("home");

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const currentPath = pathSegments[pathSegments.length - 1];
    setCurrentIndex(currentPath);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="fixed left-0 top-0 z-50 h-16 w-full border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src="/favicon.ico" alt="logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-gray-900">Polinema Career</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-[#fffaf8]">
              <BellIcon className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <img
                src="/temp.jpg"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-700">
                Pramudya
              </span>
            </div>
          </div>
        </div>
      </div>

      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white">
        <div className="flex flex-col gap-2 p-4">
          {menu.map((item) => {
            const menuPath = item.path.split("/").pop();
            const isActive = currentIndex === menuPath;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700 hover:bg-gray-50"
                }
                ${item.name.toLowerCase() === "logout" ? "bg-red-50 text-red-400" : ""}`}
              >
                <div
                  className={`${
                    isActive ? "text-orange-600" : "text-gray-500"
                  }
                  ${
                    item.name.toLowerCase() === "logout"
                      ? "text-red-400"
                      : "text-gray-500"
                  }
                  `}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      <div className="ml-64 p-8 pt-16">{children}</div>
    </main>
  );
}
