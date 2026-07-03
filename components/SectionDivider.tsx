export default function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
      <div className="relative h-px bg-border">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-accent-2 text-base leading-none select-none">
          · · ·
        </span>
      </div>
    </div>
  );
}
