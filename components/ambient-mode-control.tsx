'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  ambientStorageKey,
  resolveAmbientMode,
  type AmbientPreference,
} from '@/lib/ambient-mode';

function isAmbientPreference(
  value: string | null | undefined,
): value is AmbientPreference {
  return value === 'auto' || value === 'open' || value === 'after-hours';
}

function applyPreference(preference: AmbientPreference) {
  const root = document.documentElement;
  root.dataset.ambientPreference = preference;
  root.dataset.ambient = resolveAmbientMode(preference, new Date());
}

export function AmbientModeControl() {
  const [preference, setPreference] = useState<AmbientPreference>('auto');

  useEffect(() => {
    const rootPreference = document.documentElement.dataset.ambientPreference;
    let initialPreference: AmbientPreference = isAmbientPreference(
      rootPreference,
    )
      ? rootPreference
      : 'auto';

    try {
      const savedPreference = localStorage.getItem(ambientStorageKey);
      if (isAmbientPreference(savedPreference))
        initialPreference = savedPreference;
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }

    setPreference(initialPreference);
    applyPreference(initialPreference);

    const refreshAutomaticPreference = () => {
      const currentPreference =
        document.documentElement.dataset.ambientPreference;
      if (currentPreference === 'auto') applyPreference('auto');
    };

    const now = new Date();
    const millisecondsIntoMinute =
      now.getSeconds() * 1_000 + now.getMilliseconds();
    let refreshTimer: number | undefined;
    const alignmentTimer = window.setTimeout(() => {
      refreshAutomaticPreference();
      refreshTimer = window.setInterval(refreshAutomaticPreference, 60_000);
    }, 60_000 - millisecondsIntoMinute);

    return () => {
      window.clearTimeout(alignmentTimer);
      if (refreshTimer !== undefined) window.clearInterval(refreshTimer);
    };
  }, []);

  const updatePreference = (nextPreference: AmbientPreference) => {
    setPreference(nextPreference);
    applyPreference(nextPreference);

    try {
      localStorage.setItem(ambientStorageKey, nextPreference);
    } catch {
      // The selected mode still applies for the current page without storage.
    }
  };

  return (
    <div className="relative shrink-0">
      <select
        aria-label="화면 분위기"
        value={preference}
        onChange={(event) =>
          updatePreference(event.target.value as AmbientPreference)
        }
        className="h-11 appearance-none rounded-full border border-border/70 bg-background/90 pl-4 pr-10 text-xs font-medium tracking-wide text-foreground shadow-sm outline-none backdrop-blur-md transition-[background-color,border-color,color,box-shadow] duration-150 ease-out hover:border-accent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
      >
        <option value="auto">자동</option>
        <option value="open">영업 중</option>
        <option value="after-hours">마감 후</option>
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-accent"
        strokeWidth={2}
      />
    </div>
  );
}
