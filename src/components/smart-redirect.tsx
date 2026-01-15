"use client";

import { useEffect, useMemo, useState } from "react";

const APP_STORE = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "";
const PLAY_STORE = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "";

type Device = "ios" | "android" | "desktop" | "unknown";

function detectDevice(ua: string): Device {
  const s = ua.toLowerCase();
  if (/(iphone|ipad|ipod)/.test(s)) return "ios";
  if (/android/.test(s)) return "android";
  if (/(macintosh|windows|linux|cros)/.test(s)) return "desktop";
  return "unknown";
}

export function SmartRedirect() {
  const [device, setDevice] = useState<Device>("unknown");
  const [count, setCount] = useState(3);

  const target = useMemo(() => {
    if (device === "ios") return APP_STORE;
    if (device === "android") return PLAY_STORE;
    return "";
  }, [device]);

  useEffect(() => {
    setDevice(detectDevice(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!target) return;

    const t = setInterval(() => setCount((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [target]);

  useEffect(() => {
    if (!target) return;
    if (count !== 0) return;

    // Redirect
    window.location.href = target;
  }, [count, target]);

  if (device === "desktop") {
    return (
      <div className="text-sm text-white/70">
        You’re on desktop — choose your store below to download on mobile.
      </div>
    );
  }

  if (device === "ios" && !APP_STORE) {
    return <div className="text-sm text-white/70">iOS detected — add your App Store link in <code className="text-white/80">.env.local</code>.</div>;
  }

  if (device === "android" && !PLAY_STORE) {
    return <div className="text-sm text-white/70">Android detected — add your Play Store link in <code className="text-white/80">.env.local</code>.</div>;
  }

  if (!target) {
    return (
      <div className="text-sm text-white/70">
        Choose your platform below.
      </div>
    );
  }

  return (
    <div className="text-sm text-white/70">
      Detected <span className="text-white/85 font-medium">{device.toUpperCase()}</span>. Redirecting in{" "}
      <span className="text-white/85 font-medium">{count}</span>…
    </div>
  );
}
