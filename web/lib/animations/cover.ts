"use client";

/**
 * Shared coordinator so the Preloader / PageTransition can tell hero
 * intros to wait until the cover is gone, otherwise the animations play
 * underneath and the user never sees them.
 */

let coverExpiryMs: number | null = null;

export const reserveCover = (durationSec: number) => {
  const expiry = Date.now() + durationSec * 1000;
  if (coverExpiryMs === null || expiry > coverExpiryMs) {
    coverExpiryMs = expiry;
  }
};

export const releaseCover = () => {
  coverExpiryMs = null;
};

export const getCoverRemainingDelay = (): number => {
  if (coverExpiryMs === null) return 0;
  const remaining = (coverExpiryMs - Date.now()) / 1000;
  if (remaining <= 0.05) {
    coverExpiryMs = null;
    return 0;
  }
  return remaining;
};
