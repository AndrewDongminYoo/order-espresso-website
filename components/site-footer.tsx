import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
        <Image
          src="/images/logo.png"
          alt="ORDER ESPRESSO 로고"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full"
        />
        <p className="font-serif text-lg tracking-[0.2em] text-foreground">
          ORDER ESPRESSO &amp; BAKERY
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          서울 강남구 봉은사로 82길 27, 1층 · 지1층
          <br />
          평일 08:30–22:00 · 주말 09:00–21:30 · 0507-1415-2531
        </p>
        <a
          href="https://www.instagram.com/order_espresso.bakery"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium tracking-wide text-accent transition-opacity hover:opacity-70"
        >
          @order_espresso.bakery
        </a>
        <p className="mt-4 text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} ORDER ESPRESSO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
