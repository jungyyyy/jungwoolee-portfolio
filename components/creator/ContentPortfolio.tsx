"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import PortfolioModal from "./PortfolioModal";
import { canEmbed } from "@/lib/embeds";
import { useContent } from "../admin/ContentProvider";
import { PortfolioItem } from "@/lib/content-types";

function PortfolioCard({
  item,
  index,
  onWatch,
}: {
  item: PortfolioItem;
  index: number;
  onWatch: (item: PortfolioItem) => void;
}) {
  const { t } = useTranslation();
  const supportsPreview = canEmbed(item.url, item.platform);

  const handleWatch = () => {
    if (supportsPreview) {
      onWatch(item);
      return;
    }
    window.open(item.url, "_blank", "noopener,noreferrer");
  };

  return (
    <StaggerItem index={index} as="article">
      <div
        className="group rounded-card border border-border bg-surface overflow-hidden transition-all duration-200 hover:border-accent/20 hover:shadow-amber-glow cursor-pointer"
        onClick={handleWatch}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleWatch();
          }
        }}
      >
        <div className="relative aspect-video bg-background flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface/80 transition-colors group-hover:border-accent/30">
            <svg
              className="w-6 h-6 text-accent ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="absolute top-3 left-3 rounded-pill bg-border px-3 py-1 text-xs text-secondary">
            {item.platform}
          </span>
          {supportsPreview && (
            <span className="absolute bottom-3 right-3 rounded-pill bg-accent/10 border border-accent/20 px-3 py-1 text-xs text-accent">
              {t("portfolio.preview")}
            </span>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-primary font-medium leading-snug">
            <EditableText
              contentKey={`creator.portfolio.items.${index}.title`}
              value={item.title}
            />
          </h3>
          <p className="mt-2 text-sm text-secondary">
            <EditableText
              contentKey={`creator.portfolio.items.${index}.stat`}
              value={item.stat}
            />
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleWatch();
            }}
            className="group/link inline-flex items-center mt-4 text-sm text-accent transition-opacity hover:opacity-80"
          >
            {supportsPreview
              ? t("portfolio.watchPreview")
              : t("portfolio.viewOn", { platform: item.platform })}
            <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </StaggerItem>
  );
}

export default function ContentPortfolio() {
  const { content } = useContent();
  const portfolio = content.creator.portfolio;
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <SectionWrapper id="portfolio">
        <div className="mx-auto max-w-7xl">
          <FadeIn as="p" className="text-sm text-accent mb-4">
            <EditableText
              contentKey="creator.portfolio.sectionLabel"
              value={portfolio.sectionLabel}
            />
          </FadeIn>
          <FadeIn as="h2" delay={0.1} className="heading-section text-3xl md:text-4xl mb-12">
            <EditableText
              contentKey="creator.portfolio.heading"
              value={portfolio.heading}
            />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.items.map((item, index) => (
              <PortfolioCard
                key={index}
                item={item}
                index={index}
                onWatch={setActiveItem}
              />
            ))}
          </div>

          <FadeIn as="p" delay={0.3} className="mt-10 text-center text-sm text-secondary">
            <EditableText
              contentKey="creator.portfolio.footerNote"
              value={portfolio.footerNote}
            />
          </FadeIn>
        </div>
      </SectionWrapper>

      {activeItem && (
        <PortfolioModal
          url={activeItem.url}
          platform={activeItem.platform}
          title={activeItem.title}
          onClose={() => setActiveItem(null)}
        />
      )}
    </>
  );
}
