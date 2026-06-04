"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import ModeToggle from "./ModeToggle";
import LanguageToggle from "./LanguageToggle";
import {
  Mode,
  founderNavLinks,
  creatorNavLinks,
  NavLink,
} from "@/lib/content";

interface NavigationProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

function NavLinkItem({
  link,
  activeSection,
  onClick,
}: {
  link: NavLink;
  activeSection: string;
  onClick?: () => void;
}) {
  const { t } = useTranslation();
  const isActive = activeSection === link.id;

  return (
    <a
      href={`#${link.id}`}
      onClick={onClick}
      className={`group relative text-sm transition-colors duration-200 ${
        isActive ? "text-accent" : "text-secondary hover:text-primary"
      }`}
    >
      {t(link.labelKey)}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}

export default function Navigation({ mode, onModeChange }: NavigationProps) {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = mode === "founder" ? founderNavLinks : creatorNavLinks;

  useEffect(() => {
    const links = mode === "founder" ? founderNavLinks : creatorNavLinks;
    const sectionIds = ["hero", ...links.map((l) => l.id)];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [mode]);

  useEffect(() => {
    setMobileOpen(false);
  }, [mode]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          <a
            href="#hero"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent shrink-0"
          >
            {t("common.name")}
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <NavLinkItem
                key={link.id}
                link={link}
                activeSection={activeSection}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageToggle />

            <a
              href="#contact"
              className="hidden md:inline-flex shrink-0 rounded-pill border border-border px-5 py-2 text-sm text-primary transition-all duration-200 hover:border-accent hover:text-accent"
            >
              {t("nav.contact")}
            </a>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(true)}
              aria-label={t("nav.openMenu")}
            >
              <span className="block h-px w-6 bg-primary" />
              <span className="block h-px w-6 bg-primary" />
              <span className="block h-px w-4 bg-primary" />
            </button>
          </div>
        </nav>

        <div className="hidden md:flex justify-center border-t border-border/30 px-6 py-2.5">
          <ModeToggle mode={mode} onModeChange={onModeChange} />
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden"
          >
            <div className="flex h-14 items-center justify-between px-6 border-b border-border">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t("common.name")}
              </span>
              <div className="flex items-center gap-4">
                <LanguageToggle />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label={t("nav.closeMenu")}
                  className="p-2 text-secondary hover:text-primary"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 px-6 py-12">
              <ModeToggle mode={mode} onModeChange={onModeChange} />

              <div className="flex flex-col items-center gap-6 mt-4">
                {navLinks.map((link) => (
                  <NavLinkItem
                    key={link.id}
                    link={link}
                    activeSection={activeSection}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-pill border border-border px-8 py-3 text-sm text-primary transition-all duration-200 hover:border-accent hover:text-accent"
              >
                {t("nav.contact")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
