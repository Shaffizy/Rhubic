/*
  legal.js — the /legal page copy: hero + the three policy cards.
  Text and card order verbatim from the reference page; hero photo is the
  same asset the Case Studies hero uses. Data only; Legal.jsx owns layout.
*/

import heroBackground from '@/assets/images/cs-hero.jpg';

export const hero = {
  heading: 'Legal Pages',
  lead: 'Please review our legal policies, including terms, privacy, and disclaimer, to understand how we protect your rights and data.',
  background: heroBackground,
};

export const policyPages = [
  { slug: 'cookie-policy', title: 'Cookie Policy' },
  { slug: 'terms-of-service', title: 'Terms of Service' },
  { slug: 'privacy-policy', title: 'Privacy Policy' },
];
