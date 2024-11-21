import { useState } from "react";
import Link from "next/link";
import { Mail, User, Phone, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
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
    role: "pelamar",
    gender: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleRegisterSubmit(formRegist, setError, router);
  };

  return (
    <div className="min-h-screen bg-[#fffaf8] relative overflow-hidden py-8">
      {/* Background Elements */}
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="absolute top-4 left-4 text-[#ff9b71] transition-all duration-300 hover:scale-110">
          <Link href={"/"}>
            <RiArrowGoBackFill size={26} />
          </Link>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md border border-[#FFE4D6] hover:border-[#FFBB9C] hover:shadow-xl hover:shadow-[#FFE4D6]/50 transition-all duration-300">
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10">
              <Sparkles className="w-4 h-4 text-[#ff9b71]" />
              <span className="text-sm font-medium text-[#ff9b71]">
                Start Your Journey
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 tracking-tight text-center mb-2">
            Create Your Account
          </h1>
          <p className="text-center text-gray-600 text-sm mb-6">
            Join us to unlock endless opportunities
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Input fields dengan styling yang sama */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                required
                value={formRegist.nama}
                onChange={(e) =>
                  setFormRegist({ ...formRegist, nama: e.target.value })
                }
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                required
                value={formRegist.email}
                onChange={(e) =>
                  setFormRegist({ ...formRegist, email: e.target.value })
                }
              />
            </div>

            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                required
                value={formRegist.username}
                onChange={(e) =>
                  setFormRegist({ ...formRegist, username: e.target.value })
                }
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                required
                value={formRegist.phone}
                onChange={(e) =>
                  setFormRegist({ ...formRegist, phone: e.target.value })
                }
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                required
                value={formRegist.password}
                onChange={(e) =>
                  setFormRegist({ ...formRegist, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] hover:text-[#ff8c5c] transition-colors"
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
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-12 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                required
                value={formRegist.confirmPassword}
                onChange={(e) =>
                  setFormRegist({
                    ...formRegist,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] hover:text-[#ff8c5c] transition-colors"
              >
                {showConfirmPassword ? (
                  <Eye className="h-5 w-5" />
                ) : (
                  <EyeOff className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <label className="text-gray-700 text-sm font-medium">
                Select Role:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="radio"
                    id="pelamar"
                    name="role"
                    value="pelamar"
                    checked={formRegist.role === "pelamar"}
                    onChange={(e) =>
                      setFormRegist({ ...formRegist, role: e.target.value })
                    }
                    className="peer hidden"
                  />
                  <label
                    htmlFor="pelamar"
                    className="flex items-center justify-center p-3 rounded-xl border border-[#FFE4D6] 
                    cursor-pointer transition-all duration-200 
                    peer-checked:border-[#ff9b71] peer-checked:bg-[#ff9b71]/10 peer-checked:text-[#ff9b71]
                    hover:border-[#ff9b71]/50"
                  >
                    Pelamar
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    id="perusahaan"
                    name="role"
                    value="perusahaan"
                    checked={formRegist.role === "perusahaan"}
                    onChange={(e) =>
                      setFormRegist({ ...formRegist, role: e.target.value })
                    }
                    className="peer hidden"
                  />
                  <label
                    htmlFor="perusahaan"
                    className="flex items-center justify-center p-3 rounded-xl border border-[#FFE4D6] 
                    cursor-pointer transition-all duration-200 
                    peer-checked:border-[#ff9b71] peer-checked:bg-[#ff9b71]/10 peer-checked:text-[#ff9b71]
                    hover:border-[#ff9b71]/50"
                  >
                    Perusahaan
                  </label>
                </div>
              </div>
            </div>

            {/* Gender Selection */}
            {formRegist.role === "pelamar" && (
              <div className="space-y-2">
                <label className="text-gray-700 text-sm font-medium">
                  Gender:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={formRegist.gender === "male"}
                      onChange={(e) =>
                        setFormRegist({ ...formRegist, gender: e.target.value })
                      }
                      className="peer hidden"
                    />
                    <label
                      htmlFor="male"
                      className="flex items-center justify-center p-3 rounded-xl border border-[#FFE4D6] 
                      cursor-pointer transition-all duration-200 
                      peer-checked:border-[#ff9b71] peer-checked:bg-[#ff9b71]/10 peer-checked:text-[#ff9b71]
                      hover:border-[#ff9b71]/50"
                    >
                      Male
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={formRegist.gender === "female"}
                      onChange={(e) =>
                        setFormRegist({ ...formRegist, gender: e.target.value })
                      }
                      className="peer hidden"
                    />
                    <label
                      htmlFor="female"
                      className="flex items-center justify-center p-3 rounded-xl border border-[#FFE4D6] 
                      cursor-pointer transition-all duration-200 
                      peer-checked:border-[#ff9b71] peer-checked:bg-[#ff9b71]/10 peer-checked:text-[#ff9b71]
                      hover:border-[#ff9b71]/50"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ff9b71] hover:bg-[#ff8c5c] text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 mt-2"
            >
              Create Account
            </button>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
          </form>

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              href="/auth/login"
              className="text-[#ff9b71] font-semibold hover:text-[#ff8c5c] transition-colors"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
