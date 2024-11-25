import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { SocialLink } from "~/types/footer";

const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
  { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
  { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" },
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
