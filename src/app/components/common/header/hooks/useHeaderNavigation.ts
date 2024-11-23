import { useState, useEffect } from "react";
import { MENU_ITEMS, getPathFromMenuItem } from "../utils/constants";

export const useHeaderNavigation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const index = MENU_ITEMS.findIndex(
      (item) => getPathFromMenuItem(item.label) === path
    );
    if (index !== -1) {
      setCurrentPage(index);
    }
  }, []);

  const handleSwitchPage = (index: number) => {
    setCurrentPage(index);
    setIsActive(false);
  };

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return {
    currentPage,
    isActive,
    handleSwitchPage,
    handleMenuClick
  };
}; 