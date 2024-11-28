import { FooterSection } from "~/types/footer";

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Quick Link",
    links: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Article", href: "/article" },
    ],
  },
  {
    title: "Candidate",
    links: [
      { title: "Browse Jobs", href: "/browse-jobs" },
      { title: "Candidate Dashboard", href: "/candidate-dashboard" },
      { title: "Saved jobs", href: "/saved-jobs" },
    ],
  },
  {
    title: "Employers",
    links: [
      { title: "Post a Job", href: "/post-job" },
      { title: "Browse Candidates", href: "/browse-candidates" },
      { title: "Employers Dashboard", href: "/employee" },
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
