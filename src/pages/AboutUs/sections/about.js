/*
  about.js — the /about-us page copy: hero, mission + stats, virtual tour and
  the six team members. Text and imagery verbatim from the reference About
  page. Data only; AboutUs.jsx owns layout.
*/

import heroBackground from '@/assets/images/about-hero.jpg';
import missionPhoto from '@/assets/images/about-mission.jpg';
import tourPhoto from '@/assets/images/about-tour.jpg';
import johnPhoto from '@/assets/images/about-team-john.jpg';
import jamesPhoto from '@/assets/images/about-team-james.jpg';
import michaelPhoto from '@/assets/images/about-team-michael.jpg';
import davidPhoto from '@/assets/images/about-team-david.jpg';
import robertPhoto from '@/assets/images/about-team-robert.jpg';
import williamPhoto from '@/assets/images/about-team-william.jpg';

import {
  GridNineIcon,
  ThumbsUpIcon,
  HeadsetIcon,
  XLogoIcon,
  InstagramLogoIcon,
  BehanceLogoIcon,
  LinkedinLogoIcon,
} from '../icons';

export const hero = {
  heading: 'About Us',
  lead: 'We are a subscription-based web design agency, delivering high-quality, scalable websites designed to drive results and grow your business.',
  background: heroBackground,
};

export const mission = {
  heading: 'We help business grow online',
  paragraphs: [
    'Our mission is to provide businesses with dedicated, scalable design teams that build high-converting websites, all through a simple subscription model.',
    'We strive for continuous innovation and exceptional quality in every project we complete.',
  ],
  image: missionPhoto,
};

export const stats = [
  { value: '500+', label: 'Projects delivered', Icon: GridNineIcon },
  { value: '99%', label: 'Customer satisfaction', Icon: ThumbsUpIcon },
  { value: '24/7', label: 'Support availability', Icon: HeadsetIcon },
];

export const tour = {
  heading: 'Take a virtual tour',
  lead: 'Explore how we work and see the impact of our designs through our engaging virtual tour.',
  image: tourPhoto,
};

const memberSocials = [
  { label: 'X', href: 'https://x.com', Icon: XLogoIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramLogoIcon },
  { label: 'Behance', href: 'https://behance.net', Icon: BehanceLogoIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinLogoIcon },
];

export const team = {
  heading: 'Meet the team',
  lead: 'Our talented team of designers and developers are dedicated to bringing your vision to life.',
  members: [
    { name: 'John Smith', role: 'Lead Designer', photo: johnPhoto, socials: memberSocials },
    { name: 'James Turner', role: 'Senior Web Developer', photo: jamesPhoto, socials: memberSocials },
    { name: 'Michael Johnson', role: 'Project Manager', photo: michaelPhoto, socials: memberSocials },
    { name: 'David Miller', role: 'UI/UX Specialist', photo: davidPhoto, socials: memberSocials },
    { name: 'Robert White', role: 'Front-End Developer', photo: robertPhoto, socials: memberSocials },
    { name: 'William Harris', role: 'Design Strategist', photo: williamPhoto, socials: memberSocials },
  ],
};
