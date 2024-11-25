import { Phone, MapPin } from "lucide-react";

export const CompanyInfo = () => {
  return (
    <div className="md:col-span-2 space-y-6">
      <div className="flex items-center gap-2">
        <img src="/favicon.ico" alt="PolinemaCareer Logo" className="w-8 h-8" />
        <span className="text-2xl font-bold text-white">PolinemaCareer</span>
      </div>

      <div className="space-y-4 text-white/80">
        <p className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-white" />
          081235305531
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-white" />
          Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang
        </p>
      </div>
    </div>
  );
};
