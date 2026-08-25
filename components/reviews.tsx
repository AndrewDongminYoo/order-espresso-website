const topKeywords = [
  { label: '커피가 맛있어요', count: 264 },
  { label: '디저트가 맛있어요', count: 248 },
  { label: '음료가 맛있어요', count: 125 },
];

const supportingKeywords = ['친절해요', '인테리어가 멋져요', '대화하기 좋아요'];

export function Reviews() {
  const highestCount = topKeywords[0].count;

  return (
    <section id="reviews" className="scroll-mt-28 bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Visitor notes
          </p>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
            손님들이 기억한
            <br />
            오더의 맛과 공간
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            네이버 방문자 리뷰에서 반복해서 선택된 핵심만 간결하게 모았습니다.
            메뉴와 공간이 어떤 인상으로 남았는지 확인해 보세요.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between border-b border-border pb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span>가장 많이 선택한 키워드</span>
            <span>선택</span>
          </div>

          <ol aria-label="네이버 방문자 리뷰 키워드">
            {topKeywords.map((keyword, index) => (
              <li
                key={keyword.label}
                aria-label={`${keyword.label} — ${keyword.count}명 선택`}
                className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-border py-6"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-sm tabular-nums text-accent"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div aria-hidden="true">
                  <span className="font-serif text-lg text-foreground">
                    {keyword.label}
                  </span>
                  <div className="mt-3 h-px overflow-hidden bg-muted">
                    <div
                      className="h-full bg-accent"
                      style={{
                        width: `${(keyword.count / highestCount) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="text-sm tabular-nums text-muted-foreground"
                >
                  {keyword.count}
                </span>
              </li>
            ))}
          </ol>

          <div className="pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              공간과 서비스
            </p>
            <p className="mt-3 text-pretty font-serif text-lg leading-relaxed text-foreground">
              {supportingKeywords.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
