'use client';

import { ChevronDown, Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';
import { resolveAmbientMode, type AmbientPreference } from '@/lib/ambient-mode';

function applyPreference(preference: AmbientPreference) {
  const root = document.documentElement;
  root.dataset.ambientPreference = preference;
  root.dataset.ambient = resolveAmbientMode(preference, new Date());
}

export function AmbientModeControl() {
  const [preference, setPreference] = useState<AmbientPreference>('auto');

  useEffect(() => {
    setPreference('auto');
    applyPreference('auto');

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
  };

  return (
    <div className="relative shrink-0">
      <Lightbulb
        aria-hidden="true"
        className="ambient-light-icon pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-accent"
        strokeWidth={1.8}
      />
      <select
        aria-label="매장 조명 상태"
        value={preference}
        onChange={(event) =>
          updatePreference(event.target.value as AmbientPreference)
        }
        className="ambient-light-control h-11 appearance-none rounded-full border border-border/70 bg-background/80 pl-9 pr-9 text-xs font-medium tracking-wide text-foreground shadow-sm outline-none backdrop-blur-md transition-[background-color,border-color,color,box-shadow] duration-150 ease-out hover:border-accent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
      >
        <option value="auto">자동</option>
        <option value="open">영업 중</option>
        <option value="after-hours">마감 후</option>
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-accent"
        strokeWidth={2}
      />
    </div>
  );
}
