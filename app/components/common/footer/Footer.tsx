import { CompanyInfo } from "./CompanyInfo";
import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";
import { FOOTER_SECTIONS } from "~/constants/footer";

export default function Footer() {
  return (
    <footer className="bg-[#ff9b71]/90">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <CompanyInfo />

          {/* Footer Links */}
          {FOOTER_SECTIONS.map((section) => (
            <FooterLinks key={section.title} section={section} />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-white/80 text-sm">
              © 2024 PolinemaCareer - Job Portal. All rights Reserved
            </p>

            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
