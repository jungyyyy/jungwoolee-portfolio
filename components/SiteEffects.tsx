"use client";

import CursorGlow from "./CursorGlow";
import LoadingScreen from "./LoadingScreen";
import NoiseOverlay from "./NoiseOverlay";

export default function SiteEffects({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoiseOverlay />
      <CursorGlow />
      <LoadingScreen />
      <div className="relative z-[3]">{children}</div>
    </>
  );
}
