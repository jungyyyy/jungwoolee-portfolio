"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import EditableImage from "../admin/EditableImage";
import { useContent } from "../admin/ContentProvider";

export default function FounderAbout() {
  const { t } = useTranslation();
  const { content } = useContent();
  const { about, stats } = content.founder;

  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <FadeIn as="p" className="text-sm text-accent mb-6">
              <EditableText
                contentKey="founder.about.sectionLabel"
                value={about.sectionLabel}
              />
            </FadeIn>
            {about.quoteLine1 && (
              <FadeIn as="blockquote" delay={0.1} className="heading-display font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
                <EditableText
                  contentKey="founder.about.quoteLine1"
                  value={about.quoteLine1}
                />
                <br />
                <EditableText
                  contentKey="founder.about.quoteLine2"
                  value={about.quoteLine2}
                />
              </FadeIn>
            )}

            <FadeIn delay={0.2} className="relative mt-10 max-w-sm">
              <div className="absolute inset-3 dot-grid rounded-card opacity-50" />
              <div className="relative -rotate-2 overflow-hidden rounded-card border border-accent/40 hero-photo-shadow">
                <EditableImage
                  contentKey="images.about"
                  src={content.images.about}
                  alt={t("about.altPhoto")}
                  width={480}
                  height={360}
                  className="aspect-[4/3] w-full object-cover"
                  wrapperClassName="block w-full"
                  uploadLabel={t("about.uploadAbout")}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6">
            {about.paragraphs.map((para, i) => (
              <FadeIn as="p" key={i} delay={0.1 + i * 0.1} className="text-secondary leading-relaxed">
                <EditableText
                  contentKey={`founder.about.paragraphs.${i}`}
                  value={para}
                />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }, i) => (
            <StaggerItem key={i} index={i}>
              <div className="rounded-card border border-border bg-surface p-6 text-center">
                <p className="font-heading text-5xl font-bold text-accent heading-display">
                  <EditableText
                    contentKey={`founder.stats.${i}.value`}
                    value={value}
                  />
                </p>
                <p className="mt-2 text-sm text-secondary">
                  <EditableText
                    contentKey={`founder.stats.${i}.label`}
                    value={label}
                  />
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
