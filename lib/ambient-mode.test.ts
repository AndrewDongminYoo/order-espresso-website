import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  createAmbientInitializationScript,
  getAutomaticAmbientMode,
  resolveAmbientMode,
} from './ambient-mode';

describe('ambient mode', () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.ambient;
    delete document.documentElement.dataset.ambientPreference;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it.each([
    ['weekday before opening', '2026-08-24T08:29:00+09:00', 'after-hours'],
    ['weekday at opening', '2026-08-24T08:30:00+09:00', 'open'],
    ['weekday before closing', '2026-08-24T21:59:00+09:00', 'open'],
    ['weekday at closing', '2026-08-24T22:00:00+09:00', 'after-hours'],
    ['weekend before opening', '2026-08-29T08:59:00+09:00', 'after-hours'],
    ['weekend at opening', '2026-08-29T09:00:00+09:00', 'open'],
    ['weekend before closing', '2026-08-29T21:29:00+09:00', 'open'],
    ['weekend at closing', '2026-08-29T21:30:00+09:00', 'after-hours'],
  ])('uses Seoul business hours: %s', (_, timestamp, expected) => {
    expect(getAutomaticAmbientMode(new Date(timestamp))).toBe(expected);
  });

  it('honors a manual mode instead of the automatic result', () => {
    const afterClosing = new Date('2026-08-24T22:00:00+09:00');

    expect(resolveAmbientMode('open', afterClosing)).toBe('open');
    expect(resolveAmbientMode('after-hours', afterClosing)).toBe('after-hours');
    expect(resolveAmbientMode('auto', afterClosing)).toBe('after-hours');
  });

  it('starts in automatic mode even when a legacy manual preference exists', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-24T09:00:00+09:00'));
    localStorage.setItem('order-espresso-ambient-preference', 'after-hours');

    window.eval(createAmbientInitializationScript());

    expect(document.documentElement.dataset.ambient).toBe('open');
    expect(document.documentElement.dataset.ambientPreference).toBe('auto');
  });
});
