export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090C] via-[#07090C] to-[#0B0F12]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_25%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_85%,rgba(0,0,0,0.75),transparent_60%)]" />

      {/* Teal glow behind headline (pulsing) */}
      <div className="glow-pulse absolute left-1/2 top-[26%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(46,107,90,0.24)] blur-[80px] sm:h-[760px] sm:w-[760px]" />
      <div className="glow-pulse-delayed absolute left-1/2 top-[28%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(46,107,90,0.14)] blur-[95px] sm:h-[640px] sm:w-[640px]" />

      {/* Starfield */}
      <div className="starfield absolute inset-0 opacity-[0.22]" />
      <div className="starfield starfield-2 absolute inset-0 opacity-[0.14]" />

      {/* Planet horizon arc */}
      <div className="absolute bottom-[-34vh] left-1/2 h-[82vh] w-[160vw] -translate-x-1/2 rounded-[9999px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),rgba(0,0,0,0)_62%)] blur-[2px]" />
      <div className="absolute bottom-[-36vh] left-1/2 h-[84vh] w-[170vw] -translate-x-1/2 rounded-[9999px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.72),rgba(0,0,0,0)_62%)]" />

      {/* Rim light */}
      <div className="absolute bottom-[6.5vh] left-1/2 h-[2px] w-[78vw] -translate-x-1/2 rounded-full bg-[rgba(210,255,245,0.10)] blur-[2px]" />
      <div className="absolute bottom-[6.2vh] left-1/2 h-[12px] w-[82vw] -translate-x-1/2 rounded-full bg-[rgba(46,107,90,0.10)] blur-xl" />
    </div>
  );
}
