export type { Mode, SiteContent, PortfolioPlatform } from "./content-types";

export interface NavLink {
  id: string;
  labelKey: string;
}

export const founderNavLinks: NavLink[] = [
  { id: "about", labelKey: "nav.founder.about" },
  { id: "building", labelKey: "nav.founder.building" },
  { id: "experience", labelKey: "nav.founder.experience" },
  { id: "skills", labelKey: "nav.founder.skills" },
  { id: "contact", labelKey: "nav.founder.contact" },
];

export const creatorNavLinks: NavLink[] = [
  { id: "about", labelKey: "nav.creator.about" },
  { id: "portfolio", labelKey: "nav.creator.portfolio" },
  { id: "platforms", labelKey: "nav.creator.platforms" },
  { id: "brands", labelKey: "nav.creator.brands" },
  { id: "contact", labelKey: "nav.creator.contact" },
];
