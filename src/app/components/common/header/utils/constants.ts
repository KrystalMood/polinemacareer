export const MENU_ITEMS = [
  { label: "Jobs", href: "/main/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const getPathFromMenuItem = (menuItem: string) => {
  if (menuItem === "Home") return "/main/dashboard/pelamar";
  if (menuItem === "Contact") return "/main/contact";
  if (menuItem === "About Us") return "/main/about-us";
  return `/${menuItem.toLowerCase().replace(/\s+/g, "")}`;
}; 