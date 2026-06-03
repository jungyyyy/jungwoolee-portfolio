import fs from "fs/promises";
import path from "path";
import { defaultContent } from "./default-content";
import { setAtPath } from "./content-path";
import { SiteContent } from "./content-types";

const CONTENT_FILE = path.join(process.cwd(), "data", "content.json");

function mergeWithDefaults(content: Partial<SiteContent>): SiteContent {
  return {
    ...defaultContent,
    ...content,
    shared: { ...defaultContent.shared, ...content.shared },
    images: { ...defaultContent.images, ...content.images },
    founder: {
      ...defaultContent.founder,
      ...content.founder,
      hero: { ...defaultContent.founder.hero, ...content.founder?.hero },
      about: { ...defaultContent.founder.about, ...content.founder?.about },
      building: { ...defaultContent.founder.building, ...content.founder?.building },
      experience: {
        ...defaultContent.founder.experience,
        ...content.founder?.experience,
      },
      skills: { ...defaultContent.founder.skills, ...content.founder?.skills },
      contact: { ...defaultContent.founder.contact, ...content.founder?.contact },
    },
    creator: {
      ...defaultContent.creator,
      ...content.creator,
      hero: { ...defaultContent.creator.hero, ...content.creator?.hero },
      about: { ...defaultContent.creator.about, ...content.creator?.about },
      portfolio: {
        ...defaultContent.creator.portfolio,
        ...content.creator?.portfolio,
      },
      platforms: {
        ...defaultContent.creator.platforms,
        ...content.creator?.platforms,
      },
      brands: { ...defaultContent.creator.brands, ...content.creator?.brands },
      contact: { ...defaultContent.creator.contact, ...content.creator?.contact },
    },
  };
}

async function ensureContentFile(): Promise<void> {
  try {
    await fs.access(CONTENT_FILE);
  } catch {
    await fs.mkdir(path.dirname(CONTENT_FILE), { recursive: true });
    await fs.writeFile(
      CONTENT_FILE,
      JSON.stringify(defaultContent, null, 2),
      "utf-8"
    );
  }
}

export async function readContent(): Promise<SiteContent> {
  await ensureContentFile();
  const raw = await fs.readFile(CONTENT_FILE, "utf-8");
  const parsed = JSON.parse(raw) as Partial<SiteContent>;
  return mergeWithDefaults(parsed);
}

export async function updateContentKey(
  key: string,
  value: unknown
): Promise<SiteContent> {
  const content = await readContent();
  setAtPath(content, key, value);
  await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2), "utf-8");
  return content;
}

export const IMAGE_KEY_TO_FILENAME: Record<string, string> = {
  "images.founderHero": "hero.png",
  "images.creatorHero": "creator-hero.png",
  "images.about": "about.png",
  "images.spreadableLogo": "spreadableai-logo.png",
};

export async function saveUploadedImage(
  key: string,
  buffer: Buffer,
  extension: string
): Promise<SiteContent> {
  const filename = IMAGE_KEY_TO_FILENAME[key];
  if (!filename) {
    throw new Error("Invalid image key");
  }

  const baseName = filename.replace(/\.[^.]+$/, "");
  const safeExt = extension.startsWith(".") ? extension : `.${extension}`;
  const finalName = `${baseName}${safeExt}`;
  const publicDir = path.join(process.cwd(), "public", "images");

  await fs.mkdir(publicDir, { recursive: true });
  await fs.writeFile(path.join(publicDir, finalName), buffer);

  const publicPath = `/images/${finalName}?v=${Date.now()}`;
  return updateContentKey(key, publicPath);
}
