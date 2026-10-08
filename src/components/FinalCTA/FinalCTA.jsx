/*
  FinalCTA — the shared "Let's work together" closing band (Home step 9;
  any page can mount it). Owns the whole band: section wrapper, the bordered
  card, the grid backdrop (opacity .8) and the centred copy + CTA.
  Does NOT own: the pill/button styling (shared Button, local module) or the
  backdrop math (reimplemented here from Hero's, CTA-sized).
  Depends on: Button; hero-grid.png (verified byte-identical to the
  reference's FinalCTA grid asset).
*/

import Button from '@/components/Button';
import RevealHeading from '@/components/RevealHeading';

import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section} id="call-to-action">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.backdrop} aria-hidden="true">
            <div className={styles.stage}>
              <div className={styles.grid} />
              <div className={styles.glow} />
            </div>
          </div>

          <div className={styles.texts} data-reveal>
            <div className={styles.pill}>
              <span className={styles.pillDot} aria-hidden="true" />
              <span className={styles.pillText}>3 spots left for Q2</span>
            </div>

            <RevealHeading className={styles.heading}>
              Let&apos;s work together
            </RevealHeading>

            <p className={styles.lead}>
              Join our subscription service and get your dream website designed and launched by
              experts. Start today, scale tomorrow!
            </p>

            <div className={styles.spacer} aria-hidden="true" />

            <Button to="/contact">Book your free intro call</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
