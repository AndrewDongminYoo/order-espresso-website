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

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-28 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
              손님들이 남겨주신 이야기
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              삼성중앙역 근처, 모던한 외관이 매력적인 오더에스프레소. 산미 없이
              묵직한 아메리카노와 따뜻하게 내어드리는 소금빵·에그타르트가 특히
              사랑받고 있습니다. 네이버 방문자 리뷰에서 손님들이 직접 고른
              키워드입니다.
            </p>
          </div>

          <ul
            aria-label="네이버 방문자 리뷰 키워드"
            className="flex flex-wrap content-center items-center gap-2.5"
          >
            {keywords.map((k, i) => (
              <li
                key={k.label}
                aria-label={`${k.label} — ${k.count}명 선택`}
                className={`flex items-baseline gap-2 rounded-full border px-4 py-2 ${
                  i < 3
                    ? 'border-accent/40 bg-accent/10 text-foreground'
                    : 'border-border text-muted-foreground'
                }`}
              >
                <span aria-hidden="true" className="text-sm">
                  {k.label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-xs tabular-nums text-muted-foreground"
                >
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
