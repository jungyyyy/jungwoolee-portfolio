import { mergeDeep } from "./merge-content";
import { SiteContent } from "./content-types";
import deSiteContent from "@/locales/de-site-content.json";

export function localizeSiteContent(
  content: SiteContent,
  locale: "en" | "de"
): SiteContent {
  if (locale === "en") {
    return content;
  }

  return mergeDeep(content, deSiteContent as Partial<SiteContent>);
}
