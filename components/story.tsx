import Image from 'next/image';

export function Story() {
  return (
    <section
      id="story"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 md:py-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <h2 className="text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
            한 잔의 에스프레소로
            <br />
            시작하는 하루
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              오더에스프레소는 진하고 정직한 에스프레소를 중심으로 한 작은 동네
              카페입니다. 화려하지 않지만 매일의 리듬 속에 스며드는, 그런 커피를
              내립니다.
            </p>
            <p>
              매장에서 직접 굽는 빵은 커피와 가장 잘 어울리는 무게로 준비합니다.
              따뜻한 크루아상과 담백한 스콘, 그리고 향긋한 라떼 한 잔. 오늘
              하루도 여기서 천천히 시작해 보세요.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="/images/seating.webp"
              alt="창가 햇살이 드는 오더에스프레소의 조용한 좌석"
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
