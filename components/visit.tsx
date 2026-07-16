import Image from 'next/image';

const hours = [
  { day: '월 – 금', time: '08:30 – 22:00' },
  { day: '토 · 일', time: '09:00 – 21:30' },
];

const amenities = ['단체 이용', '무선 인터넷', '포장', '배달', '주차'];

export function Visit() {
  return (
    <section
      id="visit"
      className="scroll-mt-28 bg-foreground py-24 text-background md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-background/60">
              Visit Us
            </span>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-snug sm:text-4xl">
              찾아오시는 길
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/70">
              삼성중앙역 5번 출구에서 도보 3분. 강남 봉은사로의 조용한 골목,
              아이보리빛 예쁜 건물 1층에서 오더에스프레소를 만나보세요.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="border-t border-background/20 pt-5">
                <dt className="text-xs uppercase tracking-widest text-background/50">
                  Address
                </dt>
                <dd className="mt-2 leading-relaxed">
                  서울 강남구 봉은사로82길 27, 1층 · 지1층
                </dd>
              </div>
              <div className="border-t border-background/20 pt-5">
                <dt className="text-xs uppercase tracking-widest text-background/50">
                  Hours
                </dt>
                <dd className="mt-2 space-y-1">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-baseline gap-4">
                      <span className="w-16 text-background/80">{h.day}</span>
                      <span className="tabular-nums leading-relaxed">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </dd>
              </div>
              <div className="border-t border-background/20 pt-5">
                <dt className="text-xs uppercase tracking-widest text-background/50">
                  Directions
                </dt>
                <dd className="mt-2 leading-relaxed text-background/80">
                  삼성중앙역 5번 출구에서 90m 직진 후, 봉산집·삼진빌딩 골목으로
                  좌회전. GS편의점 사거리에서 우측으로 조금 내려오면 좌측
                  아이보리빛 건물입니다.
                </dd>
              </div>
              <div className="border-t border-background/20 pt-5">
                <dt className="text-xs uppercase tracking-widest text-background/50">
                  Parking
                </dt>
                <dd className="mt-2 leading-relaxed text-background/80">
                  매장 문 앞 2대 정도 주차 가능합니다. 가급적 대중교통 이용을
                  권장드립니다.
                </dd>
              </div>
              <div className="border-t border-background/20 pt-5">
                <dt className="text-xs uppercase tracking-widest text-background/50">
                  Contact
                </dt>
                <dd className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href="tel:0507-1415-2531"
                    className="leading-relaxed underline decoration-background/30 underline-offset-4 transition-colors hover:text-background"
                  >
                    0507-1415-2531
                  </a>
                  <a
                    href="https://www.instagram.com/order_espresso.bakery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 leading-relaxed underline decoration-background/30 underline-offset-4 transition-colors hover:text-background"
                  >
                    @order_espresso.bakery
                  </a>
                  <a
                    href="https://smartstore.naver.com/highorder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 leading-relaxed underline decoration-background/30 underline-offset-4 transition-colors hover:text-background"
                  >
                    네이버 스마트스토어
                  </a>
                </dd>
              </div>
            </dl>

            <ul className="mt-8 flex flex-wrap gap-2">
              {amenities.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-background/25 px-3 py-1 text-xs tracking-wide text-background/80"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-sm md:min-h-full">
            <Image
              src="/images/counter.jpg"
              alt="오더에스프레소 매장 카운터 전경"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
