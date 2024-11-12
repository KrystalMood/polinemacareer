import { useState } from "react";
import templateImage from "@/public/index/work.png";
import Link from "next/link";
import { Mail, User, Phone, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { RiArrowGoBackFill } from "react-icons/ri";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <Image
        src={templateImage}
        alt="Registration Visual"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="absolute top-4 left-4 text-white transition-all duration-300 hover:scale-110">
          <Link href={"/"}>
            <RiArrowGoBackFill size={26} />
          </Link>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Create Account
            </h1>
            <p className="mt-2 text-gray-600">
              Join to start your journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
              />
            </div>

            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
              />
            </div>

            {/* Password Input */}
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

            {/* Confirm Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              onClick={() =>
                (window.location.href = "/auth/email-verification")
              }
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
