/*
  contact.js — the /contact page copy: hero + form (heading, intro, fields).
  Text verbatim from the reference page; the success line is Framer's
  standard form confirmation. Data only; Contact.jsx owns form state.
*/

import heroBackground from '@/assets/images/contact-hero.jpg';

export const hero = {
  heading: 'Contact',
  lead: 'We’d love to hear from you! Reach out for any questions, inquiries, or to start working together on your next project.',
  background: heroBackground,
};

export const form = {
  heading: 'Get in touch',
  intro: "Fill out the form below and our team will get back to you as soon as possible. Let's create something amazing together!",
  fields: [
    { name: 'Name', type: 'text', placeholder: 'Tunde Badmus' },
    { name: 'Email', type: 'email', placeholder: 'tunde@gmail.com' },
    { name: 'Message', type: 'textarea', placeholder: 'Message' },
  ],
  submitLabel: 'Submit',
  success: 'Thank you! Your submission has arrived!',
};
