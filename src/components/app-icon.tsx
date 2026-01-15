export function AppIcon() {
  // Simple “alcove-like” icon: rounded square + arch glow
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-white/5" />
      <div className="absolute inset-0 rounded-3xl border border-white/10" />
      <div className="absolute inset-0 rounded-3xl shadow-[0_40px_120px_rgba(255,200,120,0.18)]" />

      <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-[28px] bg-black/30" />
        <div className="absolute inset-0 rounded-[28px] border border-white/10" />

        {/* arch */}
        <div className="absolute left-1/2 top-[52%] h-[64%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-gradient-to-b from-amber-100/70 to-amber-200/10 blur-[0.2px]" />
        <div className="absolute left-1/2 top-[52%] h-[64%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-amber-200/25 blur-xl" />
      </div>
    </div>
  );
}
