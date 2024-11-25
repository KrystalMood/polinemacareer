import { FooterSection } from "~/types/footer";
import { getPathFromMenuItem } from "~/utils/navigation";

interface FooterLinksProps {
  section: FooterSection;
}

export const FooterLinks = ({ section }: FooterLinksProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{section.title}</h3>
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
  );
};
