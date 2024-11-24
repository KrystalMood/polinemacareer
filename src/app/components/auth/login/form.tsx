import { Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
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

    try {
      const response = await fetch(
        "http://localhost/polinemakarir/api/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!result.success) {
        setError(result.message);
      } else {
        localStorage.setItem("user", JSON.stringify(result.user));

        switch (result.user.role.toLowerCase()) {
          case "pelamar":
            router.push("/main/dashboard/pelamar");
            break;
          case "perusahaan":
            router.push("/main/dashboard/perusahaan");
            break;
          default:
            router.push("/main/dashboard");
        }
      }
    } catch (error) {
      setError("Something wrong is happening!");
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#fffaf8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="absolute top-4 left-4 text-[#ff9b71] transition-all duration-300 hover:scale-110">
          <Link href={"/"}>
            <RiArrowGoBackFill size={26} />
          </Link>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-[#FFE4D6] hover:border-[#FFBB9C] hover:shadow-xl hover:shadow-[#FFE4D6]/50 transition-all duration-300">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10">
              <Sparkles className="w-4 h-4 text-[#ff9b71]" />
              <span className="text-sm font-medium text-[#ff9b71]">
                Welcome Back
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 tracking-tight text-center mb-2">
            Login to Your Account
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Unlock Endless Possibilities with Us
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                required
                name="username"
                value={formData.username}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ff9b71] hover:bg-[#ff8c5c] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Login
            </button>

            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/auth/forget-password"
              className="text-sm text-gray-600 hover:text-[#ff9b71] transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/auth/register"
              className="text-slate-900 font-semibold hover:text-[#ff9b71] transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
