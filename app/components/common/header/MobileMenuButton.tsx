import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export const MobileMenuButton = ({ 
  isActive, 
  setIsActive 
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
    >
      {isActive ? (
        <X className="w-6 h-6 text-gray-600" />
      ) : (
        <Menu className="w-6 h-6 text-gray-600" />
      )}
    </button>
  );
}; 