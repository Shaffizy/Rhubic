/*
  Home — the landing page. Owns only the ORDER of its sections; each section
  owns its own content and layout.
  Section order (restore as you build):
    Hero, TrustMarquee, FeatureBento, WhyChooseUs, ServicesShowcase,
    TestimonialMarquee, Pricing, FAQAccordion, FinalCTA
*/

import Hero from './sections/Hero/Hero';
import TrustMarquee from './sections/TrustMarquee';
import FeatureBento from './sections/FeatureBento';
import WhyChooseUs from './sections/WhyChooseUs';
import ServicesShowcase from './sections/ServicesShowcase';
import TestimonialMarquee from './sections/TestimonialMarquee';
import Pricing from './sections/Pricing';
import FAQAccordion from './sections/FAQAccordion';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <FeatureBento />
      <WhyChooseUs />
      <ServicesShowcase />
      <TestimonialMarquee />
      <Pricing />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}