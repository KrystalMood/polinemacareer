import React from "react";
import {
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

interface FooterLinkItem {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

const getPathFromMenuItem = (menuItem: string) => {
  if (menuItem === "Home") return "/";
  if (menuItem === "Contact") return "/main/contact";
  if (menuItem === "About") return "/main/about-us";
  if (menuItem === "Article") return "/main/events/id";
  if (menuItem === "Browse Jobs") return "/main/jobs/all-jobs";
  if (menuItem === "Candidate Dashboard") return "/main/dashboard/pelamar";
  if (menuItem === "Saved jobs") return "/main/jobs/saved-jobs";
  if (menuItem === "Post a Job") return "/main/jobs/post-a-job";
  if (menuItem === "Browse Candidates") return "/main/jobs/all-job";
  if (menuItem === "Employers Dashboard") return "/main/dashboard/perusahaan";
  if (menuItem === "Faqs") return "/main/support/Faq";
  if (menuItem === "Privacy Policy") return "/main/support/privacyPolicy";
  if (menuItem === "Terms & Conditions") return "/main/support/Terms&Condition";

  return `/${menuItem.toLowerCase().replace(/\s+/g, "")}`;
};

const footerSections: FooterSection[] = [
  {
    title: "Quick Link",
    links: [
      { title: "About", href: getPathFromMenuItem("About") },
      { title: "Contact", href: getPathFromMenuItem("Contact") },
      { title: "Article", href: getPathFromMenuItem("Article") },
    ],
  },
  {
    title: "Candidate",
    links: [
      { title: "Browse Jobs", href: "/browse-jobs" },
      { title: "Candidate Dashboard", href: "/candidate-dashboard" },
      { title: "Saved jobs", href: getPathFromMenuItem("savedjobs") },
    ],
  },
  {
    title: "Employers",
    links: [
      { title: "Post a Job", href: "/post-job" },
      { title: "Browse Candidates", href: "/browse-candidates" },
      { title: "Employers Dashboard", href: getPathFromMenuItem("employee") },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Faqs", href: "/faqs" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#ff9b71]/90">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4z" />
              </svg>
              <span className="text-2xl font-bold text-white">
                PolinemaCareer
              </span>
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

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={getPathFromMenuItem(link.title)}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-white/80 text-sm">
              © 2024 PolinemaCareer - Job Portal. All rights Reserved
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { name: "Facebook", icon: <Facebook className="w-5 h-5" /> },
                { name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
                { name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
                { name: "YouTube", icon: <Youtube className="w-5 h-5" /> },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
