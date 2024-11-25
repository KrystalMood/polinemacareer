export const getPathFromMenuItem = (menuItem: string) => {
  switch (menuItem) {
    case "Home":
      return "/main/dashboard/pelamar";
    case "Jobs":
      return "/main/jobs"; 
    case "Companies":
      return "/main/companies";
    case "Contact":
      return "/main/contact";
    case "About Us":
      return "/main/about-us";
    default:
      return `/${menuItem.toLowerCase().replace(/\s+/g, "")}`;
  }
}; 