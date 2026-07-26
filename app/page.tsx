import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { Story } from '@/components/story';
import { MenuSection } from '@/components/menu-section';
import { StoreSection } from '@/components/store-section';
import { Gallery } from '@/components/gallery';
import { Reviews } from '@/components/reviews';
import { Visit } from '@/components/visit';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Story />
        <MenuSection />
        <StoreSection />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
