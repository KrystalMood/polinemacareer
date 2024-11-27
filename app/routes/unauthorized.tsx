import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@remix-run/react";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fffaf8] flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Akses Tidak Diizinkan
        </h1>
        <p className="text-gray-600 mb-6">
          Maaf, Anda tidak memiliki akses ke halaman ini. Silakan login dengan akun yang sesuai.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-[#ff9b71] hover:text-[#ff8c5c]"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Login
        </button>
      </div>
    </div>
  );
} 