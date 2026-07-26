import Image from 'next/image';

const shots = [
  {
    src: '/images/counter.webp',
    alt: '에스프레소 머신이 놓인 오더에스프레소 카운터',
    span: 'md:col-span-2 md:row-span-2 aspect-square',
    sizes: '50vw',
  },
  {
    src: '/images/bakery.webp',
    alt: '소금빵이 가득 쌓인 진열대',
    span: 'aspect-square',
    sizes: '(min-width: 768px) 25vw, 50vw',
  },
  {
    src: '/images/pastry.webp',
    alt: '겉이 바삭하게 구워진 뺑오쇼콜라',
    span: 'aspect-square',
    sizes: '(min-width: 768px) 25vw, 50vw',
  },
  {
    src: '/images/latte.webp',
    alt: '크림이 올라간 시그니처 라떼',
    span: 'aspect-square',
    sizes: '(min-width: 768px) 25vw, 50vw',
  },
  {
    src: '/images/sandwich.webp',
    alt: '상큼하고 맛있는 오더 크로와상 샌드위치',
    span: 'aspect-square',
    sizes: '(min-width: 768px) 25vw, 50vw',
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 md:py-32"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
          공간에 머무는 순간들
        </h2>
      </div>

      <div className="mt-14 grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4">
        {shots.map((shot) => (
          <div
            key={shot.src}
            className={`relative overflow-hidden rounded-sm ${shot.span}`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes={shot.sizes}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
