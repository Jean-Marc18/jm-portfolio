"use client";

/**
 * Lightweight coordinator shared by the Preloader and the PageTransition
 * cover. When either is in the way, the intro animations on the hero (or
 * any other section) should wait until the cover is gone before playing —
 * otherwise the user sees the animation under the cover and "loses" it.
 *
 * Usage:
 *   - Anything that drops a cover on the viewport calls `reserveCover(s)`
 *     with the total time (in seconds) it expects to obstruct.
 *   - Animations that want to wait call `getCoverRemainingDelay()` at
 *     mount; the returned number of seconds is how long they should idle
 *     before starting.
 */

let coverExpiryMs: number | null = null;

export const reserveCover = (durationSec: number) => {
  const expiry = Date.now() + durationSec * 1000;
  // Multiple covers might overlap (preloader + first nav); always keep
  // the longest reservation so the hero waits for the latest one.
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
