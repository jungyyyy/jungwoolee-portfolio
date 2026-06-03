export default function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
      <div className="relative h-px bg-[#1a1a1a]">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>
    </div>
  );
}
