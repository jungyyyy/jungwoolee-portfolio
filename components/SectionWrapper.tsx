import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "alt";
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  variant = "default",
}: SectionWrapperProps) {
  const bg = variant === "alt" ? "bg-bg-alt" : "bg-background";

  return (
    <section
      id={id}
      className={`px-6 md:px-12 lg:px-20 py-20 ${bg} ${className}`}
    >
      {children}
    </section>
  );
}
