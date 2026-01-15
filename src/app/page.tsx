import { BackgroundEffects } from "@/components/background-effects";
import { WaitlistForm } from "@/components/waitlist-form";
import { Section } from "@/components/section";
import { StoreButtons } from "@/components/store-buttons";
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

const APP_NAME = "Businnect";

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

      {/* Full-bleed page (no constrained “box” feel) */}
      <div className="relative z-10 flex min-h-dvh w-full flex-col">
        {/* HERO */}
        <section className="flex flex-1 items-center justify-center px-5 pb-10 pt-14 sm:px-10 sm:pb-16 sm:pt-20">
          <div className="w-full">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-9 sm:mb-12">
                <div className="group relative">
                  <div className="relative h-20 w-20 rounded-[22px] border border-white/12 bg-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-24 sm:w-24">
                    <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-b from-white/10 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />

                    {/* Portal */}
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="relative h-[58%] w-[58%]">
                        <div className="absolute inset-0 rounded-[18px] bg-black/35 shadow-[inset_0_1px_8px_rgba(0,0,0,0.55)]" />
                        <div className="absolute inset-0 rounded-[18px] border border-white/10" />

                        <div className="absolute left-1/2 top-[54%] h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-[rgba(255,196,120,0.22)] blur-[1px]" />
                        <div className="absolute left-1/2 top-[54%] h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-[rgba(255,196,120,0.12)] blur-xl" />
                        <div className="portal-breathe absolute left-1/2 top-[54%] h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-[rgba(255,196,120,0.10)] blur-2xl" />
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute left-1/2 top-full mt-4 h-10 w-28 -translate-x-1/2 rounded-full bg-[rgba(46,107,90,0.18)] blur-2xl" />
                </div>
              </div>

              {/* Headline (premium + cinematic, but Businnect relevant) */}
              <h1 className="font-[var(--font-sans)] text-[2.15rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                Business meets people,
              </h1>

              <h2 className="mt-2 font-[var(--font-serif)] text-[2.55rem] font-medium italic leading-[1.05] tracking-[-0.02em] text-white/92 sm:text-[4.1rem]">
                without the noise.
              </h2>

              <p className="mt-6 max-w-[46rem] text-sm leading-relaxed text-[rgba(170,179,187,0.78)] sm:text-base">
                {APP_NAME} helps business owners and everyday users connect faster —
                discover, chat, and build real relationships in a clean, mobile-first experience.
              </p>

              {/* Primary CTA row */}
              <div className="mt-9 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href="#download"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition duration-300 ease-out hover:bg-white/90 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  Download the app
                </a>

                <a
                  href="#features"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/85 backdrop-blur transition duration-300 ease-out hover:bg-white/10 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  See how it works
                </a>
              </div>

              {/* Waitlist (optional, still premium) */}
              <div className="mt-10 w-full max-w-xl">
                <WaitlistForm />
              </div>

              <p className="mt-6 text-xs text-white/35">
                Calm design. Fast flow. Clear outcomes.
              </p>
            </div>

            {/* Sections (still full-bleed background, readable inner width) */}
            <div className="mx-auto mt-16 w-full max-w-6xl px-0">
              <Section
                id="features"
                title="Your Place To Grow"
                subtitle="Built for clarity, community, & connecting."
              >
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Fast onboarding",
                      desc: "Create your profile quickly and start connecting immediately.",
                    },
                    {
                      title: "Clean discovery",
                      desc: "Find the right people and businesses without clutter.",
                    },
                    {
                      title: "Messaging that works",
                      desc: "Start real conversations with a smooth chat experience.",
                    },
                    {
                      title: "Mobile-first",
                      desc: "Optimized for phones, where anyone, anywhere can use it easily.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    >
                      <h3 className="text-sm font-semibold text-white/90">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section
                title="Communication. Speed. Result."
                subtitle="The three things that matter the most in this generation of people."
              >
                <div className="grid gap-3 lg:grid-cols-3">
                  {[
                    {
                      title: "Communication",
                      points: [
                        "Clear milestones and short weekly check-ins (or faster if needed).",
                        "Simple, visual progress updates, zero confusion.",
                      ],
                    },
                    {
                      title: "Speed",
                      points: [
                        "Lean scope → fast iterations.",
                        "Mobile-first decisions → less rework later.",
                      ],
                    },
                    {
                      title: "Result",
                      points: [
                        "Actual people you are now having as mentors or friends.",
                        "A clean system that supports growth, not just aesthetics.",
                      ],
                    },
                  ].map((b) => (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    >
                      <h3 className="text-sm font-semibold text-white/90">
                        {b.title}
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-white/65">
                        {b.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>

              <Section
                title="What people feel"
                subtitle=
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      quote:
                        "Clear communication, fast turnaround, and the result was exactly what I needed.",
                      name: " Joshya K.",
                      role: "Founder",
                    },
                    {
                      quote:
                        "Premium look, smooth flow, and everything was simple to review and approve.",
                      name: "Sindy L.",
                      role: "Employee at a big 4 firm",
                    },
                  ].map((t, idx) => (
                    <figure
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    >
                      <blockquote className="text-sm leading-relaxed text-white/75">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-4 text-xs text-white/50">
                        <span className="text-white/70">{t.name}</span> · {t.role}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </Section>

              {/* Download section (still / only) */}
              <Section
                id="download"
                title="Download Businnect"
                subtitle="Choose your platform. Simple and direct."
              >
                <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.40)] sm:p-8">
                  <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/65">
                  </p>

                  <div className="mt-6 flex justify-center">
                    <StoreButtons />
                  </div>

                  <p className="mt-6 text-xs text-white/35">
                    Built to feel premium, load fast, and guide users to the app.
                  </p>
                </div>
              </Section>

              <div className="h-10 sm:h-16" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-5 pb-10 sm:px-10 sm:pb-12">
          <p className="text-center text-xs text-white/35">
            © 2025 — {APP_NAME}
          </p>
        </footer>
      </div>
    </main>
  );
}
