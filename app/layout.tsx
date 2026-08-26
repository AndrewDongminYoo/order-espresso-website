import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Noto_Serif_KR, Noto_Sans_KR } from 'next/font/google';
import { createAmbientInitializationScript } from '@/lib/ambient-mode';
import { business, openingHours, siteUrl } from '@/lib/site';
import './globals.css';

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

const ogImageAlt = 'ORDER ESPRESSO & BAKERY 매장 내부';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  '@id': `${siteUrl}/#business`,
  name: business.name,
  alternateName: business.shortName,
  description: business.description,
  url: siteUrl,
  image: `${siteUrl}/images/og-image.png`,
  logo: `${siteUrl}/images/logo.png`,
  servesCuisine: ['Coffee', 'Espresso', 'Bakery'],
  priceRange: business.priceRange,
  currenciesAccepted: 'KRW',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.streetAddress,
    addressLocality: business.addressLocality,
    addressRegion: business.addressRegion,
    postalCode: business.postalCode,
    addressCountry: business.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.latitude,
    longitude: business.longitude,
  },
  hasMap: business.naverMap,
  telephone: business.telephone,
  openingHoursSpecification: openingHours.map((spec) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: spec.days,
    opens: spec.opens,
    closes: spec.closes,
  })),
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: '무선 인터넷',
      value: true,
    },
    { '@type': 'LocationFeatureSpecification', name: '포장', value: true },
    { '@type': 'LocationFeatureSpecification', name: '배달', value: true },
    { '@type': 'LocationFeatureSpecification', name: '주차', value: true },
  ],
  sameAs: [business.instagram, business.smartStore],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'ORDER ESPRESSO & BAKERY | 오더에스프레소',
  description: business.description,
  applicationName: business.name,
  keywords: [
    '오더에스프레소',
    'ORDER ESPRESSO',
    '강남 카페',
    '삼성중앙역 카페',
    '봉은사로 카페',
    '에스프레소 바',
    '베이커리',
    '소금빵',
    '에그타르트',
    '콜드브루',
  ],
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: 'ORDER ESPRESSO & BAKERY | 오더에스프레소',
    description:
      '서울 강남 봉은사로의 작은 에스프레소 바 & 베이커리. 진한 에스프레소와 갓 구운 빵.',
    url: siteUrl,
    siteName: business.name,
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/images/og-image.png',
        width: 1440,
        height: 893,
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORDER ESPRESSO & BAKERY | 오더에스프레소',
    description:
      '서울 강남 봉은사로의 작은 에스프레소 바 & 베이커리. 진한 에스프레소와 갓 구운 빵.',
    images: ['/images/og-image.png'],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4ecd8',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-ambient="open"
      data-ambient-preference="auto"
      suppressHydrationWarning
      className={`${notoSerifKR.variable} ${notoSansKR.variable} bg-background`}
    >
      <head>
        <script
          id="ambient-mode"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: createAmbientInitializationScript(),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <a
          href="#main-content"
          className="sr-only rounded-sm bg-inverse px-4 py-2 text-sm font-medium text-inverse-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          본문으로 건너뛰기
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
