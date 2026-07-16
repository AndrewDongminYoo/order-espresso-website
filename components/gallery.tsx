import Image from "next/image"

const shots = [
  { src: "/images/counter.png", alt: "에스프레소 머신이 놓인 오더에스프레소 카운터", span: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: "/images/bakery.png", alt: "나무 보드 위에 놓인 갓 구운 페이스트리", span: "aspect-square" },
  { src: "/images/espresso.png", alt: "크레마가 살아있는 에스프레소 한 잔", span: "aspect-square" },
  { src: "/images/latte.png", alt: "로제타 라떼 아트가 그려진 카페 라떼", span: "aspect-square" },
  { src: "/images/seating.png", alt: "창가 햇살이 드는 아늑한 좌석", span: "aspect-square" },
]

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="flex flex-col items-center text-center">
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">Gallery</span>
        <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
          공간에 머무는 순간들
        </h2>
      </div>

      <div className="mt-14 grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4">
        {shots.map((shot) => (
          <div key={shot.src} className={`relative overflow-hidden rounded-sm ${shot.span}`}>
            <Image src={shot.src || "/placeholder.svg"} alt={shot.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
