import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/admin-auth";
import { readContent, updateContentKey } from "@/lib/content-store";

export async function GET() {
  try {
    const content = await readContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const isAdmin = await isAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { key, value } = body;

    if (!key || typeof key !== "string") {
      return NextResponse.json({ error: "Missing key" }, { status: 400 });
    }

    if (value === undefined) {
      return NextResponse.json({ error: "Missing value" }, { status: 400 });
    }

    const content = await updateContentKey(key, value);
    return NextResponse.json({ success: true, content });
  } catch {
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}
