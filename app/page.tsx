"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SectionDivider from "@/components/SectionDivider";
import { ContentProvider } from "@/components/admin/ContentProvider";
import { Mode } from "@/lib/content";

import FounderHero from "@/components/founder/FounderHero";
import FounderAbout from "@/components/founder/FounderAbout";
import Experience from "@/components/founder/Experience";
import Skills from "@/components/founder/Skills";
import FounderContact from "@/components/founder/FounderContact";

import CreatorHero from "@/components/creator/CreatorHero";
import CreatorAbout from "@/components/creator/CreatorAbout";
import ContentPortfolio from "@/components/creator/ContentPortfolio";
import PlatformsReach from "@/components/creator/PlatformsReach";
import WhatBrandsGet from "@/components/creator/WhatBrandsGet";
import CreatorContact from "@/components/creator/CreatorContact";
import DocumentMeta from "@/components/DocumentMeta";

function PortfolioContent() {
  const [mode, setMode] = useState<Mode>("founder");

  return (
    <>
      <DocumentMeta />
      <Navigation mode={mode} onModeChange={setMode} />

      <main>
        <AnimatePresence mode="wait">
          {mode === "founder" ? (
            <motion.div
              key="founder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FounderHero />
              <SectionDivider />
              <FounderAbout />
              <SectionDivider />
              <Experience />
              <SectionDivider />
              <Skills />
              <SectionDivider />
              <FounderContact />
            </motion.div>
          ) : (
            <motion.div
              key="creator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CreatorHero />
              <SectionDivider />
              <CreatorAbout />
              <SectionDivider />
              <ContentPortfolio />
              <SectionDivider />
              <PlatformsReach />
              <SectionDivider />
              <WhatBrandsGet />
              <SectionDivider />
              <CreatorContact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

export default function HomePage() {
  return (
    <ContentProvider>
      <PortfolioContent />
    </ContentProvider>
  );
}
