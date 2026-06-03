"use client";

interface EditModeBadgeProps {
  onLogout: () => Promise<void>;
}

export default function EditModeBadge({ onLogout }: EditModeBadgeProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[80] flex items-center gap-3 rounded-pill border border-accent/30 bg-surface px-4 py-2 shadow-amber-glow">
      <span className="text-sm text-accent">✏️ Edit Mode ON</span>
      <button
        onClick={() => onLogout()}
        className="text-xs text-secondary transition-colors hover:text-primary underline underline-offset-2"
      >
        Logout
      </button>
    </div>
  );
}
