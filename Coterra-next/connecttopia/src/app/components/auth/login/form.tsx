import templateImage from "@/public/index/work.png";
import { Mail, Lock, Eye, EyeOff, Facebook, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="h-screen">
      <div className="flex w-full justify-between items-center  bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="flex flex-col w-full lg:w-[50vw] justify-center items-center">
          <div className="absolute top-4 left-4 text-gray-600 transition-all duration-300 hover:scale-110">
            <Link href={"/"}>
              <RiArrowGoBackFill size={26} />
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tighter">
            Login
          </h1>
          <p className="mt-2 text-gray-600">
            Unlock Endless Possibilities with Us
          </p>

          {/*Form Section */}
          <form className="mt-10 space-y-9 w-[30vw]">
            {/** Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
              />
            </div>

            {/** Password Input */}
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/** Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Login
              </button>
              <p className="w-full inline-flex justify-end mt-2 font-thin text-gray-600">
                <Link
                  href="/auth/forget-password"
                  className="text-end text-sm hover:underline hover:text-gray-800 transition-all duration-300"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
          </form>
          <Link
            href="/auth/register"
            className=" mt-2 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-all duration-300"
          >
            Create Account
          </Link>

          {/** Social Login Section */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-br from-blue-50 to-blue-100 text-gray-600">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button className="p-3 rounded-lg border border-gray-300 hover:border-gray-400 bg-white shadow-sm transition-colors">
                <Facebook className="h-6 w-6 text-blue-600" />
              </button>
              <button className="p-3 rounded-lg border border-gray-300 hover:border-gray-400 bg-white shadow-sm transition-colors">
                <Apple className="h-6 w-6 text-gray-900" />
              </button>
              <button className="p-3 rounded-lg border border-gray-300 hover:border-gray-400 bg-white shadow-sm transition-colors">
                <Mail className="h-6 w-6 text-red-500" />
              </button>
            </div>
          </div>
        </div>

        {/*Right Image Section */}
        <div className="hidden lg:block">
          <Image
            src={templateImage}
            alt="Login Visual"
            className="h-screen object-cover w-[50vw]"
          />
        </div>
      </div>
    </section>
  );
}
