import { Link as RemixLink } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { MENU_ITEMS } from "~/constants/navigation";
import { getPathFromMenuItem } from "~/utils/navigation";
import { UserData } from "~/types/header";
import { UserDropdown } from "./UserDropdown";

interface MobileMenuProps {
  isActive: boolean;
  currentPage: number;
  handleSwitchPage: (index: number) => void;
  isLoggedIn: boolean;
  userData: UserData | null;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  handleLogout: () => void;
}

export const MobileMenu = ({
  isActive,
  currentPage,
  handleSwitchPage,
  isLoggedIn,
  userData,
  showDropdown,
  setShowDropdown,
  handleLogout
}: MobileMenuProps) => {
  if (!isActive) return null;

  return (
    <div className="absolute top-16 left-0 right-0 bg-white border-t border-gray-100 md:hidden">
      <div className="p-4 space-y-4">
        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {MENU_ITEMS.map((item, index) => (
            <RemixLink
              key={item.label}
              to={getPathFromMenuItem(item.label)}
              onClick={() => handleSwitchPage(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                ${currentPage === index
                  ? "text-[#ff9b71] bg-[#ff9b71]/10"
                  : "text-gray-600 hover:text-[#ff9b71] hover:bg-[#ff9b71]/10"
                }`}
            >
              {item.label}
            </RemixLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        {isLoggedIn ? (
          <UserDropdown 
            userData={userData}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            handleLogout={handleLogout}
          />
        ) : (
          <div className="flex flex-col gap-2">
            <RemixLink
              to="/login"
              className="w-full px-4 py-2 text-sm font-medium text-center text-gray-700 hover:text-[#ff9b71] transition-colors duration-200"
            >
              Login
            </RemixLink>
            <RemixLink
              to="/register"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#ff9b71] rounded-lg hover:bg-[#ff9b71]/90 transition-colors duration-200"
            >
              Register
              <ArrowRight className="w-4 h-4" />
            </RemixLink>
          </div>
        )}
      </div>
    </div>
  );
}; 