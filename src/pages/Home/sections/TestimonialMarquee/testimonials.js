/*
  testimonials.js — heading, lead and the four quotes for the homepage
  testimonial carousel. Avatars are the reference's own images, already in
  the repo (matched by exact pixel dimensions).
*/

import project05 from '@/assets/images/project-05.jpg';
import project08 from '@/assets/images/project-08.jpg';
import project10 from '@/assets/images/project-10.jpg';
import project12 from '@/assets/images/project-12.jpg';

export const heading = "Don't take our word for it";

export const lead =
  'See what our happy clients have to say about our subscription-based web design services.';

export const testimonials = [
  {
    quote:
      "We've seen a significant improvement on our conversion rate after switching to their service. Highly recommend!",
    name: 'Emily Carter',
    role: 'E-commerce Founder',
    avatar: project12,
  },
  {
    quote:
      'The best decision we made for our startup—the experience was fast, reliable, and they always deliver stunning designs!',
    name: 'Jake Thompson',
    role: 'SaaS CEO',
    avatar: project08,
  },
  {
    quote:
      'A game changer! We get professional-quality design work on demand. The designs are great and always delivered faster than we expect.',
    name: 'Sarah Lin',
    role: 'Marketing Director',
    avatar: project05,
  },
  {
    quote:
      "They've made scaling design output effortless for our agency. Their designers are responsive, quick to iterate, and always nail the brief.",
    name: 'David Miller',
    role: 'Agency Owner',
    avatar: project10,
  },
];
