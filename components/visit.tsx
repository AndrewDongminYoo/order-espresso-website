import Image from "next/image"

export function Visit() {
  return (
    <section id="visit" className="bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-background/60">Visit Us</span>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-snug sm:text-4xl">
              찾아오시는 길
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/70">
              강남 봉은사로의 조용한 골목, 1층에서 오더에스프레소를 만나보세요.
              향긋한 커피와 갓 구운 빵이 기다리고 있습니다.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="border-t border-background/20 pt-5">
                <dt className="text-xs uppercase tracking-widest text-background/50">Address</dt>
                <dd className="mt-2 leading-relaxed">
                  서울 강남구 봉은사로 82길 27, 1층 · 지1층
                </dd>
              </div>
              <div className="border-t border-background/20 pt-5">
                <dt className="text-xs uppercase tracking-widest text-background/50">Parking</dt>
                <dd className="mt-2 leading-relaxed text-background/80">
                  매장 문 앞 2대 정도 주차 가능합니다. 가급적 대중교통 이용을 권장드립니다.
                </dd>
              </div>
              <div className="border-t border-background/20 pt-5">
                <dt className="text-xs uppercase tracking-widest text-background/50">Instagram</dt>
                <dd className="mt-2">
                  <a
                    href="https://www.instagram.com/order_espresso.bakery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 leading-relaxed underline decoration-background/30 underline-offset-4 transition-colors hover:text-background"
                  >
                    @order_espresso.bakery
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-sm md:min-h-full">
            <Image
              src="/images/counter.png"
              alt="오더에스프레소 매장 카운터 전경"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
