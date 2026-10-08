/* projects.js — the twelve case studies. Category lives here so the filter on
   the CaseStudies page can be a real one rather than a visual placeholder. */

import project01 from '@/assets/images/project-01.jpg';
import project02 from '@/assets/images/project-02.jpg';
import project03 from '@/assets/images/project-03.jpg';
import project04 from '@/assets/images/project-04.jpg';
import project05 from '@/assets/images/project-05.jpg';
import project06 from '@/assets/images/project-06.jpg';
import project07 from '@/assets/images/project-07.jpg';
import project08 from '@/assets/images/project-08.jpg';
import project09 from '@/assets/images/project-09.jpg';
import project10 from '@/assets/images/project-10.jpg';
import project11 from '@/assets/images/project-11.jpg';
import project12 from '@/assets/images/project-12.jpg';

export const projects = [
  { src: project01, alt: 'Northwind landing page', category: 'Web design' },
  { src: project02, alt: 'Lumen Labs product page', category: 'Development' },
  { src: project03, alt: 'Fieldnote marketing site', category: 'Web design' },
  { src: project04, alt: 'Arcline case study', category: 'Branding' },
  { src: project05, alt: 'Brightside launch page', category: 'Web design' },
  { src: project06, alt: 'Documentation site', category: 'Development' },
  { src: project07, alt: 'Pricing page redesign', category: 'Web design' },
  { src: project08, alt: 'Mobile app landing page', category: 'Branding' },
  { src: project09, alt: 'Brand guidelines site', category: 'Branding' },
  { src: project10, alt: 'Waitlist page', category: 'Web design' },
  { src: project11, alt: 'Analytics dashboard', category: 'Development' },
  { src: project12, alt: 'E-commerce storefront', category: 'Development' },
];

/** Flat image list, for callers that only need src/alt (the Services gallery). */
export const projectImages = projects;