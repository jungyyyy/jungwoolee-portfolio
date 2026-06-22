"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getEmbedUrl } from "@/lib/embeds";
import { PortfolioPlatform } from "@/lib/content-types";

interface PortfolioModalProps {
  url: string;
  platform: PortfolioPlatform;
  title: string;
  onClose: () => void;
}

export default function PortfolioModal({
  url,
  platform,
  title,
  onClose,
}: PortfolioModalProps) {
  const { t } = useTranslation();
  const embedUrl =
    platform === "YouTube" ? null : getEmbedUrl(url, platform);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-accent">{platform}</p>
              <h3 className="mt-1 text-sm text-primary">{title}</h3>
            </div>
            <button
              onClick={onClose}
              aria-label={t("portfolio.closePreview")}
              className="rounded-full p-2 text-secondary transition-colors hover:text-primary"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {embedUrl ? (
            <div className="overflow-hidden rounded-card border border-border bg-surface shadow-amber-glow">
              <iframe
                src={embedUrl}
                title={title}
                className="aspect-[9/16] w-full max-h-[70vh] bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="rounded-card border border-border bg-surface p-8 text-center">
              <p className="text-secondary text-sm">
                {t("portfolio.previewUnavailable", { platform })}
              </p>
            </div>
          )}

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm text-accent transition-opacity hover:opacity-80"
          >
            {t("portfolio.openOn", { platform })}
          </a>
        </motion.div>
    </motion.div>
  );
}
