const keywords = [
  { label: '커피가 맛있어요', count: 264 },
  { label: '디저트가 맛있어요', count: 248 },
  { label: '음료가 맛있어요', count: 125 },
  { label: '친절해요', count: 98 },
  { label: '인테리어가 멋져요', count: 70 },
  { label: '대화하기 좋아요', count: 67 },
  { label: '특별한 메뉴가 있어요', count: 57 },
  { label: '매장이 청결해요', count: 51 },
  { label: '좌석이 편해요', count: 29 },
  { label: '가성비가 좋아요', count: 22 },
  { label: '사진이 잘 나와요', count: 21 },
  { label: '집중하기 좋아요', count: 14 },
  { label: '빵이 맛있어요', count: 10 },
  { label: '아늑해요', count: 7 },
  { label: '차분한 분위기예요', count: 6 },
];

const max = keywords[0].count;

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
              Reviews
            </span>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
              손님들이 남겨주신 이야기
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              삼성중앙역 근처, 모던한 외관이 매력적인 오더에스프레소. 산미 없이
              묵직한 아메리카노와 따뜻하게 내어드리는 소금빵·에그타르트가 특히
              사랑받고 있습니다.
            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-5 text-pretty font-serif text-lg italic leading-relaxed text-foreground">
              &ldquo;커피가 맛있어요&rdquo; 그리고 &ldquo;디저트가
              맛있어요&rdquo; &mdash; 방문객들이 가장 많이 남긴 한마디.
            </blockquote>
          </div>

          <ul className="flex flex-col justify-center gap-4">
            {keywords.map((k) => (
              <li key={k.label} className="flex items-center gap-4">
                <span className="w-40 shrink-0 text-sm text-foreground">
                  {k.label}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${(k.count / max) * 100}%` }}
                  />
                </div>
                <span className="w-10 shrink-0 text-right text-sm tabular-nums text-muted-foreground">
                  {k.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
