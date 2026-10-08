/*
  reasons.js — the three reasons in "Why choose us?", in reference order.
  Copy and icon mapping only; layout lives in WhyChooseUs.jsx.
*/

import { ContractIcon, ConversionIcon, DeliveryIcon } from './icons';

export const heading = 'Why choose us?';

export const lead =
  'We make web design simple, fast, and scalable with a subscription model that puts you in control.';

export const reasons = [
  {
    Icon: ContractIcon,
    title: 'No contracts',
    text: 'Pause or cancel anytime—flexibility for your business.',
  },
  {
    Icon: ConversionIcon,
    title: 'Conversion focused',
    text: 'We design with one goal: turning visitors into buyers.',
  },
  {
    Icon: DeliveryIcon,
    title: 'Rapid delivery',
    text: 'Most design requests are completed within 48 hours.',
  },
];
