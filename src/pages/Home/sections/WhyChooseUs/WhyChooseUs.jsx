/*
  WhyChooseUs — the "Why choose us?" band: centred heading + lead, then three
  icon-badge cards in a row with soft fading divider lines between them.
  Owns: section layout, card frames and the dividers.
  Does NOT own: the badge glyph styling (icons.jsx) or the copy (reasons.js).
  Depends on: reasons.js.
*/

import RevealHeading from '@/components/RevealHeading';

import { heading, lead, reasons } from './reasons';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-choose-us">
      <div className={styles.container}>
        <div className={styles.titleBlock} data-reveal>
          <RevealHeading className={styles.heading}>{heading}</RevealHeading>
          <p className={styles.lead}>{lead}</p>
        </div>

        <div className={styles.cards} data-reveal>
          {reasons.map((reason, index) => (
            <div className={styles.cardGroup} key={reason.title}>
              {index > 0 && (
                <div className={styles.divider} aria-hidden="true">
                  <span className={styles.dividerLine} />
                </div>
              )}
              <article className={styles.card}>
                <span className={styles.badge}>
                  <reason.Icon className={styles.badgeGlyph} />
                </span>
                <div className={styles.texts}>
                  <h4 className={styles.cardTitle}>{reason.title}</h4>
                  <p className={styles.cardBody}>{reason.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
