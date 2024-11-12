import templateImage from "@/public/index/work.png";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { handleLoginSubmit } from "@/app/libs/utils/auth";
import { FormData } from "@/app/types/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleLoginSubmit(formData, setError, router);
  };

  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <Image
        src={templateImage}
        alt="Login Visual"
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
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight text-center mb-2">
            Login
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Unlock Endless Possibilities with Us
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
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
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Login
            </button>
            {error && (
              <>
                <p className="text-red-500 text-center mb-4">{error}</p>
                {setTimeout(() => setError(""), 3000)}
              </>
            )}
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/auth/forget-password"
              className="text-sm text-gray-600 hover:underline hover:text-gray-800 transition-all duration-300"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/auth/register"
              className="text-gray-900 font-semibold hover:underline transition-all duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
