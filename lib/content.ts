export type { Mode, SiteContent, PortfolioPlatform } from "./content-types";

export interface NavLink {
  id: string;
  label: string;
}

export const founderNavLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "building", label: "Building" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const creatorNavLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "platforms", label: "Platforms" },
  { id: "brands", label: "For Brands" },
  { id: "contact", label: "Contact" },
];
