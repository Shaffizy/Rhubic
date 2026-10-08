/*
  TestimonialMarquee — the "Don't take our word for it" band: a scroll-snap
  carousel of quote cards inside a bordered shell, then the dimmed partner
  logo ticker.
  Owns: section layout, carousel state (prev/next + at-start), logo loop.
  Does NOT own: the quotes glyph (icons.jsx), the copy (testimonials.js) or
  the logo list (partnerLogos.js).
  Depends on: react (hooks), the three data/icon files above.
*/

import { useCallback, useEffect, useRef, useState } from 'react';

import { ChevronIcon } from '@/assets/icons';
import RevealHeading from '@/components/RevealHeading';

import { clientLogos } from './partnerLogos';
import { heading, lead, testimonials } from './testimonials';
import { QuotesIcon } from './icons';
import styles from './TestimonialMarquee.module.css';

export default function TestimonialMarquee() {
  const listRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncArrows = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    setAtStart(list.scrollLeft <= 8);
    setAtEnd(list.scrollLeft >= list.scrollWidth - list.clientWidth - 8);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    list.addEventListener('scroll', syncArrows, { passive: true });
    syncArrows();
    return () => list.removeEventListener('scroll', syncArrows);
  }, [syncArrows]);

  const page = (direction) => {
    const list = listRef.current;
    if (!list) return;
    list.scrollBy({ left: direction * list.clientWidth, behavior: 'smooth' });
  };

  const logoCycle = [...clientLogos, ...clientLogos];

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.titleBlock} data-reveal>
          <RevealHeading className={styles.heading}>{heading}</RevealHeading>
          <p className={styles.lead}>{lead}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card} data-reveal>
            <div className={styles.carousel}>
              <ul className={styles.track} ref={listRef} aria-live="polite">
                {testimonials.map((item, index) => (
                  <li
                    key={item.name}
                    className={styles.slide}
                    aria-label={`${index + 1} of ${testimonials.length}`}
                  >
                    <figure className={styles.quoteCard}>
                      <QuotesIcon className={styles.quoteIcon} />
                      <blockquote className={styles.quoteText}>{item.quote}</blockquote>
                      <figcaption className={styles.author}>
                        <span className={styles.avatar}>
                          <img src={item.avatar} alt="" />
                        </span>
                        <span className={styles.authorTexts}>
                          <span className={styles.authorName}>{item.name}</span>
                          <span className={styles.authorRole}>{item.role}</span>
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>

              <div className={styles.controls}>
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className={`${styles.arrow} ${styles.arrowPrev}`}
                  data-hidden={atStart ? 'true' : undefined}
                  onClick={() => page(-1)}
                >
                  <ChevronIcon className={styles.arrowIconLeft} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className={styles.arrow}
                  data-hidden={atEnd ? 'true' : undefined}
                  onClick={() => page(1)}
                >
                  <ChevronIcon className={styles.arrowIconRight} />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.logoCloud} aria-hidden="true">
            {/* Reveal targets the viewport, not .logoCloud: the cloud keeps
               its own 0.5 opacity, which a reveal on it would override. */}
            <div className={styles.logoViewport} data-reveal>
              <ul className={styles.logoTrack}>
                {logoCycle.map((logo, index) => (
                  <li
                    key={`${logo.alt}-${index}`}
                    className={styles.logoItem}
                    aria-hidden={index >= clientLogos.length ? 'true' : undefined}
                  >
                    <img className={styles.logo} src={logo.src} alt={logo.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
