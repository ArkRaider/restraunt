import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import AboutPreview from './components/AboutPreview';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
