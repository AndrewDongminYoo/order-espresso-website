'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const links: { href: string; label: string; external?: boolean }[] = [
  { href: '#story', label: 'Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
  {
    href: 'https://smartstore.naver.com/highorder',
    label: 'Store',
    external: true,
  },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-3 md:flex-row md:justify-between md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="ORDER ESPRESSO 로고"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="hidden text-sm font-medium tracking-[0.2em] text-foreground sm:block">
            ORDER ESPRESSO
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end md:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? 'text-foreground/70 hover:text-accent'
                  : 'text-background/80 hover:text-background'
              }`}
            >
              {link.label}
              {link.external ? (
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
