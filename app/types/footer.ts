export interface FooterLinkItem {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}
