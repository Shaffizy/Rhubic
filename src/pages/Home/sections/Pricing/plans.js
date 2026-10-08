/*
  plans.js — pricing copy: split heading (left) + lead (right), the two
  tier cards, and the two extra blocks (Enterprise / Priority Requests).
  Data only; Pricing.jsx owns layout.
*/

export const heading = 'Pricing';

export const lead =
  "Transparent pricing, no surprises. Choose a plan that fits your needs and scale up whenever you're ready.";

export const plans = [
  {
    slug: 'landing-page',
    accent: false,
    name: 'Landing Page',
    description: 'A high-converting landing page designed to drive results.',
    price: '$2,497',
    unit: '/page',
    features: ['Unlimited requests', 'Figma file', 'Mobile responsive', '48-hour delivery'],
    cta: 'Request a quote',
  },
  {
    slug: 'dedicated-team',
    accent: true,
    name: 'Dedicated Team',
    description: 'Your own scalable design team on a monthly subscription.',
    price: '$4,497',
    unit: '/month',
    features: ['Unlimited requests', 'Figma file', 'Slack access', 'Ongoing revisions'],
    cta: 'Request a quote',
  },
];

export const enterprise = {
  name: 'Enterprise Plans',
  description: 'Custom solutions tailored to your business needs—contact us.',
  cta: 'Contact sales',
};

export const priority = {
  name: 'Priority Requests',
  description: 'Get your designs delivered even faster with priority support.',
  price: '$297',
  unit: '/request',
};
