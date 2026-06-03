"use client";

import SectionWrapper from "../SectionWrapper";
import FadeIn from "../FadeIn";
import EditableText from "../admin/EditableText";
import SocialIcons from "../SocialIcons";
import { useContent } from "../admin/ContentProvider";

export default function CreatorContact() {
  const { content } = useContent();
  const contact = content.creator.contact;
  const email = content.shared.contactEmail;

  return (
    <SectionWrapper id="contact" className="pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn as="h2" className="heading-section text-4xl md:text-5xl lg:text-6xl">
          <EditableText
            contentKey="creator.contact.heading"
            value={contact.heading}
          />
        </FadeIn>
        <FadeIn as="p" delay={0.1} className="mt-6 text-secondary leading-relaxed max-w-lg mx-auto">
          <EditableText
            contentKey="creator.contact.subtext"
            value={contact.subtext}
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <a
            href={`mailto:${email}`}
            className="group inline-block mt-10 font-heading text-2xl md:text-3xl text-accent transition-opacity hover:opacity-80"
          >
            <EditableText
              contentKey="shared.contactEmail"
              value={email}
            />
            <span className="block h-px w-0 mx-auto bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        </FadeIn>
        {contact.replyNote && (
          <FadeIn as="p" delay={0.3} className="mt-4 text-sm text-secondary">
            <EditableText
              contentKey="creator.contact.replyNote"
              value={contact.replyNote}
            />
          </FadeIn>
        )}
        <FadeIn delay={0.4}>
          <SocialIcons
            links={content.shared.socialLinks}
            className="justify-center mt-12"
            iconClassName="w-6 h-6"
          />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
