"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useContent } from "./ContentProvider";

interface EditableImageProps {
  contentKey: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  uploadLabel?: string;
}

export default function EditableImage({
  contentKey,
  src,
  alt,
  width,
  height,
  className = "",
  wrapperClassName = "",
  priority = false,
  uploadLabel = "Upload photo",
}: EditableImageProps) {
  const { isAdmin, uploadImage } = useContent();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleFile = async (file: File) => {
    setUploading(true);
    const ok = await uploadImage(contentKey, file);
    setUploading(false);
    if (ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  return (
    <div className={`relative group/image ${wrapperClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />

      {isAdmin && (
        <>
          <div className="absolute inset-0 rounded-[inherit] border-2 border-dashed border-transparent transition-colors group-hover/image:border-accent/40 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity bg-background/60 rounded-[inherit]">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="rounded-pill bg-accent px-4 py-2 text-xs font-medium text-background hover:opacity-90 disabled:opacity-50 pointer-events-auto"
            >
              {uploading ? "Uploading…" : uploadLabel}
            </button>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
              e.target.value = "";
            }}
          />
        </>
      )}

      {saved && (
        <span className="absolute top-2 right-2 rounded-pill bg-surface border border-accent/30 px-2 py-1 text-xs text-accent">
          Saved ✓
        </span>
      )}
    </div>
  );
}
