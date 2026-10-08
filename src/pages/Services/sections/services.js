/*
  services.js — the /services page copy: hero heading + lead and the four
  service cards (title, description, thumbnail). Verbatim from the reference
  Services page. Data only; Services.jsx owns layout.
*/

import brandIdentity from '@/assets/images/service-brand-identity.jpg';
import graphicDesign from '@/assets/images/service-graphic-design.jpg';
import framerDesign from '@/assets/images/service-framer-design.jpg';
import webDesign from '@/assets/images/service-web-design.jpg';

export const heading = 'Services';

export const lead =
  'From branding to websites, we deliver high-impact design solutions that scale with your business—fast, flexible, and on demand.';

export const serviceItems = [
  {
    slug: 'brand-identity',
    title: 'Brand Identity',
    description:
      'Craft a strong, cohesive visual identity that sets your brand apart and builds lasting recognition.',
    image: brandIdentity,
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    description:
      'High-impact visuals for digital and print that elevate your brand and communicate with clarity.',
    image: graphicDesign,
  },
  {
    slug: 'framer-design',
    title: 'Framer Design',
    description:
      'Interactive, responsive websites built in Framer—blending clean design with powerful no-code functionality.',
    image: framerDesign,
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    description:
      'Custom websites designed to impress clients, convert, and scale—built with strategy, not just style.',
    image: webDesign,
  },
];

export { default as heroImage } from '@/assets/images/services-hero.jpg';
