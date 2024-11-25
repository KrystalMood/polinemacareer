import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Link, Menu, X } from "lucide-react";
import { MENU_ITEMS } from "~/constants/navigation";
import { getPathFromMenuItem } from "~/utils/navigation";
import { Link as RemixLink } from "@remix-run/react";

function Header() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Navigation Hook
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

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="h-16 px-6 md:px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-full">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="transition-all duration-200 flex items-center gap-2 hover:scale-105"
          >
            <img
              src={"/favicon.ico"}
              alt="logo"
              width={40}
              height={40}
              className="hover:scale-110 transition-all duration-200"
            />
            <h1 className="font-bold text-2xl md:text-3xl text-[#ff9b71] hover:text-[#ffb699] transition-all duration-200 tracking-tight">
              PolinemaCareer
            </h1>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {MENU_ITEMS.map((menuItem, index) => (
              <a
                href={getPathFromMenuItem(menuItem.label)}
                onClick={() => handleSwitchPage(index)}
                key={menuItem.label}
                className={`font-medium tracking-wide cursor-pointer text-gray-600 hover:text-[#ff9b71] hover:scale-105 transition-all duration-200 ${
                  currentPage === index
                    ? "border-b-2 border-[#ff9b71] text-[#ff9b71]"
                    : ""
                }`}
              >
                {menuItem.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-8 font-semibold">
            <RemixLink
              to="/login"
              className="cursor-pointer font-medium text-gray-600 hover:text-[#ff9b71] hover:scale-105 transition-all duration-200"
            >
              Login
            </RemixLink>
            <RemixLink
              to="/register"
              className="cursor-pointer px-6 py-2 flex items-center gap-2 rounded-full text-white bg-[#ff9b71] hover:bg-[#ffb699] hover:scale-105 transition-all duration-200 shadow-sm"
            >
              Register Now <ArrowRight className="w-5 h-5" />
            </RemixLink>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={handleMenuClick}
              className="text-gray-600 hover:text-[#ff9b71] transition-colors duration-200"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

          <div
            className={`fixed h-screen inset-y-0 right-0 w-full max-w-sm bg-white/95 backdrop-blur-sm transform transition-transform duration-200 ease-in-out ${
              isActive ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col p-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#ff9b71]">Menu</h2>
                <button
                  onClick={handleMenuClick}
                  className="text-gray-600 hover:text-[#ff9b71] transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8">
                <div className="h-px bg-gray-100" />
                <nav className="mt-8 flex flex-col space-y-6">
                  {MENU_ITEMS.map((menuItem, index) => (
                    <Link
                      href={getPathFromMenuItem(menuItem.label)}
                      key={menuItem.label}
                      onClick={() => handleSwitchPage(index)}
                      className={`text-lg font-medium text-gray-600 hover:text-[#ff9b71] transition-all duration-200 ${
                        currentPage === index
                          ? "border-b-2 border-[#ff9b71] text-[#ff9b71]"
                          : ""
                      }`}
                    >
                      {menuItem.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-auto space-y-6">
                <Link
                  href="/login"
                  className="block text-center text-lg font-medium text-gray-600 hover:text-[#ff9b71] transition-all duration-200"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="block text-center px-8 py-3 rounded-full text-white bg-[#ff9b71] hover:bg-[#ffb699] transition-all duration-200 shadow-sm"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
