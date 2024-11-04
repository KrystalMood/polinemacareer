import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import RegisterButton from '../components/RegisterButton';

const listMenu = ["Home", "Contact", "About Us"];
const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to PolinemaCarrier</h1>
      <Link
        href="/auth/register"
        className="block text-center px-8 py-3 rounded-full text-gray-900 font-semibold bg-[#F7D13A] hover:bg-[#F7D13A]/90 transition duration-300"
      >
        Register Now
      </Link>
    </div>
  );
};

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
      <div className="h-16 px-6 md:px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-full">
          <h1 className="font-bold text-xl md:text-xl text-[#F7D13A] hover:scale-105 transition-all duration-500 tracking-tight">
            PolinemaCarrier
          </h1>

          <nav className="hidden md:flex items-center gap-10">
            {listMenu.map((menuItem, index) => (
              <Link
                href={menuItem === "Home"
                  ? "/"
                  : `/${menuItem.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => handleSwitchPage(index)}
                key={menuItem}
                className={`text-gray-100 font-medium tracking-wide cursor-pointer hover:text-[#F7D13A] hover:scale-105 transition duration-300 ${currentPage === index
                    ? "border-b-2 border-[#3498db] text-[#3498db]"
                    : ""} `}
              >
                {menuItem}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-8 font-semibold">
            <Link
              href="/auth/login"
              className="cursor-pointer text-gray-100 font-medium hover:text-[#F7D13A] hover:scale-105 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="cursor-pointer px-5 py-2 flex items-center gap-2 rounded-full text-gray-900  bg-[#F7D13A] hover:scale-105 hover:bg-[#F7D13A]/90 transition duration-300"
            >
              Register Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={handleClick}
              className="text-gray-100 hover:text-[#F7D13A] transition duration-300"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

          <div
            className={`fixed h-screen inset-y-0 right-0 w-full max-w-sm bg-white transform transition-transform duration-300 ease-in-out ${isActive ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="h-full flex flex-col p-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={handleClick}
                  className="text-gray-500 hover:text-gray-900 transition duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8">
                <div className="h-px bg-gray-200" />
                <nav className="mt-8 flex flex-col space-y-6">
                  {listMenu.map((menuItem, index) => (
                    <Link
                      href={menuItem === "Home"
                        ? "/"
                        : `/${menuItem.toLowerCase().replace(/\s+/g, "-")}`}
                      key={menuItem}
                      onClick={() => handleSwitchPage(index)}
                      className={`text-lg font-medium text-gray-900 hover:text-[#F7D13A] transition duration-300 ${currentPage === index
                          ? "border-b-2 border-[#3498db] text-[#3498db]"
                          : ""} `}
                    >
                      {menuItem}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-auto space-y-6">
                <Link
                  href="/auth/login"
                  className="block text-center text-lg font-medium text-gray-900 hover:text-[#F7D13A] transition duration-300"
                >
                  Login
                </Link>

                <Link
                  href="/auth/register"
                  className="block text-center px-8 py-3 rounded-full text-gray-900 font-semibold bg-[#F7D13A] hover:bg-[#F7D13A]/90 transition duration-300"
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

export { HomePage, Header };