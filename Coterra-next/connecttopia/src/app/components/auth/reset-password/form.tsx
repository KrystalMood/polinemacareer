import React from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from "next/link";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/** Back Arrow */}
      <div className="absolute top-4 left-4 text-gray-800 transition-all duration-300 hover:scale-110 ">
        <Link href={"/"}>
          <RiArrowGoBackFill size={26} />
        </Link>
      </div>
      <div className="w-full h-full mx-auto space-y-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl">Reset Password</h1>
        <p className="text-gray-600 font-light max-w-xl text-center">
          Duis luctus interdum metus, ut consectetur ante consectetur sed.
          Suspendisse euismod viverra massa sit amet mollis.
        </p>

        {/** Form */}
        <form className="space-y-8 w-2/5">
          {/* Password Input */}
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

          {/* Confirm Password Input */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <Eye className="h-5 w-5" />
                ) : (
                  <EyeOff className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/** Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
