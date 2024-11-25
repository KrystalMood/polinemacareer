import { Link as RemixLink } from "@remix-run/react";
import { Briefcase } from "lucide-react";

export const LogoSection = () => {
  return (
    <RemixLink to="/" className="flex items-center gap-2">
      <img src="/favicon.ico" alt="PolinemaCareer Logo" className="w-8 h-8" />
      <span className="text-xl font-bold text-gray-900">
        PolinemaCareer
      </span>
    </RemixLink>
  );
}; 