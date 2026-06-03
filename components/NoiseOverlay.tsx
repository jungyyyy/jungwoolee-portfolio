export default function NoiseOverlay() {
  return (
    <>
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="noise-overlay pointer-events-none fixed inset-0 z-[2]"
        aria-hidden="true"
      />
    </>
  );
}
