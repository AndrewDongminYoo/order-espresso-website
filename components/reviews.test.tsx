import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Reviews } from './reviews';

describe('Reviews', () => {
  it('exposes each keyword with an accessible count label', () => {
    render(<Reviews />);

    // The bare count number is hidden from assistive tech; the list item
    // carries a descriptive label instead.
    const topKeyword = screen.getByLabelText('커피가 맛있어요 — 264명 선택');
    expect(topKeyword).toBeTruthy();
  });

  it('labels the keyword list for screen readers', () => {
    render(<Reviews />);

    expect(
      screen.getByRole('list', { name: '네이버 방문자 리뷰 키워드' }),
    ).toBeTruthy();
  });
});
