"use client";

import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import { useContent } from "../admin/ContentProvider";

export default function Building() {
  const { content } = useContent();
  const building = content.founder.building;

  return (
    <SectionWrapper id="building" variant="default">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="rounded-card border border-border bg-surface p-8 md:p-12 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
            <div className="grid grid-cols-1 gap-10 items-start">
              <div>
                <FadeIn as="p" delay={0.1} className="eyebrow mb-3">
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
                <FadeIn as="p" delay={0.3} className="mt-2 text-lg text-secondary font-body">
                  <EditableText
                    contentKey="founder.building.subtitle"
                    value={building.subtitle}
                  />
                </FadeIn>

                <FadeIn as="p" delay={0.4} className="mt-6 text-secondary leading-[1.75] max-w-2xl font-body">
                  <EditableText
                    contentKey="founder.building.description"
                    value={building.description}
                  />
                </FadeIn>

                <ul className="mt-6 space-y-3">
                  {building.bullets.map((bullet, i) => (
                    <StaggerItem key={i} index={i} as="li" className="flex items-start gap-3 text-primary font-body">
                      <span className="text-accent mt-0.5 shrink-0">✦</span>
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
                      <span className="tag-chip">
                        <EditableText
                          contentKey={`founder.building.tags.${i}`}
                          value={tag}
                        />
                      </span>
                    </StaggerItem>
                  ))}
                </div>

                {building.websiteUrl && (
                  <FadeIn delay={0.5}>
                    <a
                      href={building.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center mt-8 text-accent font-body transition-opacity hover:opacity-80"
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
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
