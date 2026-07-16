import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Gallery } from './gallery';
import { MenuSection } from './menu-section';
import { SiteFooter } from './site-footer';
import { Visit } from './visit';

describe('homepage content sections', () => {
  it('renders signature menu cards with responsive image sizes', () => {
    render(<MenuSection />);

    expect(screen.getByRole('heading', { name: '전체 메뉴' })).toBeTruthy();
    expect(screen.getByText('오더 스카치')).toBeTruthy();

    const images = screen
      .getAllByRole('img')
      .filter((el) => el.tagName === 'IMG');
    expect(images).toHaveLength(3);
    for (const image of images) {
      expect(image.getAttribute('sizes')).toBe(
        '(min-width: 768px) 33vw, 100vw',
      );
    }
  });

  it('renders each gallery image with responsive image sizes', () => {
    render(<Gallery />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5);
    expect(images[0].getAttribute('sizes')).toBe('50vw');
    for (const image of images.slice(1)) {
      expect(image.getAttribute('sizes')).toBe('(min-width: 768px) 25vw, 50vw');
    }
  });

  it('shows visit details, amenities, and a responsive feature image', () => {
    render(<Visit />);

    expect(screen.getByText('08:30 – 22:00')).toBeTruthy();
    expect(screen.getByText('무선 인터넷')).toBeTruthy();
    expect(
      screen
        .getByAltText('오더에스프레소 매장 카운터 전경')
        .getAttribute('sizes'),
    ).toBe('(min-width: 768px) 50vw, 100vw');
  });

  it('links to the Naver smart store from the visit contact info', () => {
    render(<Visit />);

    const storeLink = screen.getByRole('link', { name: /스마트스토어/ });
    expect(storeLink.getAttribute('href')).toBe(
      'https://smartstore.naver.com/highorder',
    );
    expect(storeLink.getAttribute('rel')).toContain('noopener');
  });

  it('links to the Naver smart store from the footer', () => {
    render(<SiteFooter />);

    const storeLink = screen.getByRole('link', { name: /스마트스토어/ });
    expect(storeLink.getAttribute('href')).toBe(
      'https://smartstore.naver.com/highorder',
    );
  });
});
