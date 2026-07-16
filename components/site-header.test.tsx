import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 0,
    });
  });

  it('adds its opaque styling after the page is scrolled', () => {
    render(<SiteHeader />);

    const header = screen.getByRole('banner');
    expect(header.className).toContain('bg-transparent');

    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 25,
    });
    fireEvent.scroll(window);

    expect(header.className).toContain('bg-background/85');
    expect(header.className).toContain('backdrop-blur-md');
  });
});
