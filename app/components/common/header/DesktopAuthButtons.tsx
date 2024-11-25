import { Link as RemixLink } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { UserData } from "~/types/header";
import { UserDropdown } from "./UserDropdown";

interface DesktopAuthButtonsProps {
  isLoggedIn: boolean;
  userData: UserData | null;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  handleLogout: () => void;
}

export const DesktopAuthButtons = ({
  isLoggedIn,
  userData,
  showDropdown,
  setShowDropdown,
  handleLogout
}: DesktopAuthButtonsProps) => {
  if (isLoggedIn) {
    return (
      <div className="hidden md:block">
        <UserDropdown 
          userData={userData}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          handleLogout={handleLogout}
        />
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-4">
      <RemixLink
        to="/login"
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#ff9b71] transition-colors duration-200"
      >
        Login
      </RemixLink>
      <RemixLink
        to="/register"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#ff9b71] rounded-lg hover:bg-[#ff9b71]/90 transition-colors duration-200"
      >
        Register
        <ArrowRight className="w-4 h-4" />
      </RemixLink>
    </div>
  );
}; 