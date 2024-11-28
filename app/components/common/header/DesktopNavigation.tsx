import { Link as RemixLink } from "@remix-run/react";
import { MENU_ITEMS } from "~/constants/navigation";
import { getPathFromMenuItem } from "~/utils/navigation";

interface DesktopNavigationProps {
  currentPage: number;
  handleSwitchPage: (index: number) => void;
}

export const DesktopNavigation = ({ 
  currentPage, 
  handleSwitchPage 
}: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center gap-2">
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
  );
}; 