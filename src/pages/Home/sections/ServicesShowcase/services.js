/*
  services.js — the four service pills in the showcase ticker and the three
  stat cards, in reference order. Data + icon mapping only.
*/

import { BrowserIcon, ChartUpIcon, FunnelIcon, MegaphoneIcon, MonitorIcon, PenNibIcon, PencilIcon } from './icons';

export const heading = 'Our designers work with a wide range of projects';

export const lead =
  'From landing pages to full websites, UI/UX to ongoing updates—our expert designers bring your vision to life, hassle-free.';

export const servicePills = [
  { slug: 'brand-identity', Icon: MonitorIcon, title: 'Brand Identity' },
  { slug: 'graphic-design', Icon: PencilIcon, title: 'Graphic Design' },
  { slug: 'framer-design', Icon: FunnelIcon, title: 'Framer Design' },
  { slug: 'web-design', Icon: BrowserIcon, title: 'Web Design' },
  { slug: 'digital-advertising', Icon: MegaphoneIcon, title: 'Digital Advertising' },
];

export const stats = [
  { Icon: ChartUpIcon, figure: '30%', label: 'More conversions' },
  { Icon: PenNibIcon, figure: '50%', label: 'More engagement' },
  { Icon: PenNibIcon, figure: '99%', label: 'Customer satisfaction' },
];

/* The showcase photo — already in the repo, same file as the reference's
   "Agency Workspace" image (3632x4540). */
export { default as showcaseImage } from '@/assets/images/project-02.jpg';
