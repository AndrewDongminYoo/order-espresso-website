/**
 * Shared, single-source-of-truth business facts.
 *
 * Kept in one place so metadata, JSON-LD structured data, the sitemap, and
 * on-page content never drift apart — this also makes the site easy for
 * search crawlers and AI agents to parse consistently.
 */

export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const business = {
  name: 'ORDER ESPRESSO & BAKERY',
  shortName: '오더에스프레소',
  description:
    '서울 강남 봉은사로의 작은 에스프레소 바 & 베이커리. 진한 에스프레소 한 잔과 갓 구운 빵으로 채우는 조용한 하루. ORDER ESPRESSO & BAKERY.',
  streetAddress: '봉은사로82길 27, 1층 · 지1층',
  addressLocality: '강남구',
  addressRegion: '서울',
  postalCode: '06122',
  addressCountry: 'KR',
  /** Approximate coordinates near 삼성중앙역 5번 출구. */
  latitude: 37.5109,
  longitude: 127.0533,
  telephone: '+82-507-1415-2531',
  telephoneDisplay: '0507-1415-2531',
  priceRange: '₩₩',
  instagram: 'https://www.instagram.com/order_espresso.bakery',
  smartStore: 'https://smartstore.naver.com/highorder',
  /** Naver Map search for turn-by-turn directions. */
  naverMap:
    'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%B4%89%EC%9D%80%EC%82%AC%EB%A1%9C82%EA%B8%B8%2027',
} as const;

export const openingHours = [
  {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:30',
    closes: '22:00',
  },
  {
    days: ['Saturday', 'Sunday'],
    opens: '09:00',
    closes: '21:30',
  },
] as const;
