"use client";

import { useId, useState } from "react";

export function WaitlistForm() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // No backend yet — this is a premium “front-end only” waitlist interaction.
    // Later, wire this to your API route / Supabase / Beehiiv / Mailchimp.
    setStatus("ok");

    // Optional: clear after success
    setTimeout(() => {
      setEmail("");
      setStatus("idle");
    }, 1400);
  }

  return (
    <form onSubmit={onSubmit} className="w-full" aria-label="Email waitlist form">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>

      <div
        className={[
          "group relative flex w-full items-center gap-2",
          "rounded-full border border-black/10 bg-white/95",
          "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
          "backdrop-blur",
          "px-2 py-2",
          "transition duration-300 ease-out",
          "focus-within:shadow-[0_12px_40px_rgba(0,0,0,0.42)]",
          "focus-within:ring-2 focus-within:ring-[rgba(210,255,245,0.22)]",
        ].join(" ")}
      >
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className={[
            "w-full bg-transparent px-4 py-2 text-sm text-black/90 outline-none",
            "placeholder:text-black/40",
          ].join(" ")}
        />

        <button
          type="submit"
          className={[
            "relative shrink-0 rounded-full px-5 py-2.5",
            "bg-black text-sm font-semibold text-white",
            "shadow-[0_10px_20px_rgba(0,0,0,0.25)]",
            "transition duration-300 ease-out",
            "hover:brightness-110 active:scale-[0.98]",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
          ].join(" ")}
        >
          {status === "ok" ? "✓ Subscribed" : "Subscribe"}
        </button>
      </div>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-white/35">
        Sign up for early access. No spam. No jibberjabber.
      </p>
    </form>
  );
}
