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

  it('curates the three strongest review signals instead of showing every count', () => {
    render(<Reviews />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.queryByLabelText('차분한 분위기예요 — 6명 선택')).toBeNull();
    expect(
      screen.getByText('친절해요 · 인테리어가 멋져요 · 대화하기 좋아요'),
    ).toBeTruthy();
  });
});
