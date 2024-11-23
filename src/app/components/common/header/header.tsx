import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import templateImage from "@/public/pakjokowi.jpeg";
import Image from "next/image";
import { useHeaderScroll } from "./hooks/useHeaderScroll";
import { useHeaderAuth } from "./hooks/useHeaderAuth";
import { useHeaderNavigation } from "./hooks/useHeaderNavigation";
import { MENU_ITEMS, getPathFromMenuItem } from "./utils/constants";
import logo from "@/public/logo.png";
function Header() {
  const { user, handleLogout } = useHeaderAuth();
  const { currentPage, isActive, handleSwitchPage, handleMenuClick } =
    useHeaderNavigation();

  useHeaderScroll();

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
            <Image
              src={logo}
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
              <Link
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
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-8 font-semibold">
            {user ? (
              <div className="ml-44 relative group">
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
                  <div className="relative">
                    <Image
                      src={user.photoURL || templateImage}
                      alt="user photo"
                      width={40}
                      height={40}
                      className="rounded-full object-cover shadow-md border-2 border-[#ff9b71]"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm" />
                  </div>
                  <div className="group-hover:rotate-180 transition-transform duration-200">
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <Link
                    href="/main/dashboard/pelamar"
                    className="block px-4 py-2 text-gray-600 hover:bg-[#ff9b71]/10 hover:text-[#ff9b71] transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-600 hover:bg-[#ff9b71]/10 hover:text-[#ff9b71] transition-colors duration-200"
                  >
                    Profile
                  </Link>
                  <div className="h-px bg-gray-100 my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-50 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="cursor-pointer font-medium text-gray-600 hover:text-[#ff9b71] hover:scale-105 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="cursor-pointer px-6 py-2 flex items-center gap-2 rounded-full text-white bg-[#ff9b71] hover:bg-[#ffb699] hover:scale-105 transition-all duration-200 shadow-sm"
                >
                  Register Now <ArrowRight className="w-5 h-5" />
                </Link>
              </>
            )}
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
                  href="/auth/login"
                  className="block text-center text-lg font-medium text-gray-600 hover:text-[#ff9b71] transition-all duration-200"
                >
                  Login
                </Link>

                <Link
                  href="/auth/register"
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
