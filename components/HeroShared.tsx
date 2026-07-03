"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import EditableText from "./admin/EditableText";
import EditableImage from "./admin/EditableImage";
import SocialIcons from "./SocialIcons";
import { useContent } from "./admin/ContentProvider";
import { HeroContent as HeroContentType } from "@/lib/content-types";

interface HeroPhotoProps {
  contentKey: "images.founderHero" | "images.creatorHero";
  alt?: string;
  className?: string;
}

export function HeroPhoto({
  contentKey,
  alt,
  className = "",
}: HeroPhotoProps) {
  const { t } = useTranslation();
  const { content } = useContent();
  const imageAlt = alt ?? t("hero.altDefault");
  const src = contentKey === "images.founderHero"
    ? content.images.founderHero
    : content.images.creatorHero;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <FadeIn className={`relative ${className}`} delay={0.2}>
      <div ref={ref} className="relative">
        <div className="absolute inset-4 dot-grid rounded-card opacity-60" />
        <motion.div style={{ y }} className="relative">
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 24px 70px rgba(232, 82, 42, 0.15)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rotate-[2.5deg] overflow-hidden rounded-card border border-border hero-photo-shadow"
          >
            <EditableImage
              contentKey={contentKey}
              src={src}
              alt={imageAlt}
              width={480}
              height={600}
              className="aspect-[4/5] w-full object-cover"
              wrapperClassName="block w-full"
              priority
              uploadLabel={t("hero.uploadHero")}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </FadeIn>
  );
}

interface HeroContentProps {
  prefix: "founder.hero" | "creator.hero";
  data: HeroContentType;
  primaryHref: string;
  secondaryHref: string;
}

export function HeroContent({
  prefix,
  data,
  primaryHref,
  secondaryHref,
}: HeroContentProps) {
  const { content } = useContent();

  return (
    <div className="flex flex-col justify-center">
      <FadeIn as="p" className="eyebrow mb-4">
        <EditableText contentKey={`${prefix}.label`} value={data.label} />
      </FadeIn>

      <FadeIn
        as="h1"
        delay={0.1}
        className="heading-display font-heading font-bold leading-[1.05] text-primary text-[clamp(48px,7vw,88px)]"
      >
        <EditableText
          contentKey={`${prefix}.heading`}
          value={data.heading}
          multiline
        />
      </FadeIn>

      <FadeIn as="p" delay={0.2} className="mt-6 max-w-[520px] text-base text-secondary leading-[1.75] font-body">
        <EditableText
          contentKey={`${prefix}.description`}
          value={data.description}
        />
      </FadeIn>

      <FadeIn delay={0.3} className="mt-8 flex flex-wrap gap-4">
        <a
          href={secondaryHref}
          className="rounded border border-accent px-7 py-3 text-sm font-medium text-accent font-body transition-all duration-200 hover:bg-accent hover:text-white"
        >
          <EditableText
            contentKey={`${prefix}.secondaryCtaLabel`}
            value={data.secondaryCtaLabel}
          />
        </a>
      </FadeIn>

      <FadeIn delay={0.4} className="mt-10">
        <SocialIcons links={content.shared.socialLinks} />
      </FadeIn>
    </div>
  );
}
