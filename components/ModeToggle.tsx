"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mode } from "@/lib/content";

interface ModeToggleProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export default function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  const { t } = useTranslation();
  const activeIndex = mode === "founder" ? 0 : 1;

  const modes: { value: Mode; labelKey: string }[] = [
    { value: "founder", labelKey: "modeToggle.founder" },
    { value: "creator", labelKey: "modeToggle.creator" },
  ];

  return (
    <div className="relative flex items-center rounded-pill border border-border bg-surface p-1 max-w-full">
      <motion.div
        className="absolute top-1 bottom-1 rounded-pill bg-accent/10 border border-accent/30"
        initial={false}
        animate={{
          left: activeIndex === 0 ? "4px" : "50%",
          width: "calc(50% - 4px)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {modes.map(({ value, labelKey }) => (
        <button
          key={value}
          onClick={() => onModeChange(value)}
          className={`relative z-10 px-3 py-1.5 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
            mode === value ? "text-accent" : "text-secondary hover:text-primary"
          }`}
        >
          {t(labelKey)}
          {mode === value && (
            <motion.span
              layoutId="mode-underline"
              className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-accent rounded-full"
            />
          )}
        </button>
      ))}
    </div>
  );
}
