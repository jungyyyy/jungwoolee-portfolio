"use client";

import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import { useContent } from "../admin/ContentProvider";

export default function PlatformsReach() {
  const { content } = useContent();
  const platforms = content.creator.platforms;

  return (
    <SectionWrapper id="platforms" variant="alt">
      <div className="mx-auto max-w-7xl">
        <FadeIn as="p" className="eyebrow mb-4">
          <EditableText
            contentKey="creator.platforms.sectionLabel"
            value={platforms.sectionLabel}
          />
        </FadeIn>
        <FadeIn as="h2" delay={0.1} className="heading-section text-3xl md:text-4xl mb-12">
          <EditableText
            contentKey="creator.platforms.heading"
            value={platforms.heading}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.items.map((platform, i) => (
            <StaggerItem key={i} index={i}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-card border border-border bg-surface p-8 shadow-card transition-all duration-200 hover:border-accent/40 hover:shadow-card-hover hover:-translate-y-1 h-full"
              >
                <h3 className="heading-display font-heading text-2xl font-bold text-primary">
                  <EditableText
                    contentKey={`creator.platforms.items.${i}.platform`}
                    value={platform.platform}
                  />
                </h3>
                <p className="mt-2 text-accent font-body">
                  <EditableText
                    contentKey={`creator.platforms.items.${i}.handle`}
                    value={platform.handle}
                  />
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-primary font-body">
                      <EditableText
                        contentKey={`creator.platforms.items.${i}.focus`}
                        value={platform.focus}
                      />
                    </p>
                    <p className="text-xs text-secondary mt-1 font-body">
                      <EditableText
                        contentKey={`creator.platforms.items.${i}.cadence`}
                        value={platform.cadence}
                      />
                    </p>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
