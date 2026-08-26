'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  { href: '#story', label: 'Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#store', label: 'Store' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(`#${visible[0].target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-4 px-6 py-2 md:grid-cols-[auto_1fr] md:py-3">
        <a href="#top" className="flex min-h-11 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="ORDER ESPRESSO 로고"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span
            className={`hidden text-sm font-medium tracking-[0.2em] transition-colors sm:block ${
              scrolled ? 'text-foreground' : 'text-on-image'
            }`}
          >
            ORDER ESPRESSO
          </span>
        </a>

        <nav
          aria-label="주요 섹션"
          className="row-start-2 flex flex-wrap items-center justify-center gap-x-1 md:col-start-2 md:row-start-1 md:gap-2"
        >
          {links.map((link) => {
            const isActive = activeId === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`inline-flex min-h-11 items-center px-1.5 text-xs font-medium tracking-wide transition-colors sm:px-2 sm:text-sm ${
                  scrolled
                    ? isActive
                      ? 'text-accent'
                      : 'text-foreground/70 hover:text-accent'
                    : isActive
                      ? 'text-on-image'
                      : 'text-on-image/80 hover:text-on-image'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
