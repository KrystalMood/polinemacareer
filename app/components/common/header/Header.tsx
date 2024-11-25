import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link as RemixLink } from "@remix-run/react";
import { MENU_ITEMS } from "~/constants/navigation";
import { getPathFromMenuItem } from "~/utils/navigation";
import { HeaderProps } from "~/types/header";
import { useAuth } from "~/hooks/useAuth";
import { UserDropdown } from "./UserDropdown";
import { DesktopAuthButtons } from "./DesktopAuthButtons";
import { LogoSection } from "./LogoSection";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

export default function Header({ className = "" }: HeaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const { isLoggedIn, userData, handleLogout } = useAuth();

  useEffect(() => {
    const path = window.location.pathname;
    const index = MENU_ITEMS.findIndex(
      (item) => getPathFromMenuItem(item.label) === path
    );
    if (index !== -1) {
      setCurrentPage(index);
    }
  }, []);

  const handleSwitchPage = (index: number) => {
    setCurrentPage(index);
    setIsActive(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm ${className}`}>
      <div className="h-16 px-6 md:px-8 mx-auto max-w-[90vw]">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <LogoSection />

          {/* Desktop Navigation */}
          <DesktopNavigation 
            currentPage={currentPage}
            handleSwitchPage={handleSwitchPage}
          />

          {/* Desktop Auth Buttons */}
          <DesktopAuthButtons 
            isLoggedIn={isLoggedIn}
            userData={userData}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            handleLogout={handleLogout}
          />

          {/* Mobile Menu Button */}
          <MobileMenuButton 
            isActive={isActive}
            setIsActive={setIsActive}
          />

          {/* Mobile Menu */}
          <MobileMenu 
            isActive={isActive}
            currentPage={currentPage}
            handleSwitchPage={handleSwitchPage}
            isLoggedIn={isLoggedIn}
            userData={userData}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            handleLogout={handleLogout}
          />
        </div>
      </div>
    </header>
  );
} 