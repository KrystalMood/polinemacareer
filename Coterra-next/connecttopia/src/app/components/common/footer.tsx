import React from "react";

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
  if (menuItem === "Post an Event") return "/main/events/[id]/post-event";
  
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
      { title: "Post an Event", href: "/post-event" },
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

const Footer = () => {
  return (
    <footer className="bg-[#102441] text-white py-16">
      <div className="container mx-auto px-4 w-[90vw]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4z" />
              </svg>
              <span className="text-xl font-bold">PolinemaCareer</span>
            </div>
            <p className="text-gray-400 mb-2">Call now: 081235305531</p>
            <p className="text-gray-400 text-sm">
              Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={getPathFromMenuItem(link.title)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t w-[60vw] mx-auto border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PolinemaCareer - Job Portal. All rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.227-.415.562-.217.96-.477 1.382-.896.419-.42.679-.819.896-1.381.164-.422.36-1.057.413-2.227.057-1.266.07-1.646.07-4.85s-.015-3.585-.074-4.85c-.061-1.17-.256-1.805-.421-2.227-.224-.562-.479-.96-.899-1.381-.421-.419-.82-.679-1.382-.896-.079-.053-.949-.152-2.227-.413-1.27-.057-1.646-.072-4.85-.072zm0 14.787c-1.572 0-2.853-1.281-2.853-2.853 0-1.573 1.281-2.853 2.853-2.853 1.573 0 2.853 1.281 2.853 2.853 0 1.572-1.281 2.853-2.853 2.853zm5.595-4.552c-.8 0-1.452-.649-1.452-1.45 0-.801.649-1.45 1.452-1.45.801 0 1.45.649 1.45 1.45 0 .801-.649 1.45-1.45 1.45z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
