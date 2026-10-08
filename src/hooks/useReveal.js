/*
  useReveal — arms scroll reveals for the current route.
  Owns: one IntersectionObserver over [data-reveal] elements — one-shot; an
  element gets data-revealed once and is unobserved.
  Does NOT own: the hiding CSS (index.css) or which elements opt in.
  Depends on: react (useEffect), react-router (useLocation re-arms on
  navigation so sections mounted by a route change are observed too).
*/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useReveal() {
  const location = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');

    // Reduced motion: show everything at once — no hiding, no animation
    // (index.css also drops the transition, this removes the initial state).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.setAttribute('data-revealed', ''));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    targets.forEach((el) => {
      if (!el.hasAttribute('data-revealed')) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
}
