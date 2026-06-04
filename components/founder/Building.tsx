"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import EditableImage from "../admin/EditableImage";
import { useContent } from "../admin/ContentProvider";

export default function Building() {
  const { t } = useTranslation();
  const { content } = useContent();
  const building = content.founder.building;

  return (
    <SectionWrapper id="building">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="rounded-card border border-accent/20 bg-surface p-8 md:p-12 shadow-amber-glow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <FadeIn delay={0.1} className="lg:col-span-3 flex items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-card border border-accent/30 bg-background p-4">
                  <EditableImage
                    contentKey="images.spreadableLogo"
                    src={content.images.spreadableLogo}
                    alt={t("building.logoAlt")}
                    width={120}
                    height={120}
                    className="h-full w-full object-contain"
                    wrapperClassName="h-full w-full"
                    uploadLabel={t("building.uploadLogo")}
                  />
                </div>
              </FadeIn>

              <div className="lg:col-span-9">
                <FadeIn as="p" delay={0.1} className="text-sm text-accent mb-2">
                  <EditableText
                    contentKey="founder.building.sectionLabel"
                    value={building.sectionLabel}
                  />
                </FadeIn>
                <FadeIn as="h2" delay={0.2} className="heading-section text-3xl md:text-4xl">
                  <EditableText
                    contentKey="founder.building.title"
                    value={building.title}
                  />
                </FadeIn>
                <FadeIn as="p" delay={0.3} className="mt-2 text-lg text-secondary">
                  <EditableText
                    contentKey="founder.building.subtitle"
                    value={building.subtitle}
                  />
                </FadeIn>

                <FadeIn as="p" delay={0.4} className="mt-6 text-secondary leading-relaxed max-w-2xl">
                  <EditableText
                    contentKey="founder.building.description"
                    value={building.description}
                  />
                </FadeIn>

                <ul className="mt-6 space-y-3">
                  {building.bullets.map((bullet, i) => (
                    <StaggerItem key={i} index={i} as="li" className="flex items-start gap-3 text-primary">
                      <span className="text-accent mt-0.5">✦</span>
                      <EditableText
                        contentKey={`founder.building.bullets.${i}`}
                        value={bullet}
                      />
                    </StaggerItem>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {building.tags.map((tag, i) => (
                    <StaggerItem key={i} index={i}>
                      <span className="inline-block rounded-pill bg-border px-4 py-1.5 text-xs text-secondary">
                        <EditableText
                          contentKey={`founder.building.tags.${i}`}
                          value={tag}
                        />
                      </span>
                    </StaggerItem>
                  ))}
                </div>

                <FadeIn delay={0.5}>
                  <a
                    href={building.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center mt-8 text-accent transition-opacity hover:opacity-80"
                  >
                    <EditableText
                      contentKey="founder.building.websiteLabel"
                      value={building.websiteLabel}
                    />
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </FadeIn>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
