"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "jl-portfolio-loaded";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem(SESSION_KEY);
    if (hasLoaded) return;

    setVisible(true);
    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-heading text-5xl font-bold text-accent heading-display"
          >
            JL
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
