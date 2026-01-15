import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { Glow } from "@/components/glow";
import { SmartRedirect } from "@/components/smart-redirect";
import { StoreButtons } from "@/components/store-buttons";

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Businnect";

export default function DownloadPage() {
  return (
    <main className="min-h-dvh bg-[#0b0d12] text-white">
      <Glow />
      <div className="mx-auto max-w-2xl px-5 pb-16 pt-14 sm:pt-20">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur hover:bg-white/10"
          >
            ← Back
          </Link>
          <span className="text-sm text-white/55">Download</span>
        </header>

        <div className="pt-14 text-center sm:pt-20">
          <div className="mx-auto mb-6 h-20 w-20 sm:h-24 sm:w-24">
            <AppIcon />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Get {APP_NAME}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
            If you’re on mobile, we’ll take you to the right store automatically.
            If not, choose your platform below.
          </p>

          {/* Auto-detect + redirect */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <SmartRedirect />
          </div>

          <div className="mt-6 flex justify-center">
            <StoreButtons />
          </div>

          <p className="mt-6 text-xs text-white/45">
            Having trouble? Email{" "}
            <a
              className="text-white/70 underline underline-offset-4 hover:text-white"
              href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@yourdomain.com"}`}
            >
              {process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@yourdomain.com"}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
