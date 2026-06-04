import fs from "fs/promises";
import path from "path";
import { defaultContent } from "./default-content";
import { setAtPath } from "./content-path";
import { mergeDeep } from "./merge-content";
import { SiteContent } from "./content-types";

const CONTENT_FILE = path.join(process.cwd(), "data", "content.json");

function mergeWithDefaults(content: Partial<SiteContent>): SiteContent {
  return mergeDeep(defaultContent, content);
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
