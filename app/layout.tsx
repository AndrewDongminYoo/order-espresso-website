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

export const metadata: Metadata = {
  title: 'ORDER ESPRESSO & BAKERY | 오더에스프레소',
  description:
    '서울 강남 봉은사로의 작은 에스프레소 바 & 베이커리. 진한 에스프레소 한 잔과 갓 구운 빵으로 채우는 조용한 하루. ORDER ESPRESSO & BAKERY.',
  generator: 'v0.app',
  openGraph: {
    title: 'ORDER ESPRESSO & BAKERY | 오더에스프레소',
    description:
      '서울 강남 봉은사로의 작은 에스프레소 바 & 베이커리. 진한 에스프레소와 갓 구운 빵.',
    type: 'website',
    locale: 'ko_KR',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
