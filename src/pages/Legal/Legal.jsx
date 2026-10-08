/*
  Legal — the /legal index. Two sections: ghost-image hero and a 3-up grid
  of policy cards (Cookie Policy, Terms of Service, Privacy Policy) linking
  to their /legal/:slug detail pages.
  Owns: page layout and the card glyph.
  Does NOT own: the shell (Navbar/Footer in App.jsx), the copy
  (sections/legal.js) or reveal timing (index.css + useReveal — wired here
  via data-reveal attributes).
  Depends on: RevealHeading, react-router Link, sections/legal.js.
*/

import { Link } from 'react-router-dom';

import RevealHeading from '@/components/RevealHeading';

import { hero, policyPages } from './sections/legal';
import styles from './Legal.module.css';

/* Phosphor Note (thin) — the glyph each policy card wears in the reference. */
function NoteIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M92,96a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,96Zm4,36h64a4,4,0,0,0,0-8H96a4,4,0,0,0,0,8Zm32,24H96a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM220,48V156.69a11.9,11.9,0,0,1-3.52,8.48l-51.31,51.32a11.93,11.93,0,0,1-8.48,3.51H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H156V160a4,4,0,0,1,4-4h52V48a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212Zm158.35-48H164v42.35Z" />
    </svg>
  );
}

export default function Legal() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="hero">
        <div className={styles.heroBackdrop} aria-hidden="true">
          <img className={styles.heroImage} src={hero.background} alt="" />
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

      <section className={styles.section} id="pages">
        <div className={styles.container}>
          <div className={styles.grid} data-reveal>
            {policyPages.map((page) => (
              <Link key={page.slug} to={`/legal/${page.slug}`} className={styles.card}>
                <NoteIcon className={styles.cardIcon} />
                <h2 className={styles.cardTitle}>{page.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
