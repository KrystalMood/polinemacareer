export const MENU_ITEMS = [
  { label: "Jobs", href: "/main/jobs" },
  { label: "Companies", href: "/main/companies" },
  { label: "About Us", href: "/main/about-us" },
  { label: "Contact", href: "/main/contact" },
];

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
