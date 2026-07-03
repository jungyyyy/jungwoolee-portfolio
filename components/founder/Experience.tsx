"use client";

import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import { useContent } from "../admin/ContentProvider";

export default function Experience() {
  const { content } = useContent();
  const experience = content.founder.experience;

  return (
    <SectionWrapper id="experience" variant="alt">
      <div className="mx-auto max-w-7xl">
        <FadeIn as="p" className="eyebrow mb-4">
          <EditableText
            contentKey="founder.experience.sectionLabel"
            value={experience.sectionLabel}
          />
        </FadeIn>
        <FadeIn as="h2" delay={0.1} className="heading-section text-3xl md:text-4xl mb-16">
          <EditableText
            contentKey="founder.experience.heading"
            value={experience.heading}
          />
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[7px] md:left-[119px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experience.items.map((item, index) => (
              <StaggerItem key={index} index={index}>
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-2 flex items-start gap-4 md:justify-end md:pr-8">
                    <div className="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent bg-background md:absolute md:-right-[7px] md:top-2" />
                    <p className="text-sm font-medium text-accent md:text-right font-body">
                      <EditableText
                        contentKey={`founder.experience.items.${index}.period`}
                        value={item.period}
                      />
                    </p>
                  </div>

                  <div className="md:col-span-10 md:pl-8">
                    <h3 className="text-lg font-semibold text-primary font-body">
                      <EditableText
                        contentKey={`founder.experience.items.${index}.title`}
                        value={item.title}
                      />
                    </h3>
                    <p className="text-sm text-accent/80 font-body">
                      <EditableText
                        contentKey={`founder.experience.items.${index}.place`}
                        value={item.place}
                      />
                    </p>
                    <p className="mt-2 text-secondary leading-[1.75] max-w-xl font-body">
                      <EditableText
                        contentKey={`founder.experience.items.${index}.description`}
                        value={item.description}
                      />
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
