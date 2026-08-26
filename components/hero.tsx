import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero-interior.webp"
        alt="오더에스프레소 매장 내부"
        fill
        priority
        sizes="100vw"
        className="ambient-hero-image object-cover transition-[filter] duration-500 ease-out"
      />
      <div className="ambient-hero-overlay absolute inset-0 bg-inverse/45 transition-colors duration-300 ease-out" />
      <div
        aria-hidden="true"
        className="ambient-hero-light-map pointer-events-none absolute inset-0"
      />
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="ambient-hero-mirror-light pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <mask id="ambient-hero-mirror-occlusion" maskUnits="userSpaceOnUse">
            <rect width="720" height="900" fill="white" />
            <path
              d="M0 306h150c28 17 50 38 54 54 4 18-28 28-86 21H0z"
              fill="black"
            />
          </mask>
        </defs>
        <ellipse
          className="ambient-hero-mirror-spill"
          cx="226"
          cy="410"
          rx="130"
          ry="145"
        />
        <g mask="url(#ambient-hero-mirror-occlusion)">
          <ellipse
            className="ambient-hero-mirror-halo"
            cx="226"
            cy="410"
            rx="94"
            ry="94"
          />
          <ellipse
            className="ambient-hero-mirror-ring"
            cx="226"
            cy="410"
            rx="94"
            ry="94"
          />
        </g>
      </svg>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-on-image">
        <span className="mb-6 text-xs font-medium uppercase tracking-[0.5em] text-on-image/80">
          Seoul · Gangnam
        </span>
        <h1 className="text-balance font-serif text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
          ORDER
          <br />
          ESPRESSO
        </h1>
        <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-on-image/85 sm:text-lg">
          진한 에스프레소 한 잔과 갓 구운 빵.
          <br />
          바쁜 도시 한가운데, 잠시 숨을 고르는 작은 공간.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-on-image px-8 py-3 text-sm font-medium tracking-wide text-inverse transition-transform hover:-translate-y-0.5"
          >
            메뉴 보기
          </a>
          <a
            href="#visit"
            className="rounded-full border border-on-image/60 px-8 py-3 text-sm font-medium tracking-wide text-on-image transition-colors hover:bg-on-image/10"
          >
            찾아오는 길
          </a>
        </div>
      </div>
    </section>
  );
}
