import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SiteFooter } from './site-footer';

describe('SiteFooter', () => {
  it('offers the ambient mode control as a secondary footer action', () => {
    render(<SiteFooter />);

    const footer = screen.getByRole('contentinfo');
    expect(
      within(footer).getByRole('combobox', { name: '매장 조명 상태' }),
    ).toBeTruthy();
  });
});
