export type HeroSlide = {
  imageUrl: string;
  title: string;
  description?: string;
  icon?: string;
  link?: string;
  linkText?: string;
  alt: string;
};

export type Review = {
  name: string;
  location?: string;
  quote: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type SocialLink = {
  label: string;
  href: string;
  _key?: string;
};

export type SocialData = {
  docId: string | undefined;
  docType: string | undefined;
  links: SocialLink[];
};

export type LogoData = {
  docId?: string | null;
  docType?: string | null;
  logoUrl: string;
};
