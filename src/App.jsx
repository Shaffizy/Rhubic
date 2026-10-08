/*
  App — the route table and the chrome shared by every page.
  Owns: which page renders at which URL, plus Navbar, Footer and ChatWidget.
  Does NOT own: any section's content or layout.
  Depends on: one page component per route, below.
*/

import { Route, Routes } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import CookieConsent from '@/components/CookieConsent';
import PageLoader from '@/components/PageLoader';
import useReveal from '@/hooks/useReveal';

import Home from '@/pages/Home/Home';
import Services from '@/pages/Services/Services';
import AboutUs from '@/pages/AboutUs/AboutUs';
import CaseStudies from '@/pages/CaseStudies/CaseStudies';
import Contact from '@/pages/Contact/Contact';
import Legal from '@/pages/Legal/Legal';
import { Policy } from '@/pages/Legal';
import NotFound from '@/pages/NotFound/NotFound';

export default function App() {
  // One observer over every [data-reveal] element of the current route.
  useReveal();

  return (
    <>
      {/* First-visit load screen: one 3s cube cycle, then fades away. */}
      <PageLoader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/legal/:slug" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {/* Mounted once, outside <Routes>, so it survives every page change. */}
      <ChatWidget />
      <CookieConsent />
    </>
  );
}