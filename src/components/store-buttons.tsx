"use client";

const APP_STORE = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "";
const PLAY_STORE = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "";

function isValidUrl(url: string) {
  try {
    if (!url) return false;
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function StoreButtons() {
  const appStoreOk = isValidUrl(APP_STORE);
  const playStoreOk = isValidUrl(PLAY_STORE);

  return (
    <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
      <a
        href={appStoreOk ? APP_STORE : "#"}
        onClick={(e) => !appStoreOk && e.preventDefault()}
        className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90 disabled:opacity-50"
      >
        Download on App Store
      </a>

      <a
        href={playStoreOk ? PLAY_STORE : "#"}
        onClick={(e) => !playStoreOk && e.preventDefault()}
        className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/85 backdrop-blur hover:bg-white/10"
      >
        Get it on Google Play
      </a>
    </div>
  );
}
