import { ArrowRight, Mail, Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function ForgetPasswordForm() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/** Back Arrow */}
      <div className="absolute top-4 left-4 text-gray-800 transition-all duration-300 hover:scale-110 ">
        <Link href={"/"}>
          <RiArrowGoBackFill size={26} />
        </Link>
      </div>
      {/** Header Section */}
      <div className="h-full w-fit mx-auto space-y-6 flex flex-col items-start justify-center text-start pr-[12rem]">
        <h1 className="text-4xl">Forget Password</h1>
        <div className="space-y-2">
          <p className="font-light text-gray-600">
            Go back to{" "}
            <Link href="/register" className="text-sky-600">
              Sign in
            </Link>
          </p>
          <p className="font-light text-gray-600">
            Don't have an account? {""}
            <Link href="/login" className="text-sky-600">
              Create Account
            </Link>
          </p>
        </div>

        {/** Form */}
        <form className="mt-4 w-[30rem] space-y-5">
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
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-4 w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Reset Password <ArrowRight />
          </button>
        </form>
        <div className="mt-8 w-full justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gradient-to-br from-blue-50 to-blue-100 text-gray-600">
                Or
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4 w-full">
            <button className="w-full inline-flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-300 hover:border-gray-400 bg-white shadow-sm transition-colors">
              <Facebook className="h-6 w-6 text-blue-600" />
              Sign in with Facebook
            </button>
            <button className="w-full inline-flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-300 hover:border-gray-400 bg-white shadow-sm transition-colors">
              <Mail className="h-6 w-6 text-red-500" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
