"use client";

import { HeroContent, HeroPhoto } from "../HeroShared";
import { useContent } from "../admin/ContentProvider";

export default function CreatorHero() {
  const { content } = useContent();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-16 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center py-16 lg:py-0">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <HeroContent
            prefix="creator.hero"
            data={content.creator.hero}
            primaryHref="#portfolio"
            secondaryHref="#contact"
          />
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <HeroPhoto
            contentKey="images.creatorHero"
            alt="Jungwoo Lee — Content Creator"
            className="max-w-sm mx-auto lg:max-w-none lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
