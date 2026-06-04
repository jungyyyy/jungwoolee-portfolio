"use client";

import { useEffect, useRef, useState, ElementType } from "react";
import { useTranslation } from "react-i18next";
import { useContent } from "./ContentProvider";

interface EditableTextProps {
  contentKey: string;
  value: string;
  as?: ElementType;
  className?: string;
  multiline?: boolean;
}

export default function EditableText({
  contentKey,
  value,
  as: Tag = "span",
  className = "",
  multiline = false,
}: EditableTextProps) {
  const { t } = useTranslation();
  const { isAdmin, saveContent } = useContent();
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const editableRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (editing && editableRef.current) {
      editableRef.current.focus();
      const range = document.createRange();
      range.selectNodeContents(editableRef.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [editing]);

  const handleSave = async () => {
    if (!editableRef.current) return;
    const newValue = editableRef.current.innerText.trim();
    setSaving(true);
    const ok = await saveContent(contentKey, newValue);
    setSaving(false);
    if (ok) {
      setEditing(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const displayClass = multiline ? `${className} whitespace-pre-line` : className;

  if (!isAdmin) {
    return <Tag className={displayClass}>{value}</Tag>;
  }

  if (!editing) {
    return (
      <span className="relative inline-block max-w-full group/edit">
        <Tag
          role="button"
          tabIndex={0}
          onClick={() => setEditing(true)}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setEditing(true);
            }
          }}
          className={`${displayClass} cursor-text rounded px-1 -mx-1 border border-dashed border-transparent transition-colors hover:border-accent/40`}
        >
          {value}
        </Tag>
        {saved && (
          <span className="absolute -top-6 left-0 text-xs text-accent whitespace-nowrap">
            {t("editable.saved")}
          </span>
        )}
      </span>
    );
  }

  return (
    <span className="relative inline-block w-full max-w-full">
      <Tag
        ref={editableRef}
        contentEditable
        suppressContentEditableWarning
        className={`${displayClass} outline-none rounded px-1 -mx-1 border border-accent/50 bg-surface/50 min-w-[2rem]`}
      >
        {value}
      </Tag>
      <span className="mt-2 flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="rounded-pill bg-accent px-3 py-1 text-xs font-medium text-background hover:opacity-90 disabled:opacity-50"
        >
          {saving ? t("editable.saving") : t("editable.save")}
        </button>
        <button
          type="button"
          onClick={() => setEditing(false)}
          className="text-xs text-secondary hover:text-primary"
        >
          {t("editable.cancel")}
        </button>
      </span>
    </span>
  );
}
