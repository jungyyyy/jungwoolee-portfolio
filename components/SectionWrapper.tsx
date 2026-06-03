import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-6 md:px-12 lg:px-20 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
