const SEGMENT = "Available for opportunities in Hamburg  ·  Creative Strategy  ·  UGC  ·  Performance Marketing  ·  Open to work  ·  ";

export default function MarqueeBar() {
  const content = SEGMENT.repeat(6);

  return (
    <div
      className="w-full bg-accent overflow-hidden h-9 flex items-center"
      aria-hidden="true"
    >
      <div className="marquee-track whitespace-nowrap font-body text-[13px] font-medium text-white">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
