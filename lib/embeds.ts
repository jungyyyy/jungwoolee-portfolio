import { PortfolioPlatform } from "./content-types";

export function getEmbedUrl(
  url: string,
  platform: Exclude<PortfolioPlatform, "YouTube">
): string | null {
  if (platform === "TikTok") {
    const match = url.match(/video\/(\d+)/);
    return match ? `https://www.tiktok.com/embed/v2/${match[1]}` : null;
  }

  const match = url.match(/(?:p|reel)\/([^/?#]+)/);
  return match ? `https://www.instagram.com/p/${match[1]}/embed` : null;
}

export function canEmbed(url: string, platform: PortfolioPlatform): boolean {
  if (platform === "YouTube") return false;
  return getEmbedUrl(url, platform) !== null;
}
