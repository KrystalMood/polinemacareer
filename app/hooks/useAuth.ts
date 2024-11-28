import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";
import { UserData } from "~/types/header";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };

  return {
    isLoggedIn,
    userData,
    handleLogout,
  };
};
