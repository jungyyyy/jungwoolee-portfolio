"use client";

import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import { useContent } from "../admin/ContentProvider";

export default function Skills() {
  const { content } = useContent();
  const skills = content.founder.skills;

  return (
    <SectionWrapper id="skills" variant="default">
      <div className="mx-auto max-w-7xl">
        <FadeIn as="p" className="eyebrow mb-4">
          <EditableText
            contentKey="founder.skills.sectionLabel"
            value={skills.sectionLabel}
          />
        </FadeIn>
        <FadeIn as="h2" delay={0.1} className="heading-section text-3xl md:text-4xl mb-16">
          <EditableText
            contentKey="founder.skills.heading"
            value={skills.heading}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.groups.map(({ title, skills: groupSkills }, groupIndex) => (
            <StaggerItem key={groupIndex} index={groupIndex}>
              <div>
                <h3 className="text-sm font-medium text-primary mb-4 font-body uppercase tracking-wide">
                  <EditableText
                    contentKey={`founder.skills.groups.${groupIndex}.title`}
                    value={title}
                  />
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupSkills.map((skill, skillIndex) => (
                    <StaggerItem key={skillIndex} index={skillIndex}>
                      <span className="inline-block rounded-pill border border-border bg-surface px-4 py-2 text-sm text-secondary font-body transition-colors duration-200 hover:border-accent hover:text-accent cursor-default shadow-card">
                        <EditableText
                          contentKey={`founder.skills.groups.${groupIndex}.skills.${skillIndex}`}
                          value={skill}
                        />
                      </span>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
