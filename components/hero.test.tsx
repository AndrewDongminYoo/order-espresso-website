import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './hero';

describe('Hero', () => {
  it('uses one store image for both ambient treatments', () => {
    const { container } = render(<Hero />);
    const images = [...container.querySelectorAll('#top img')];

    expect(images).toHaveLength(1);
    expect(images[0].getAttribute('src')).toBe('/images/hero-interior.webp');
    expect(images[0].className).toContain('ambient-hero-image');
  });

  it('describes the shared store image without a time-of-day claim', () => {
    const { container } = render(<Hero />);
    const image = container.querySelector('#top img');

    expect(image?.getAttribute('alt')).toBe('오더에스프레소 매장 내부');
  });

  it('provides a decorative layer for localized after-hours light', () => {
    const { container } = render(<Hero />);
    const lightMap = container.querySelector('.ambient-hero-light-map');

    expect(lightMap?.getAttribute('aria-hidden')).toBe('true');
  });

  it('keeps the mirror ring aligned, occluded, and decorative', () => {
    const { container } = render(<Hero />);
    const mirrorLight = container.querySelector('.ambient-hero-mirror-light');
    const spill = mirrorLight?.querySelector('.ambient-hero-mirror-spill');
    const maskedLight = mirrorLight?.querySelector(
      'g[mask="url(#ambient-hero-mirror-occlusion)"]',
    );
    const halo = maskedLight?.querySelector('.ambient-hero-mirror-halo');
    const ring = maskedLight?.querySelector('.ambient-hero-mirror-ring');
    const occlusionPath = mirrorLight?.querySelector(
      '#ambient-hero-mirror-occlusion path',
    );

    expect(mirrorLight?.getAttribute('aria-hidden')).toBe('true');
    expect(mirrorLight?.getAttribute('focusable')).toBe('false');
    expect(spill?.parentElement).toBe(mirrorLight);
    expect(maskedLight?.contains(spill ?? null)).toBe(false);
    expect(halo).toBeTruthy();
    expect(ring).toBeTruthy();
    expect(ring?.getAttribute('cx')).toBe('226');
    expect(ring?.getAttribute('cy')).toBe('410');
    expect(ring?.getAttribute('rx')).toBe('94');
    expect(ring?.getAttribute('ry')).toBe('94');
    expect(occlusionPath?.getAttribute('d')).toBe(
      'M0 306h150c28 17 50 38 54 54 4 18-28 28-86 21H0z',
    );
  });
});
