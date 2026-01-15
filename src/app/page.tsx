import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { Glow } from "@/components/glow";
import { StoreButtons } from "@/components/store-buttons";
import { Section } from "@/components/section";

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Businnect";
const TAGLINE =
  process.env.NEXT_PUBLIC_APP_TAGLINE ??
  "A calm, simple place to get the app.";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-[#0b0d12] text-white">
      <Glow />

      <div className="mx-auto max-w-3xl px-5 pb-20 pt-14 sm:pt-20">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9">
              <AppIcon />
            </div>
            <span className="text-sm font-medium tracking-wide text-white/85">
              {APP_NAME}
            </span>
          </div>

          <Link
            href="/download"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur hover:bg-white/10"
          >
            Download
          </Link>
        </header>

        {/* Hero (Alcove-inspired: big centered headline + short copy + single CTA) */}
        <div className="pt-16 sm:pt-24">
          <div className="mx-auto mb-8 flex w-full justify-center">
            <div className="h-20 w-20 sm:h-24 sm:w-24">
              <AppIcon />
            </div>
          </div>

          <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-6xl">
            A better way to connect.
          </h1>
          <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight text-white/80 sm:text-6xl">
            Without the noise.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-center text-base leading-relaxed text-white/70 sm:text-lg">
            {TAGLINE}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/download"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90 sm:w-auto"
            >
              Get the app
            </Link>

            <a
              href="#why"
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-medium text-white/85 backdrop-blur hover:bg-white/10 sm:w-auto"
            >
              See what it does
            </a>
          </div>

          <p className="mt-5 text-center text-xs text-white/45">
            Fast. Clear. Built for real users.
          </p>
        </div>

        {/* Why */}
        <Section id="why" title="Simple by design" subtitle="Built for speed and clarity.">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Quick onboarding",
                desc: "Get in, set up your profile, and start connecting in minutes.",
              },
              {
                title: "Clean feed",
                desc: "See what matters. No clutter, no confusion.",
              },
              {
                title: "Messaging that works",
                desc: "Start real conversations with business owners and people nearby.",
              },
              {
                title: "Mobile-first experience",
                desc: "Optimized for phones — the way it’s meant to be used.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <h3 className="text-sm font-semibold text-white/90">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Credibility / Results */}
        <Section
          title="Communication. Speed. Result."
          subtitle="The 3 things you said matter most — this is how we deliver them."
        >
          <div className="grid gap-3">
            {[
              {
                title: "Communication",
                points: [
                  "Clear milestones and daily/48h updates during active work.",
                  "Short Loom walkthroughs for every delivery (no confusion).",
                ],
              },
              {
                title: "Speed",
                points: [
                  "Lean scope, fast iterations, tight feedback loops.",
                  "Mobile-first landing + download flow shipped early.",
                ],
              },
              {
                title: "Result",
                points: [
                  "A site that looks premium and loads fast.",
                  "Direct path to App Store / Play Store with smart routing.",
                ],
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <h3 className="text-sm font-semibold text-white/90">{b.title}</h3>
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

        {/* Testimonials (placeholders you can replace with real ones) */}
        <Section title="What clients say" subtitle="Replace these with real quotes as you collect them.">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                quote:
                  "They moved fast, communicated clearly, and delivered exactly what we needed.",
                name: "Client",
                role: "Product Founder",
              },
              {
                quote:
                  "Clean design, great attention to detail, and zero back-and-forth confusion.",
                name: "Client",
                role: "Business Owner",
              },
            ].map((t, idx) => (
              <figure
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
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

        {/* Final CTA */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Ready to download?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-white/65">
            Choose your device — we’ll route you to the right store.
          </p>

          <div className="mt-6 flex justify-center">
            <StoreButtons />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center gap-2 text-center text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {APP_NAME}
          </p>
          <p className="text-white/35">
            Built for speed & clarity.{" "}
            <span className="text-white/25">Design + build by Pehchaan Media.</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
