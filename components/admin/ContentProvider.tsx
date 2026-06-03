"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import EditModeBadge from "./EditModeBadge";
import { SiteContent } from "@/lib/content-types";

interface ContentContextValue {
  content: SiteContent;
  isAdmin: boolean;
  loading: boolean;
  saveContent: (key: string, value: string) => Promise<boolean>;
  uploadImage: (key: string, file: File) => Promise<boolean>;
  logout: () => Promise<void>;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [contentRes, sessionRes] = await Promise.all([
          fetch("/api/content"),
          fetch("/api/admin/session"),
        ]);
        const contentData = await contentRes.json();
        const sessionData = await sessionRes.json();
        setContent(contentData);
        setIsAdmin(sessionData.admin === true);
      } catch {
        setContent(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const saveContent = useCallback(async (key: string, value: string) => {
    const res = await fetch("/api/content", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value }),
    });
    if (res.ok) {
      const data = await res.json();
      setContent(data.content);
      return true;
    }
    return false;
  }, []);

  const uploadImage = useCallback(async (key: string, file: File) => {
    const formData = new FormData();
    formData.append("key", key);
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      setContent(data.content);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAdmin(false);
  }, []);

  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-secondary text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <ContentContext.Provider
      value={{ content, isAdmin, loading, saveContent, uploadImage, logout }}
    >
      {children}
      {isAdmin && <EditModeBadge onLogout={logout} />}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return ctx;
}
