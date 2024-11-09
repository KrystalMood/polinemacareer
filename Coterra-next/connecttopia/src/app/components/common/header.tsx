import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import RegisterButton from "../RegisterButton";

const listMenu = ["Home", "Contact", "About Us"];

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const getPathFromMenuItem = (menuItem: string) => {
    return menuItem === "Home"
      ? "/"
      : `/${menuItem.toLowerCase().replace(/\s+/g, "")}`;
  };

  useEffect(() => {
    const path = window.location.pathname;
    const index = listMenu.findIndex(
      (item) => getPathFromMenuItem(item) === path
    );
    if (index !== -1) {
      setCurrentPage(index);
    }
  });

  const handleSwitchPage = (index: number) => {
    setCurrentPage(index);
    setIsActive(false);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C2056] shadow-lg text-white backdrop-blur-md">
      <div className="h-20 px-6 md:px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-full">
          <h1 className="font-bold text-2xl md:text-3xl text-amber-400 hover:text-amber-300 hover:scale-105 transition-all duration-500 tracking-tight">
            PolinemaCarrier
          </h1>

          <nav className="hidden md:flex items-center gap-10">
            {listMenu.map((menuItem, index) => (
              <Link
                href={
                  menuItem === "Home"
                    ? "/"
                    : `/${menuItem.toLowerCase().replace(/\s+/g, "-")}`
                }
                onClick={() => handleSwitchPage(index)}
                key={menuItem}
                className={`text-gray-200 font-medium tracking-wide cursor-pointer hover:text-amber-300 hover:scale-105 transition duration-300 ${
                  currentPage === index
                    ? "border-b-2 border-amber-400 text-amber-400"
                    : ""
                } `}
              >
                {menuItem}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-8 font-semibold">
            <Link
              href="/auth/login"
              className="cursor-pointer text-gray-200 font-medium hover:text-amber-300 hover:scale-105 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="cursor-pointer px-6 py-2 flex items-center gap-2 rounded-full text-indigo-900 bg-amber-400 hover:bg-amber-300 hover:scale-105 transition duration-300 shadow-md"
            >
              Register Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={handleClick}
              className="text-gray-200 hover:text-amber-300 transition duration-300"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

          <div
            className={`fixed h-screen inset-y-0 right-0 w-full max-w-sm bg-gradient-to-b from-indigo-900 to-purple-900 transform transition-transform duration-300 ease-in-out ${
              isActive ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col p-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-amber-400">Menu</h2>
                <button
                  onClick={handleClick}
                  className="text-gray-300 hover:text-amber-300 transition duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8">
                <div className="h-px bg-indigo-700" />
                <nav className="mt-8 flex flex-col space-y-6">
                  {listMenu.map((menuItem, index) => (
                    <Link
                      href={
                        menuItem === "Home"
                          ? "/"
                          : `/${menuItem.toLowerCase().replace(/\s+/g, "-")}`
                      }
                      key={menuItem}
                      onClick={() => handleSwitchPage(index)}
                      className={`text-lg font-medium text-gray-200 hover:text-amber-300 transition duration-300 ${
                        currentPage === index
                          ? "border-b-2 border-amber-400 text-amber-400"
                          : ""
                      } `}
                    >
                      {menuItem}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-auto space-y-6">
                <Link
                  href="/auth/login"
                  className="block text-center text-lg font-medium text-gray-200 hover:text-amber-300 transition duration-300"
                >
                  Login
                </Link>

                <Link
                  href="/auth/register"
                  className="block text-center px-8 py-3 rounded-full text-indigo-900 font-semibold bg-amber-400 hover:bg-amber-300 transition duration-300 shadow-md"
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
