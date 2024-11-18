import { useState } from "react";
import templateImage from "@/public/index/work.png";
import Link from "next/link";
import { Mail, User, Phone, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { handleRegisterSubmit } from "@/app/libs/utils/auth";
import { FormRegist } from "@/app/types/auth";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const [formRegist, setFormRegist] = useState<FormRegist>({
    nama: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "pelamar", // Default to 'pelamar'
  });
  const [error, setError] = useState("");

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleRegisterSubmit(formRegist, setError, router);
  };

  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <Image src={templateImage} alt="Registration Visual" layout="fill" objectFit="cover" quality={100} />

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
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create Account</h1>
            <p className="mt-2 text-gray-600">Join to start your journey</p>
          </div>

          {/* Form */}
          <form className="space-y-6" method="post" onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                id="nama"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
                value={formRegist.nama}
                onChange={(e) => setFormRegist({ ...formRegist, nama: e.target.value })}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
                value={formRegist.email}
                onChange={(e) => setFormRegist({ ...formRegist, email: e.target.value })}
              />
            </div>

            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
                value={formRegist.username}
                onChange={(e) => setFormRegist({ ...formRegist, username: e.target.value })}
              />
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
                value={formRegist.phone}
                onChange={(e) => setFormRegist({ ...formRegist, phone: e.target.value })}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
                value={formRegist.password}
                onChange={(e) => setFormRegist({ ...formRegist, password: e.target.value })}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors bg-white shadow-sm"
                required
                value={formRegist.confirmPassword}
                onChange={(e) => setFormRegist({ ...formRegist, confirmPassword: e.target.value })}
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showConfirmPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            </div>

            {/* Role Selection */}
            <div className="mt-4 flex items-center">
              <label htmlFor="role" className="mr-4 text-gray-700">Select Role:</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="pelamar"
                    name="role"
                    value="pelamar"
                    checked={formRegist.role === "pelamar"}
                    onChange={(e) => setFormRegist({ ...formRegist, role: e.target.value })}
                    className="text-blue-600"
                  />
                  <label htmlFor="pelamar" className="text-gray-700">Pelamar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="perusahaan"
                    name="role"
                    value="perusahaan"
                    checked={formRegist.role === "perusahaan"}
                    onChange={(e) => setFormRegist({ ...formRegist, role: e.target.value })}
                    className="text-blue-600"
                  />
                  <label htmlFor="perusahaan" className="text-gray-700">Perusahaan</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Create Account
            </button>

            {error && (
              <>
                <p className="text-red-500 text-center mb-4">{error}</p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
