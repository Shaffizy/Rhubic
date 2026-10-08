/*
  cases.js — the /case-studies page copy: hero + the six case study cards
  (slug, title, mission, tags, thumbnail). Verbatim from the reference page.
  Data only; CaseStudies.jsx owns layout.
*/

import heroBackground from '@/assets/images/cs-hero.jpg';
import greentechImage from '@/assets/images/cs-greentech.jpg';
import healthsyncImage from '@/assets/images/cs-healthsync.jpg';
import ecobrandsImage from '@/assets/images/cs-ecobrands.jpg';
import fitnessProImage from '@/assets/images/cs-fitness-pro.jpg';
import urbanApparelImage from '@/assets/images/cs-urban-apparel.jpg';
import brightmindsImage from '@/assets/images/cs-brightminds.jpg';

export const hero = {
  heading: 'Case Studies',
  lead: 'Discover how our solutions have transformed businesses. Read our case studies to see real results and success stories.',
  background: heroBackground,
};

export const caseItems = [
  {
    slug: 'greentech-solutions',
    title: 'GreenTech Solutions',
    mission: 'Increased customer engagement by 30% and streamlined digital presence.',
    tags: ['Web Design', 'Figma', 'Responsive'],
    image: greentechImage,
  },
  {
    slug: 'healthsync',
    title: 'HealthSync',
    mission: 'Improved user experience by 40% and streamlined appointment scheduling.',
    tags: ['UI/UX Design', 'Figma', 'A/B Testing'],
    image: healthsyncImage,
  },
  {
    slug: 'ecobrands',
    title: 'EcoBrands',
    mission: 'Enhanced website engagement by 35% and improved brand messaging.',
    tags: ['Brand Strategy', 'User Interface', 'Framer'],
    image: ecobrandsImage,
  },
  {
    slug: 'fitness-pro',
    title: 'Fitness Pro',
    mission: 'Increased member sign-ups by 50% and streamlined class booking.',
    tags: ['Booking System', 'A/B Testing', 'UX Design'],
    image: fitnessProImage,
  },
  {
    slug: 'urban-apparel',
    title: 'Urban Apparel',
    mission: 'Boosted online sales by 40% and enhanced user navigation',
    tags: ['E-commerce', 'Optimization', 'Framer'],
    image: urbanApparelImage,
  },
  {
    slug: 'brightminds-academy',
    title: 'BrightMinds Academy',
    mission: 'Increased student enrollment by 45% and improved course discovery.',
    tags: ['Web Design', 'Online Course', 'UX Optimization'],
    image: brightmindsImage,
  },
];
