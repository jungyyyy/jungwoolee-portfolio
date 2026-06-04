"use client";

import { useLocale } from "@/components/LocaleProvider";
import type { AppLocale } from "@/lib/i18n/config";

const locales: AppLocale[] = ["en", "de"];

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em]"
      role="group"
      aria-label="Language"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 && (
            <span className="mx-1.5 text-secondary/50" aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(code)}
            className={`transition-colors duration-200 ${
              locale === code
                ? "text-accent underline underline-offset-4 decoration-accent/80"
                : "text-secondary/60 hover:text-secondary"
            }`}
            aria-pressed={locale === code}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
