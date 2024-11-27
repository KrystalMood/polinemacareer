"use client";
import { Mail, Lock, Eye, EyeOff, Sparkles, User, Building2 } from "lucide-react";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@remix-run/react";

interface RegisterFormData {
  email: string;
  password: string;
  fullName: string;
  role: "job_seeker" | "employer";
  gender: "male" | "female";
  companyName: string;
}

export default function RegisterForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    password: "",
    role: "job_seeker",
    gender: "male",
    companyName: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    gender: "",
    companyName: "",
    message: "",
  });

  const validateStep1 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email wajib diisi";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid (contoh: nama@domain.com)";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.role) {
      newErrors.role = "Role is required";
      isValid = false;
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    if (formData.role === "employer" ) {
      if (!formData.companyName || formData.companyName.trim() === "") {
        newErrors.companyName = "Company name is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      handleNext();
      return;
    }

    if (!validateStep2()) {
      return;
    }

    if (formData.role === "employer" && !formData.companyName) {
      setErrors(prev => ({
        ...prev,
        companyName: "Company name is required"
      }));
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost/polinema_career/api/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          role: formData.role,
          gender: formData.gender,
          companyName: formData.role === "employer" ? formData.companyName : undefined,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        navigate("/login", {
          state: { message: "Registration successful! Please login." }
        });
      } else {
        if (data.message.includes("Email already exists")) {
          setErrors(prev => ({
            ...prev,
            email: "Email sudah terdaftar",
            message: ""
          }));
          setStep(1);
        } else {
          setErrors(prev => ({
            ...prev,
            message: data.message || "Registrasi gagal"
          }));
        }
      }
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        message: "Terjadi kesalahan. Silakan coba lagi."
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf8] relative overflow-hidden">
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="absolute top-4 left-4 text-[#ff9b71] transition-all duration-300 hover:scale-110">
          <a href={"/"}>
            <ArrowLeft size={26} />
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-[#FFE4D6] hover:border-[#FFBB9C] hover:shadow-xl hover:shadow-[#FFE4D6]/50 transition-all duration-300">
          {errors.message && (
            <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 rounded-lg">
              {errors.message}
            </div>
          )}

          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10">
              <Sparkles className="w-4 h-4 text-[#ff9b71]" />
              <span className="text-sm font-medium text-[#ff9b71]">
                Step {step} of 2
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 tracking-tight text-center mb-2">
            Create your account
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Join Us and Discover New Opportunities
          </p>

          <form className="space-y-6 text-gray-600" onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="space-y-4">
                <div className="relative">
                  <User
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5 ${
                      errors.fullName ? "top-6" : ""
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white ${
                      errors.fullName ? "border-red-600" : ""
                    }`}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <Mail
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5 ${
                      errors.email ? "top-6" : ""
                    }`}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white ${
                      errors.email ? "border-red-600" : ""
                    }`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <Lock
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5 ${
                      errors.password ? "top-6" : ""
                    }`}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`w-full pl-10 pr-12 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white ${
                      errors.password ? "border-red-600" : ""
                    }`}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform  -translate-y-1/2 text-[#ff9b71] hover:text-[#ff8c5c] transition-colors ${
                      errors.password ? "top-6" : ""
                    }`}
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5 ${error" />
                    ) : (
                      <EyeOff className="h-5 w-5" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <select
                    className="w-full pl-4 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value as "job_seeker" | "employer" })
                    }
                    required
                  >
                    <option value="">Select a role</option>
                    <option value="job_seeker">Job Seeker</option>
                    <option value="employer">Employer</option>
                  </select>
                  {errors.role && (
                    <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                  )}
                </div>
                
                {formData.role === "employer" && (
                  <div className="relative">
                    <Building2
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ff9b71] h-5 w-5 ${
                        errors.companyName ? "top-6" : ""
                      }`}
                    />
                    <input type="text" 
                    placeholder="Company Name" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white" 
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    required
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                    )}
                  </div>
                )}

                <div className="relative">
                  <select
                    className="w-full pl-4 pr-4 py-3 rounded-xl border border-[#FFE4D6] focus:ring-2 focus:ring-[#ff9b71]/20 focus:border-[#ff9b71] transition-all bg-white"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value as "male" | "female" })
                    }
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between gap-4">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 border border-[#ff9b71] text-[#ff9b71] hover:bg-[#ff9b71] hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={step === 1 ? handleNext : handleSubmit}
                disabled={isLoading}
                className={`${
                  step === 1 ? "w-full" : "w-1/2"
                } bg-[#ff9b71] hover:bg-[#ff8c5c] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Processing..." : step === 1 ? "Next" : "Register"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-[#ff9b71] hover:text-[#ff8c5c] font-semibold"
              >
                Login here
              </a>
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Register as an employer?
              <a
                href="/register-employer"
                className="text-[#ff9b71] hover:text-[#ff8c5c] font-semibold"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
