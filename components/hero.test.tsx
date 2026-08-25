import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './hero';

describe('Hero', () => {
  it('uses the existing store image for both ambient treatments', () => {
    const { container } = render(<Hero />);
    const images = [...container.querySelectorAll('#top img')];

    expect(images).toHaveLength(1);
    expect(images[0].getAttribute('src')).toBe('/images/hero-interior.webp');
    expect(images[0].className).toContain('ambient-hero-image');
  });
});
