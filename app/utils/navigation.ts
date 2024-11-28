export const getPathFromMenuItem = (menuItem: string) => {
  switch (menuItem) {
    case "Home":
      return "/dashboard/pelamar";
    case "Jobs":
      return "/jobs";
    case "Companies":
      return "/companies";
    case "Contact":
      return "/contact";
    case "About Us":
      return "/about-us";
    default:
      return `/${menuItem.toLowerCase().replace(/\s+/g, "")}`;
  }
};
