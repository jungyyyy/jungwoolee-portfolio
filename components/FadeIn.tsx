"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, staggerDelay } from "@/lib/motion";

type MotionTag =
  | "div"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "blockquote"
  | "li"
  | "article"
  | "a"
  | "span";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: MotionTag;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
}: FadeInProps) {
  const Component = motion.create(as);

  return (
    <Component
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGroup({ children, className = "" }: StaggerGroupProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  index,
  className = "",
  as = "div",
}: FadeInProps & { index: number }) {
  return (
    <FadeIn delay={staggerDelay(index)} className={className} as={as}>
      {children}
    </FadeIn>
  );
}
