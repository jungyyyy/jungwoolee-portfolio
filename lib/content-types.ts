export type Mode = "founder" | "creator";

export type PortfolioPlatform = "TikTok" | "Instagram" | "YouTube";

export interface HeroContent {
  label: string;
  heading: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface PortfolioItem {
  platform: PortfolioPlatform;
  title: string;
  stat: string;
  url: string;
}

export interface PlatformItem {
  platform: string;
  handle: string;
  url: string;
  focus: string;
  cadence: string;
}

export interface BrandBenefit {
  emoji: string;
  title: string;
  description: string;
}

export interface ContactSection {
  heading: string;
  subtext: string;
  replyNote?: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  tiktok: string;
  instagram: string;
  youtube: string;
}

export interface SiteImages {
  founderHero: string;
  creatorHero: string;
  about: string;
  spreadableLogo: string;
}

export interface SiteContent {
  shared: {
    contactEmail: string;
    socialLinks: SocialLinks;
  };
  images: SiteImages;
  founder: {
    hero: HeroContent;
    about: {
      sectionLabel: string;
      quoteLine1: string;
      quoteLine2: string;
      paragraphs: string[];
    };
    stats: StatItem[];
    building: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
      tags: string[];
      websiteUrl: string;
      websiteLabel: string;
    };
    experience: {
      sectionLabel: string;
      heading: string;
      items: TimelineItem[];
    };
    skills: {
      sectionLabel: string;
      heading: string;
      groups: SkillGroup[];
    };
    contact: ContactSection;
  };
  creator: {
    hero: HeroContent;
    about: {
      sectionLabel: string;
      quote: string;
    };
    portfolio: {
      sectionLabel: string;
      heading: string;
      footerNote: string;
      items: PortfolioItem[];
    };
    platforms: {
      sectionLabel: string;
      heading: string;
      items: PlatformItem[];
    };
    brands: {
      sectionLabel: string;
      heading: string;
      items: BrandBenefit[];
    };
    contact: ContactSection;
  };
}
