import Image from 'next/image';

const signatures = [
  {
    image: '/images/espresso.jpg',
    tag: 'Best',
    title: '아메리카노',
    en: 'Americano',
    desc: '산미 없이 묵직하고 진한 바디감. 디카페인·오트밀크로도 변경할 수 있습니다.',
  },
  {
    image: '/images/latte.jpg',
    tag: 'Signature',
    title: '오더 시그니처',
    en: 'Order Signature',
    desc: '오더 스카치·더치·크림치즈. 오직 아이스로만 즐기는 오더에스프레소만의 크림 커피.',
  },
  {
    image: '/images/bakery.jpg',
    tag: 'Bakery',
    title: '소금빵 & 에그타르트',
    en: 'Fresh Bakery',
    desc: '매일 구워 따뜻하게 내어드리는 소금빵과 에그타르트. 커피와 가장 잘 어울리는 짝.',
  },
];

type Item = { name: string; en?: string; price: string; best?: boolean };
type Group = { title: string; note?: string; items: Item[] };

const groups: Group[] = [
  {
    title: 'Specialty Coffee',
    items: [
      {
        name: '코케허니카노',
        en: '에티오피아 코케허니 · 산미풍부',
        price: '6.5',
        best: true,
      },
    ],
  },
  {
    title: 'Espresso',
    items: [
      { name: '에스프레소', en: 'Espresso', price: '4.5' },
      { name: '에스프레소 콘파냐', en: 'Espresso con Panna', price: '5.0' },
      { name: '아메리카노', en: 'Americano', price: '4.5' },
      { name: '카페 라떼', en: 'Cafe Latte', price: '5.8' },
      { name: '오트 라떼', en: 'Oat Latte', price: '6.5' },
      { name: '카푸치노', en: 'Cappuccino', price: '5.5' },
      { name: '플랫 화이트', en: 'Flat White', price: '5.0' },
    ],
  },
  {
    title: 'Espresso Base',
    items: [
      {
        name: '프렌치바닐라라떼',
        en: 'French Vanilla Latte',
        price: '6.5',
        best: true,
      },
      { name: '바닐라 라떼', en: 'Vanilla Latte', price: '6.5' },
      { name: '헤이즐넛 라떼', en: 'Hazelnut Latte', price: '6.5' },
      { name: '꿀벌 라떼', en: 'Honey Latte', price: '6.5' },
      { name: '카라멜 마끼아또', en: 'Caramel Macchiato', price: '6.5' },
      { name: '카페 쑤어다', en: 'Cafe Sua Da · only ice', price: '6.5' },
      { name: '크림 커피', en: 'Cream Coffee', price: '5.5' },
      { name: '크림 라떼', en: 'Cream Latte', price: '6.0' },
      { name: '레몬 프레소', en: 'Lemon Presso', price: '7.0' },
      { name: '아포가토', en: 'Affogato', price: '8.0' },
    ],
  },
  {
    title: 'Cold Brew',
    note: '모모라 스페셜티 커피',
    items: [
      { name: '콜드브루 커피', en: 'Cold Brew Coffee', price: '5.5' },
      { name: '콜드브루 라떼', en: 'Cold Brew Latte', price: '6.0' },
      { name: '콜드브루 원액', en: '350ml', price: '16.0' },
    ],
  },
  {
    title: 'Signature',
    note: 'Only Ice',
    items: [
      { name: '오더 스카치', en: 'Order Scotch', price: '7.0', best: true },
      { name: '오더 더치', en: 'Order Dutch', price: '6.5', best: true },
      {
        name: '오더 크림치즈',
        en: 'Order Cream Cheese',
        price: '7.0',
        best: true,
      },
    ],
  },
  {
    title: 'Non Coffee',
    items: [
      { name: '생과일', en: 'Fruit Juice · 계절에 따라', price: '7.5' },
      { name: '쑥 라떼', en: 'Mugwort Latte', price: '6.5' },
      { name: '미숫가루', en: 'Grain Latte', price: '6.5' },
      { name: '로투스 프라푸치노', en: 'Lotus Frappuccino', price: '7.0' },
      {
        name: '라즈베리 레몬에이드',
        en: 'Raspberry Lemon Ade',
        price: '7.5',
        best: true,
      },
      { name: '자몽 에이드', en: 'Grapefruit Ade', price: '7.5' },
      {
        name: '피치 얼그레이 아이스티',
        en: 'Peach Earl Grey Iced Tea',
        price: '6.5',
      },
      { name: '리얼 초코', en: 'Real Choco', price: '7.0' },
      {
        name: '100% 수제 고구마라떼',
        en: 'Sweet Potato Latte · 겨울',
        price: '6.5',
        best: true,
      },
    ],
  },
  {
    title: 'Tea',
    items: [
      { name: '페퍼민트 티', en: 'Peppermint Tea', price: '5.0' },
      { name: '카모마일 티', en: 'Chamomile Tea', price: '5.0' },
      { name: '얼그레이 티', en: 'Earl Gray Tea', price: '5.0' },
      { name: '루이보스 티', en: 'Rooibos Tea', price: '5.0' },
      { name: '자몽 티', en: 'Grapefruit Tea', price: '7.0' },
      {
        name: '라즈베리 레몬티',
        en: 'Raspberry Lemon Tea',
        price: '7.0',
        best: true,
      },
    ],
  },
  {
    title: 'Bottle',
    items: [
      {
        name: '프리미엄 오더 밀크티',
        en: 'Premium Order Milk Tea',
        price: '7.5',
        best: true,
      },
      { name: '블루베리 요거트', en: 'Blueberry Yogurt', price: '9.5' },
      { name: '망고 요거트', en: 'Mango Yogurt', price: '8.0' },
      { name: '마차 라떼', en: 'Matcha Latte', price: '7.0' },
      {
        name: '100% 생과일 그릭요거트',
        en: 'Fruit Greek Yogurt',
        price: '12.9',
        best: true,
      },
      { name: '생딸기 우유', en: 'Strawberry Milk', price: '8.5', best: true },
      {
        name: '생딸기 요거트',
        en: 'Strawberry Yogurt',
        price: '9.5',
        best: true,
      },
    ],
  },
];

