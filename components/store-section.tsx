import { ArrowUpRight } from 'lucide-react';

const storeUrl = 'https://smartstore.naver.com/highorder';

const products = [
  {
    name: '오더 마다가스카르 바닐라빈 에그타르트',
    desc: '마다가스카르 바닐라빈으로 굽는 오더의 시그니처 에그타르트.',
    price: '38,000원',
    href: `${storeUrl}/products/11600781192`,
  },
  {
    name: '콜드브루 더치커피 에티오피아 모모라 350ml',
    desc: '에티오피아 모모라 스페셜티 원두로 내린 콜드브루 원액.',
    price: '14,000원',
    href: `${storeUrl}/products/10604764162`,
  },
  {
    name: '오더그래놀라 프리미엄 선물세트',
    desc: '오더그래놀라를 담은 프리미엄 선물세트.',
    price: '40,000원',
    href: `${storeUrl}/products/10940892447`,
  },
];

export function StoreSection() {
  return (
    <section
      id="store"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
          집에서 만나는 오더에스프레소
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          매장에서 사랑받는 맛을 네이버 스마트스토어에서 그대로 보내드립니다.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <a
            key={product.href}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent"
          >
            <div>
              <h3 className="break-keep text-pretty font-serif text-xl leading-snug text-foreground">
                {product.name}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {product.desc}
              </p>
            </div>
            <div className="mt-8 flex items-baseline justify-between">
              <span className="text-sm tabular-nums text-foreground">
                {product.price}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-inverse px-8 py-3 text-sm font-medium tracking-wide text-inverse-foreground transition-transform hover:-translate-y-0.5"
        >
          스마트스토어 방문하기
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
