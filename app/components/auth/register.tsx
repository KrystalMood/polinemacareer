"use client";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  User,
  Building2,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "@remix-run/react";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  role: "job_seeker" | "employer";
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
  message?: string; 
}

const initialFormData: RegisterFormData = {
  email: "",
  password: "",
  confirmPassword: "",
  role: "job_seeker",
};

const initialErrors: FormErrors = {
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
  message: "",
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);

  const validateStep1 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format (example: name@domain.com)";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.role) {
      newErrors.role = "Please select a role";
      isValid = false;
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

    setIsLoading(true);
    try {
      const formDataObj = new FormData();
      formDataObj.append("email", formData.email.toLowerCase());
      formDataObj.append("password", formData.password);
      formDataObj.append("role", formData.role);

      const response = await fetch(
        "http://localhost/polinema_career/api/register.php",
        {
          method: "POST",
          body: formDataObj,
        },
      );

      const data = await response.json();

      if (data.status === "success") {
        navigate("/login", {
          state: { message: "Registration successful! Please login." },
        });
      } else {
        if (data.message.includes("Email already exists")) {
          setErrors((prev) => ({
            ...prev,
            email: "Email already registered",
            message: "",
          }));
          setStep(1);
        } else {
          setErrors((prev) => ({
            ...prev,
            message: data.message || "Registration failed",
          }));
        }
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        message: "An error occurred. Please try again.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fffaf8]">
      <div className="absolute -left-96 top-20 h-[500px] w-[500px] rounded-full bg-[#ff9b71]/10 opacity-80 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-[500px] w-[500px] rounded-full bg-[#ff9b71]/5 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="absolute left-4 top-4 text-[#ff9b71] transition-all duration-300 hover:scale-110">
          <a href={"/"}>
            <ArrowLeft size={26} />
          </a>
        </div>

        <div className="w-full max-w-md rounded-xl border border-[#FFE4D6] bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#FFBB9C] hover:shadow-xl hover:shadow-[#FFE4D6]/50">
          {errors.message && (
            <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {errors.message}
            </div>
          )}

          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ff9b71]/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#ff9b71]" />
              <span className="text-sm font-medium text-[#ff9b71]">
                Step {step} of 2
              </span>
            </div>
          </div>

          <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mb-8 text-center text-gray-600">
            Join Us and Discover New Opportunities
          </p>

          <form className="space-y-6 text-gray-600" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#FFE4D6] bg-white py-3 pl-10 pr-4"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#FFE4D6] bg-white py-3 pl-10 pr-4"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-[#FFE4D6] bg-white py-3 pl-10 pr-4"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="relative">
                  <select
                    className="w-full rounded-xl border border-[#FFE4D6] bg-white py-3 pl-4 pr-4 transition-all focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        role: e.target.value as "job_seeker" | "employer"
                      })
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
              </div>
            )}

            <div className="flex justify-between gap-4">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 rounded-xl border border-[#ff9b71] px-4 py-3 font-semibold text-[#ff9b71] transition-all duration-200 hover:bg-[#ff9b71] hover:text-white"
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
                } rounded-xl bg-[#ff9b71] px-4 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff8c5c] ${
                  isLoading ? "cursor-not-allowed opacity-50" : ""
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
                href="login"
                className="font-semibold text-[#ff9b71] hover:text-[#ff8c5c]"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
