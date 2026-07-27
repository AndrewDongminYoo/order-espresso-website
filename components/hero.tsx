import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero-interior.webp"
        alt="아침 햇살이 스며드는 오더에스프레소 매장 내부"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/45" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-background">
        <span className="mb-6 text-xs font-medium uppercase tracking-[0.5em] text-background/80">
          Seoul · Gangnam
        </span>
        <h1 className="text-balance font-serif text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
          ORDER
          <br />
          ESPRESSO
        </h1>
        <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-background/85 sm:text-lg">
          진한 에스프레소 한 잔과 갓 구운 빵.
          <br />
          바쁜 도시 한가운데, 잠시 숨을 고르는 작은 공간.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-background px-8 py-3 text-sm font-medium tracking-wide text-foreground transition-transform hover:-translate-y-0.5"
          >
            메뉴 보기
          </a>
          <a
            href="#visit"
            className="rounded-full border border-background/60 px-8 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-background/10"
          >
            찾아오는 길
          </a>
        </div>
      </div>
    </section>
  );
}
