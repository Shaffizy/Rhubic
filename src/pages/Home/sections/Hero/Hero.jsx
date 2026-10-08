/*
  Hero — the opening band: headline, supporting copy, one CTA and a trust line,
  over a perspective grid that recedes to the horizon.
  Owns: nothing stateful.
  Does NOT own: the navbar that floats above it.
*/

import Button from '@/components/Button';
import RevealHeading from '@/components/RevealHeading';
import { StarIcon } from '@/assets/icons';

import GooeyReveal from './Gooeyreveal';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">

      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.stage}>

          <div className={styles.grid} />
          <div className={styles.glow} />
        </div>
      </div>

      <GooeyReveal />

      <div className={styles.container}>
        <div className={styles.texts}>
          <div className={styles.pill}>
            <span className={styles.pillDot} aria-hidden="true" />
            <span className={styles.pillText}>3 spots left for Q2</span>
          </div>
          {/* data-reveal on the headline itself: the hero is above the fold,
              so useReveal's observer fires it on mount and the words stagger
              in on load, like the reference's hero. */}
          <RevealHeading as="h1" className={styles.headline} data-reveal>
            Websites that convert visitors into buyers
          </RevealHeading>
          <p className={styles.lead}>
            Get a high-performing website designed to turn clicks into customers, all with a simple,
            stress-free subscription&mdash;no contracts, no hassle.
          </p>
          <div className={styles.spacer} aria-hidden="true" />
        </div>

        <div className={styles.actions}>
          <Button to="/contact">Get template for free</Button>

          <div className={styles.rating}>
            <div className={styles.ratingColumn}>
              <div className={styles.stars} aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} className={styles.star} />
                ))}
              </div>
              <span className={styles.ratingText}>300+ founders trust us</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}