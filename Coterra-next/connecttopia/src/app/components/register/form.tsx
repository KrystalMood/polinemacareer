import { useState } from "react";
import templateImage from "@/public/templatePost.png";
import Link from "next/link";
import {
  Apple,
  Facebook,
  Mail,
  User,
  Phone,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="flex min-h-screen">
        {/* Left Image Section */}
        <div className="hidden lg:block w-1/2">
          <Image
            src={templateImage}
            alt="Registration visual"
            className="object-cover h-screen w-full shadow-md"
          />
        </div>

        {/* Right Form Section */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-16 py-6">
          <div className="absolute top-4 left-4 text-gray-600 ">
            <Link href={"/"}>
              <RiArrowGoBackFill size={26} />
            </Link>
          </div>
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                Create Account
              </h1>
              <p className="mt-2 text-gray-600">
                Join us to get started with your journey
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Email Input */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Username Input */}
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                    required
                  />
                </div>
              </div>

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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Create Account
              </button>
            </form>

            {/* Social Login Section */}
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
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
