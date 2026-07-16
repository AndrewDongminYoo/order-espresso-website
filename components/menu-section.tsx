import Image from "next/image"

const menu = [
  {
    image: "/images/espresso.png",
    tag: "Signature",
    title: "에스프레소",
    en: "Espresso",
    desc: "황금빛 크레마가 살아있는 진한 한 잔. 오더에스프레소의 기준이 되는 커피입니다.",
  },
  {
    image: "/images/latte.png",
    tag: "Popular",
    title: "카페 라떼",
    en: "Café Latte",
    desc: "부드러운 우유와 진한 에스프레소가 만나는 균형. 하루 중 가장 편안한 순간.",
  },
  {
    image: "/images/bakery.png",
    tag: "Bakery",
    title: "오늘의 베이커리",
    en: "Fresh Bakery",
    desc: "매장에서 직접 구운 크루아상과 스콘. 커피와 함께 즐기기 좋은 담백한 맛.",
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">Menu</span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
            정성껏 내린 커피, 매일 굽는 빵
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            좋은 재료와 정직한 손길로 준비한 오더에스프레소의 시그니처 메뉴를 소개합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {menu.map((item) => (
            <article key={item.en} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} - ${item.en}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide text-foreground">
                  {item.tag}
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.en}</span>
                </div>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
