export function Glow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* top glow */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      {/* subtle warm glow (alcove-like) */}
      <div className="absolute top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
    </div>
  );
}
