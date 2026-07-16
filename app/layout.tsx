import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Noto_Serif_KR, Noto_Sans_KR } from 'next/font/google';
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

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'ORDER ESPRESSO & BAKERY',
  url: siteUrl,
  image: `${siteUrl}/images/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '봉은사로82길 27, 1층 · 지1층',
    addressLocality: '강남구',
    addressRegion: '서울',
    addressCountry: 'KR',
  },
  telephone: '+82-507-1415-2531',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:30',
    },
  ],
  sameAs: [
    'https://www.instagram.com/order_espresso.bakery',
    'https://smartstore.naver.com/highorder',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'ORDER ESPRESSO & BAKERY | 오더에스프레소',
  description:
    '서울 강남 봉은사로의 작은 에스프레소 바 & 베이커리. 진한 에스프레소 한 잔과 갓 구운 빵으로 채우는 조용한 하루. ORDER ESPRESSO & BAKERY.',
  openGraph: {
    title: 'ORDER ESPRESSO & BAKERY | 오더에스프레소',
    description:
      '서울 강남 봉은사로의 작은 에스프레소 바 & 베이커리. 진한 에스프레소와 갓 구운 빵.',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ORDER ESPRESSO & BAKERY 매장 내부',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
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
      className={`${notoSerifKR.variable} ${notoSansKR.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
