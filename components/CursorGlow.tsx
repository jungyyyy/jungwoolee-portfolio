"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.8 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden md:block h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2 opacity-[0.07] blur-[100px]"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  );
}
