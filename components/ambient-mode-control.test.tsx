import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ambientStorageKey } from '@/lib/ambient-mode';
import { AmbientModeControl } from './ambient-mode-control';

describe('AmbientModeControl', () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.ambient;
    delete document.documentElement.dataset.ambientPreference;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('offers automatic, open, and after-hours choices', () => {
    render(<AmbientModeControl />);

    const control = screen.getByRole('combobox', { name: '화면 분위기' });
    expect(control.textContent).toContain('자동');
    expect(control.textContent).toContain('영업 중');
    expect(control.textContent).toContain('마감 후');
  });

  it('restores a saved manual preference', () => {
    localStorage.setItem(ambientStorageKey, 'after-hours');
    render(<AmbientModeControl />);

    const control = screen.getByRole('combobox', {
      name: '화면 분위기',
    }) as HTMLSelectElement;
    expect(control.value).toBe('after-hours');
    expect(document.documentElement.dataset.ambient).toBe('after-hours');
  });

  it('stores a manual preference and applies it to the document', () => {
    render(<AmbientModeControl />);

    fireEvent.change(screen.getByRole('combobox', { name: '화면 분위기' }), {
      target: { value: 'after-hours' },
    });

    expect(localStorage.getItem(ambientStorageKey)).toBe('after-hours');
    expect(document.documentElement.dataset.ambientPreference).toBe(
      'after-hours',
    );
    expect(document.documentElement.dataset.ambient).toBe('after-hours');
  });

  it('uses the Seoul business hours again when automatic is selected', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-24T22:00:00+09:00'));
    localStorage.setItem(ambientStorageKey, 'open');
    render(<AmbientModeControl />);

    fireEvent.change(screen.getByRole('combobox', { name: '화면 분위기' }), {
      target: { value: 'auto' },
    });

    expect(document.documentElement.dataset.ambient).toBe('after-hours');
  });

  it('refreshes automatic mode at the next minute boundary', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-24T21:59:59+09:00'));
    render(<AmbientModeControl />);

    expect(document.documentElement.dataset.ambient).toBe('open');

    act(() => {
      vi.advanceTimersByTime(1_000);
    });

    expect(document.documentElement.dataset.ambient).toBe('after-hours');
  });
});
