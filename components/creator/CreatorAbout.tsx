"use client";

import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import { useContent } from "../admin/ContentProvider";

function PlatformIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    TikTok:
      "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v11.01c-.01 2.51-1.02 4.96-2.83 6.73-1.81 1.77-4.25 2.76-6.79 2.76-2.54 0-5.03-1-6.84-2.79-1.81-1.79-2.82-4.22-2.82-6.76 0-2.54 1.01-4.97 2.82-6.76 1.81-1.79 4.3-2.79 6.84-2.79.45 0 .89.04 1.33.1v4.05c-.42-.14-.86-.22-1.31-.22-1.55 0-3.01.61-4.1 1.71-1.09 1.1-1.7 2.57-1.7 4.13 0 1.56.61 3.03 1.7 4.13 1.09 1.1 2.55 1.71 4.1 1.71 1.55 0 3.01-.61 4.1-1.71 1.09-1.1 1.7-2.57 1.7-4.13V.02z",
    Instagram:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    YouTube:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  };

  return (
    <svg
      className="w-5 h-5 text-secondary group-hover:text-accent transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export default function CreatorAbout() {
  const { content } = useContent();
  const about = content.creator.about;
  const platforms = content.creator.platforms.items;

  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-4xl">
        <FadeIn as="p" className="text-sm text-accent mb-6">
          <EditableText
            contentKey="creator.about.sectionLabel"
            value={about.sectionLabel}
          />
        </FadeIn>
        <FadeIn as="p" delay={0.1} className="heading-display font-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-primary">
          <EditableText
            contentKey="creator.about.quote"
            value={about.quote}
          />
        </FadeIn>

        <div className="mt-12 flex flex-wrap gap-6">
          {platforms.map((platform, i) => (
            <StaggerItem key={i} index={i}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-card border border-border bg-surface px-6 py-4 transition-all duration-200 hover:border-accent/30"
              >
                <PlatformIcon name={platform.platform} />
                <div>
                  <p className="text-xs text-secondary">{platform.platform}</p>
                  <p className="text-sm text-primary">
                    <EditableText
                      contentKey={`creator.platforms.items.${i}.handle`}
                      value={platform.handle}
                    />
                  </p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
