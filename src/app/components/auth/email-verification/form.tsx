import { ArrowRight } from "lucide-react";
import React from "react";

export default function EmailVerificationForm() {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col justify-center items-center space-y-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <h1 className="text-4xl text-gray-900">Email Verification</h1>
        <p className="font-light max-w-xl text-center text-gray-500">
          We've sent an verification to{" "}
          <span className="text-black">emailaddress@gmail.com</span> to verify
          your email address and activate your account.
        </p>

        <form className="space-y-8">
          <div className="w-full">
            <input
              type="email"
              placeholder="Verification Code"
              className="w-[35rem] pl-5 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-4 w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            onClick={() => (window.location.href = "/")}
          >
            Verify My Account <ArrowRight />
          </button>
        </form>

        <div className="w-full mx-auto flex flex-col justify-center items-center">
          <p className="text-gray-600">
            Didn't receive the code?{" "}
            <span className="text-amber-400 hover:underline cursor-pointer">
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
