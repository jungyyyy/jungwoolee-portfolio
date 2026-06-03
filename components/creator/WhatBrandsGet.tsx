"use client";

import SectionWrapper from "../SectionWrapper";
import FadeIn, { StaggerItem } from "../FadeIn";
import EditableText from "../admin/EditableText";
import { useContent } from "../admin/ContentProvider";

export default function WhatBrandsGet() {
  const { content } = useContent();
  const brands = content.creator.brands;

  return (
    <SectionWrapper id="brands">
      <div className="mx-auto max-w-7xl">
        <FadeIn as="p" className="text-sm text-accent mb-4">
          <EditableText
            contentKey="creator.brands.sectionLabel"
            value={brands.sectionLabel}
          />
        </FadeIn>
        <FadeIn as="h2" delay={0.1} className="heading-section text-3xl md:text-4xl mb-12">
          <EditableText
            contentKey="creator.brands.heading"
            value={brands.heading}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.items.map(({ emoji, title, description }, i) => (
            <StaggerItem key={i} index={i}>
              <div className="rounded-card border border-border bg-surface p-8 h-full">
                <span className="text-3xl">{emoji}</span>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  <EditableText
                    contentKey={`creator.brands.items.${i}.title`}
                    value={title}
                  />
                </h3>
                <p className="mt-3 text-secondary leading-relaxed text-sm">
                  <EditableText
                    contentKey={`creator.brands.items.${i}.description`}
                    value={description}
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
