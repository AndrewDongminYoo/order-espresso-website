import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
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

    const control = screen.getByRole('combobox', { name: '매장 조명 상태' });
    expect(control.textContent).toContain('자동');
    expect(control.textContent).toContain('영업 중');
    expect(control.textContent).toContain('마감 후');
  });

  it('starts in automatic mode instead of restoring a legacy preference', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-24T09:00:00+09:00'));
    localStorage.setItem('order-espresso-ambient-preference', 'after-hours');
    render(<AmbientModeControl />);

    const control = screen.getByRole('combobox', {
      name: '매장 조명 상태',
    }) as HTMLSelectElement;
    expect(control.value).toBe('auto');
    expect(document.documentElement.dataset.ambient).toBe('open');
  });

  it('applies a manual preference without persisting it', () => {
    render(<AmbientModeControl />);

    fireEvent.change(screen.getByRole('combobox', { name: '매장 조명 상태' }), {
      target: { value: 'after-hours' },
    });

    expect(
      localStorage.getItem('order-espresso-ambient-preference'),
    ).toBeNull();
    expect(document.documentElement.dataset.ambientPreference).toBe(
      'after-hours',
    );
    expect(document.documentElement.dataset.ambient).toBe('after-hours');
  });

  it('uses the Seoul business hours again when automatic is selected', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-24T22:00:00+09:00'));
    render(<AmbientModeControl />);

    fireEvent.change(screen.getByRole('combobox', { name: '매장 조명 상태' }), {
      target: { value: 'open' },
    });

    fireEvent.change(screen.getByRole('combobox', { name: '매장 조명 상태' }), {
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
