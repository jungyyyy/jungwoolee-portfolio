import { NextRequest, NextResponse } from "next/server";
import { getAtPath } from "@/lib/content-path";
import { isAdminSession } from "@/lib/admin-auth";
import { IMAGE_KEY_TO_FILENAME, saveUploadedImage } from "@/lib/content-store";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

const EXTENSIONS: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};

export async function POST(request: NextRequest) {
  const isAdmin = await isAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const key = formData.get("key");
    const file = formData.get("file");

    if (typeof key !== "string" || !IMAGE_KEY_TO_FILENAME[key]) {
      return NextResponse.json({ error: "Invalid image key" }, { status: 400 });
    }

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Only JPEG, PNG, WebP, and GIF allowed" },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File must be under 5MB" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const extension = EXTENSIONS[file.type] || ".png";
    const content = await saveUploadedImage(key, buffer, extension);

    return NextResponse.json({
      success: true,
      url: getAtPath(content, key),
      content,
    });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
