import { BackgroundEffects } from "@/components/background-effects";
import { WaitlistForm } from "@/components/waitlist-form";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export default function Page() {
  return (
    <main
      className={[
        "relative min-h-dvh w-full overflow-hidden",
        "bg-[#07090C] text-[#E9EEF2]",
        inter.variable,
        playfair.variable,
      ].join(" ")}
    >
      <BackgroundEffects />

      {/* Full-bleed layout (no “container box” feel) */}
      <div className="relative z-10 flex min-h-dvh w-full flex-col">
        {/* Centered hero block, but background remains edge-to-edge */}
        <section className="flex flex-1 items-center justify-center px-5 pb-10 pt-14 sm:px-10 sm:pb-16 sm:pt-20">
          <div className="w-full">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
              {/* Logo / Icon */}
              <div className="mb-10 sm:mb-12">
                <div className="group relative">
                  {/* Outer app icon glass */}
                  <div className="relative h-20 w-20 rounded-[22px] border border-white/12 bg-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-24 sm:w-24">
                    {/* Soft highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-b from-white/10 to-transparent" />
                    {/* Inner depth */}
                    <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />

                    {/* Portal */}
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="relative h-[58%] w-[58%]">
                        {/* Portal base */}
                        <div className="absolute inset-0 rounded-[18px] bg-black/35 shadow-[inset_0_1px_8px_rgba(0,0,0,0.55)]" />
                        <div className="absolute inset-0 rounded-[18px] border border-white/10" />

                        {/* Arched doorway */}
                        <div className="absolute left-1/2 top-[54%] h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-[rgba(255,196,120,0.22)] blur-[1px]" />
                        <div className="absolute left-1/2 top-[54%] h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-[rgba(255,196,120,0.12)] blur-xl" />

                        {/* “Breathing” glow */}
                        <div className="portal-breathe absolute left-1/2 top-[54%] h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-[rgba(255,196,120,0.10)] blur-2xl" />
                      </div>
                    </div>
                  </div>

                  {/* Tiny ambient glow under icon */}
                  <div className="pointer-events-none absolute left-1/2 top-full mt-4 h-10 w-24 -translate-x-1/2 rounded-full bg-[rgba(46,107,90,0.18)] blur-2xl" />
                </div>
              </div>

              {/* Hero headline */}
              <h1 className="font-[var(--font-sans)] text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                A quiet place to
              </h1>

              <h2 className="mt-2 font-[var(--font-serif)] text-[2.55rem] font-medium italic leading-[1.05] tracking-[-0.02em] text-white/92 sm:text-[4.1rem]">
                see what’s new.
              </h2>

              {/* Subheadline */}
              <p className="mt-6 max-w-[44rem] text-sm leading-relaxed text-[rgba(170,179,187,0.78)] sm:text-base">
                The best way to keep up with your favourite websites, newsletters,
                and subscriptions—without the noise.
              </p>

              {/* Waitlist form */}
              <div className="mt-9 w-full max-w-xl">
                <WaitlistForm />
              </div>

              {/* Ultra subtle micro-copy (optional) */}
              <p className="mt-8 text-xs text-white/35">
                Calm by default. Fast when it matters.
              </p>
            </div>
          </div>
        </section>

        {/* Footer pinned to bottom, still full-width */}
        <footer className="px-5 pb-10 sm:px-10 sm:pb-12">
          <p className="text-center text-xs text-white/35">
            © 2025 — @YourHandle
          </p>
        </footer>
      </div>
    </main>
  );
}