const options = [
  '샷 추가 +1.0',
  '디카페인 +1.0',
  '오트우유 +1.0',
  '락토프리 +1.0',
];

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-28 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
            정성껏 내린 커피, 매일 굽는 빵
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            좋은 재료와 정직한 손길로 준비한 오더에스프레소의 시그니처 메뉴를
            소개합니다.
          </p>
        </div>

        {/* Signature highlight cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {signatures.map((item) => (
            <article key={item.en} className="group flex flex-col">
              <div className="relative aspect-4/5 overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.en}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide text-foreground">
                  {item.tag}
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {item.en}
                  </span>
                </div>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Full price list */}
        <div className="mt-20 rounded-sm border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-serif text-2xl text-foreground">전체 메뉴</h3>
            <ul className="flex flex-wrap gap-2">
              {options.map((opt) => (
                <li
                  key={opt}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent"
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group.title} className="break-inside-avoid">
                <div className="flex items-baseline gap-2">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                    {group.title}
                  </h4>
                  {group.note ? (
                    <span className="text-xs tracking-wide text-muted-foreground">
                      ({group.note})
                    </span>
                  ) : null}
                </div>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <span className="flex min-w-0 flex-col text-sm text-foreground sm:flex-row sm:items-baseline sm:gap-2">
                        <span className="flex min-w-0 items-baseline gap-2">
                          {item.best ? (
                            <span
                              role="img"
                              className="text-accent"
                              aria-label="추천 메뉴"
                            >
                              ♥
                            </span>
                          ) : null}
                          <span className="break-keep">{item.name}</span>
                        </span>
                        {item.en ? (
                          <span className="text-xs tracking-wide text-muted-foreground">
                            {item.en}
                          </span>
                        ) : null}
                      </span>
                      <span
                        className="mx-2 flex-1 border-b border-dotted border-border"
                        aria-hidden="true"
                      />
                      <span className="shrink-0 text-sm tabular-nums text-foreground">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            가격 단위는 1,000원입니다. (예: 4.5 = 4,500원) · 시즌에 따라 메뉴와
            가격이 변동될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
