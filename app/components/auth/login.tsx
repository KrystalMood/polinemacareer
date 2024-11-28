import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginError {
  email?: string;
  password?: string;
  message?: string;
}

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginError>({});

  const validateForm = () => {
    let isValid = true;
    const newErrors: LoginError = {};

    if (!formData.email) {
      newErrors.email = "Email wajib diisi";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid (contoh: nama@domain.com)";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost/polinema_career/api/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("user", JSON.stringify(data.data));

        const token = btoa(JSON.stringify(data.data));
        localStorage.setItem("token", `Bearer ${token}`);
        if (data.data.role === "employer") {
          navigate("/dashboard/employer/home");
        } else {
          navigate("/dashboard/jobseeker/home");
        }
      } else {
        setErrors({
          message: data.message || "Email atau password salah",
        });
      }
    } catch (error) {
      setErrors({
        message: "Terjadi kesalahan. Silakan coba lagi.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen min-h-screen items-center justify-center bg-[#fffaf8]">
      <button onClick={() => navigate("/")} className="absolute left-10 top-10">
        <ArrowLeft
          className="z-10 cursor-pointer transition-colors hover:text-gray-600"
          size={24}
        />
      </button>

      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Selamat Datang Kembali
          </h2>
          <p className="mt-2 text-gray-600">Masuk ke akun Anda</p>
        </div>

        {/* Error Message */}
        {errors.message && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
            {errors.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full rounded-lg border bg-white py-3 pl-10 pr-4 text-black ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } transition-colors focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20`}
                placeholder="nama@email.com"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`w-full rounded-lg border bg-white py-3 pl-10 pr-12 text-black ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } transition-colors focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-[#ff9b71] py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#ff8c5c] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="font-medium text-[#ff9b71] hover:text-[#ff8c5c]"
            >
              Daftar sekarang
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
