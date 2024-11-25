import { useState } from "react";
import { useNavigate } from "@remix-run/react";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginError {
  message: string;
  field?: string;
}

export default function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<LoginError | null>(null);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost/polinema_career/api/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("user", JSON.stringify(data.data));

        if (data.data.role === "job_seeker") {
          navigate("/main/dashboard/pelamar");
        } else {
          navigate("/main/dashboard/perusahaan");
        }
      } else {
        setError({
          message: data.message
        })
      }
    } catch (err) {
      setError({
        message: "Something went wrong"
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg">
          {error.message}
        </div>
      )}
      
      {/* Email field */}
      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            email: e.target.value
          }))}
          disabled={isLoading}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>

      {/* Password field */}
      <div className="relative">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            password: e.target.value
          }))}
          disabled={isLoading}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 rounded-lg bg-blue-600 text-white
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
