import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import templateImage from "@/public/pakjokowi.jpeg";
import Image from "next/image";

const listMenu = ["Home", "Contact", "About Us"];

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [user, setUser] = useState<any | null>(null);

  // This effect runs on component mount to load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      console.log("User found in localStorage:", storedUser); // Debugging log
      setUser(JSON.parse(storedUser));
    }
  }, []); // Only runs once on mount

  // Debugging: Watch for any changes in the user state
  useEffect(() => {
    console.log("Current user state:", user); // Debugging log
  }, [user]);

  // Handle logout and clear localStorage
  const handleLogout = () => {
    console.log("Logging out..."); // Debugging log
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/"; // Redirect to home after logout
  };

  // Get the correct path for the menu items
  const getPathFromMenuItem = (menuItem: string) => {
    if (menuItem === "Home") return "/main/dashboard/pelamar";
    if (menuItem === "Contact") return "/main/contact";
    if (menuItem === "About Us") return "/main/about-us";
    return `/${menuItem.toLowerCase().replace(/\s+/g, "")}`;
  };

  // Update the currentPage state when the pathname changes
  useEffect(() => {
    const path = window.location.pathname;
    const index = listMenu.findIndex(
      (item) => getPathFromMenuItem(item) === path
    );
    if (index !== null) {
      setCurrentPage(index);
    }
  }, [user]); // Only runs on initial mount

  // Switch page (for active menu items)
  const handleSwitchPage = (index: number) => {
    setCurrentPage(index);
    setIsActive(false); // Close the mobile menu after switching page
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C2056] shadow-lg text-white backdrop-blur-md">
      <div className="h-16 px-6 md:px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-full">
          <button onClick={() => (window.location.href = "/")}>
           <h1 className="font-bold text-2xl md:text-3xl text-amber-400 hover:text-amber-300 hover:scale-105 transition-all duration-500 tracking-tight">
            PolinemaCareer
          </h1>
        </button>
         

          <nav className="hidden md:flex items-center gap-10">
            {listMenu.map((menuItem, index) => (
              <Link
                href={getPathFromMenuItem(menuItem)}
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
            {user ? (
              <>
                <div className="ml-44 relative group">
                  <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
                    <div className="relative">
                      <Image
                        src={user.photoURL || templateImage}
                        alt="user photo"
                        width={40}
                        height={40}
                        className="rounded-full object-cover shadow-md border-2 border-amber-400"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm" />
                    </div>
                    <div className="group-hover:rotate-180 transition-transform duration-300">
                      <ChevronDown className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      href="/main/dashboard/pelamar"
                      className="block px-4 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-600"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-600"
                    >
                      Profile
                    </Link>

                    <div className="h-px bg-gray-200 my-2"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
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
                      href={getPathFromMenuItem(menuItem)}
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
