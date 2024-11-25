import { ChevronDown, LogOut, User } from "lucide-react";
import { Link as RemixLink } from "@remix-run/react";
import { UserData } from "~/types/header";

interface UserDropdownProps {
  userData: UserData | null;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  handleLogout: () => void;
}

export const UserDropdown = ({
  userData,
  showDropdown,
  setShowDropdown,
  handleLogout,
}: UserDropdownProps) => {
  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
      >
        <User className="w-5 h-5 text-[#ff9b71]" />
        <span className="text-gray-700">{userData?.fullName}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
          <RemixLink
            to={userData?.role === "job_seeker" ? "/main/dashboard/pelamar" : "/main/dashboard/perusahaan"}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </RemixLink>
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}; 