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
  fullName: string;
  role: "job_seeker" | "employer";
  gender: "male" | "female" | null;
  companyName?: string;
  companyLocation?: string;
  companyDescription?: string;
  employeeCount?: number | string;
  openPositions?: number | string;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  role?: string;
  gender?: string;
  companyName?: string;
  companyLocation?: string;
  companyDescription?: string;
  employeeCount?: number | string;
  openPositions?: number | string;
  message?: string;
}

const initialFormData: RegisterFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "job_seeker",
  gender: "male",
  companyName: "",
  companyLocation: "",
  companyDescription: "",
  employeeCount: 0,
  openPositions: 0,
};

const initialErrors: FormErrors = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
  gender: "",
  companyName: "",
  message: "",
  companyLocation: "",
  companyDescription: "",
  employeeCount: 0,
  openPositions: 0,
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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password wajib diisi";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.fullName) {
      newErrors.fullName = "Nama lengkap wajib diisi";
      isValid = false;
    }

    if (formData.role === "job_seeker" && !formData.gender) {
      newErrors.gender = "Gender wajib diisi";
      isValid = false;
    }

    if (formData.role === "employer") {
      if (!formData.companyName) {
        newErrors.companyName = "Nama perusahaan wajib diisi";
        isValid = false;
      }
      if (!formData.companyLocation) {
        newErrors.companyLocation = "Lokasi perusahaan wajib diisi";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateEmployerFields = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "Nama lengkap wajib diisi";
      isValid = false;
    }

    if (formData.role === "employer") {
      if (!formData.companyName?.trim()) {
        newErrors.companyName = "Nama perusahaan wajib diisi";
        isValid = false;
      }
      if (!formData.companyLocation?.trim()) {
        newErrors.companyLocation = "Lokasi perusahaan wajib diisi";
        isValid = false;
      }
      if (!formData.companyDescription?.trim()) {
        newErrors.companyDescription = "Deskripsi perusahaan wajib diisi";
        isValid = false;
      }
      if (!formData.employeeCount || formData.employeeCount <= 0) {
        newErrors.employeeCount = "Jumlah karyawan harus lebih dari 0";
        isValid = false;
      }
      if (!formData.openPositions || formData.openPositions <= 0) {
        newErrors.openPositions = "Jumlah posisi harus lebih dari 0";
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "employeeCount" || name === "openPositions") {
      if (value === "0") {
        setFormData((prev) => ({
          ...prev,
          [name]: "",
        }));
        return;
      }

      if (value === "") {
        setFormData((prev) => ({
          ...prev,
          [name]: 0,
        }));
        return;
      }

      const numValue = parseInt(value, 10);
      if (!isNaN(numValue)) {
        setFormData((prev) => ({
          ...prev,
          [name]: numValue,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      handleNext();
      return;
    }

    if (
      !validateStep2() ||
      (formData.role === "employer" && !validateEmployerFields())
    ) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost/polinema_career/api/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email.toLowerCase(),
            password: formData.password,
            fullName: formData.fullName,
            role: formData.role,
            gender: formData.role === "job_seeker" ? formData.gender : null,
            companyName:
              formData.role === "employer" ? formData.companyName : "",
            companyLocation:
              formData.role === "employer" ? formData.companyLocation : "",
            companyDescription:
              formData.role === "employer" ? formData.companyDescription : "",
            employeeCount:
              formData.role === "employer" ? Number(formData.employeeCount) : 0,
            openPositions:
              formData.role === "employer" ? Number(formData.openPositions) : 0,
          }),
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
            email: "Email sudah terdaftar",
            message: "",
          }));
          setStep(1);
        } else {
          setErrors((prev) => ({
            ...prev,
            message: data.message || "Registrasi gagal",
          }));
        }
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        message: "Terjadi kesalahan. Silakan coba lagi.",
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
                        role: e.target.value as "job_seeker" | "employer",
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

                {formData.role === "job_seeker" && (
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#FFE4D6] bg-white py-3 pl-10 pr-4"
                      />
                    </div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender || ""}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.gender}
                      </p>
                    )}
                  </div>
                )}

                {formData.role === "employer" && (
                  <div className="space-y-4">
                    <div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ff9b71] focus:outline-none focus:ring-1 focus:ring-[#ff9b71]"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <label className="block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ff9b71] focus:outline-none focus:ring-1 focus:ring-[#ff9b71]"
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Company Location
                      </label>
                      <input
                        type="text"
                        name="companyLocation"
                        value={formData.companyLocation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyLocation: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ff9b71] focus:outline-none focus:ring-1 focus:ring-[#ff9b71]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Company Description
                      </label>
                      <textarea
                        name="companyDescription"
                        value={formData.companyDescription}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyDescription: e.target.value,
                          })
                        }
                        rows={3}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ff9b71] focus:outline-none focus:ring-1 focus:ring-[#ff9b71]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Number of Employees
                      </label>
                      <input
                        type="number"
                        name="employeeCount"
                        value={formData.employeeCount}
                        onChange={handleInputChange}
                        onFocus={(e) => {
                          if (e.target.value === "0") {
                            setFormData((prev) => ({
                              ...prev,
                              employeeCount: "",
                            }));
                          }
                        }}
                        onBlur={(e) => {
                          if (e.target.value === "") {
                            setFormData((prev) => ({
                              ...prev,
                              employeeCount: 0,
                            }));
                          }
                        }}
                        min="0"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ff9b71] focus:outline-none focus:ring-1 focus:ring-[#ff9b71]"
                      />
                      {errors.employeeCount && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.employeeCount}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Number of Open Positions
                      </label>
                      <input
                        type="number"
                        name="openPositions"
                        value={formData.openPositions}
                        onChange={handleInputChange}
                        onFocus={(e) => {
                          if (e.target.value === "0") {
                            setFormData((prev) => ({
                              ...prev,
                              openPositions: "",
                            }));
                          }
                        }}
                        onBlur={(e) => {
                          if (e.target.value === "") {
                            setFormData((prev) => ({
                              ...prev,
                              openPositions: 0,
                            }));
                          }
                        }}
                        min="0"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ff9b71] focus:outline-none focus:ring-1 focus:ring-[#ff9b71]"
                      />
                      {errors.openPositions && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.openPositions}
                        </p>
                      )}
                    </div>
                  </div>
                )}
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
