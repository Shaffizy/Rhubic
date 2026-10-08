/*
  Services — the /services page. Two sections: a hero (ghosted backdrop
  image + centered h1/lead) and a two-column grid of service cards.
  Owns: page layout and card markup.
  Does NOT own: the shell (Navbar/Footer in App.jsx), the copy (sections/
  services.js), or reveal timing (index.css + useReveal — wired here via
  data-reveal attributes).
  Depends on: RevealHeading, react-router Link, sections/services.js.
*/

import { Link } from 'react-router-dom';

import RevealHeading from '@/components/RevealHeading';

import { heading, heroImage, lead, serviceItems } from './sections/services';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="hero">
        <div className={styles.heroBackdrop} aria-hidden="true">
          <div className={styles.heroImageBox}>
            <img className={styles.heroImage} src={heroImage} alt="" />
          </div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.titleBlock} data-reveal>
            <RevealHeading as="h1" className={styles.h1}>
              {heading}
            </RevealHeading>
            <p className={styles.lead}>{lead}</p>
          </div>
        </div>
      </section>

      <section className={styles.list} id="list">
        <div className={styles.listContainer}>
          <div className={styles.grid} data-reveal>
            {serviceItems.map((item) => (
              /* TODO: point at /services/:slug once the detail pages exist;
                 for now stay on the page rather than hit an unmatched route. */
              <Link key={item.slug} to="/services" className={styles.card}>
                <span className={styles.cardImageWrap}>
                  <img className={styles.cardImage} src={item.image} alt={item.title} />
                </span>
                <span className={styles.cardTexts}>
                  <span className={styles.cardTitle}>{item.title}</span>
                  <span className={styles.cardDescription}>{item.description}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
