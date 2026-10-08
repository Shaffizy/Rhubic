/*
  CaseStudies — the /case-studies page. Two sections: a ghost-image hero
  and a single-column list of full-width case study cards (photo left,
  title/mission/tags right).
  Owns: page layout and card markup.
  Does NOT own: the shell (Navbar/Footer in App.jsx), the copy
  (sections/cases.js) or reveal timing (index.css + useReveal — wired here
  via data-reveal attributes).
  Depends on: RevealHeading, react-router Link, sections/cases.js.
*/

import { Link } from 'react-router-dom';

import RevealHeading from '@/components/RevealHeading';

import { hero, caseItems } from './sections/cases';
import styles from './CaseStudies.module.css';

export default function CaseStudies() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="hero">
        <div className={styles.heroBackdrop} aria-hidden="true">
          <div className={styles.heroImageBox}>
            <img className={styles.heroImage} src={hero.background} alt="" />
          </div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.titleBlock} data-reveal>
            <RevealHeading as="h1" className={styles.h1}>
              {hero.heading}
            </RevealHeading>
            <p className={styles.lead}>{hero.lead}</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="case-studies">
        <div className={styles.container}>
          <div className={styles.grid} data-reveal>
            {caseItems.map((item) => (
              /* TODO: point at /case-studies/:slug once the detail pages exist;
                 for now stay on the page rather than hit an unmatched route. */
              <Link key={item.slug} to="/case-studies" className={styles.card}>
                <span className={styles.cardImageWrap}>
                  <img className={styles.cardImage} src={item.image} alt={item.title} />
                </span>
                <div className={styles.cardTexts}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardMission}>{item.mission}</p>
                  <span className={styles.spacer} aria-hidden="true" />
                  <div className={styles.tags}>
                    {item.tags.map((tag) => (
                      <span className={styles.tag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
