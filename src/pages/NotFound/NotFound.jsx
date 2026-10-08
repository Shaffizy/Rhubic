/*
  NotFound — the catch-all route's 404 page. One full-viewport hero:
  ghost backdrop, "Page not found", the reason line and a secondary
  button back to the homepage.
  Owns: page layout.
  Does NOT own: the shell (Navbar/Footer in App.jsx) or reveal timing
  (index.css + useReveal — wired here via data-reveal attributes).
  Depends on: RevealHeading, the shared Button (secondary variant).
*/

import Button from '@/components/Button';
import RevealHeading from '@/components/RevealHeading';

import heroBackground from '@/assets/images/nf-hero.jpg';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="hero">
        <div className={styles.heroBackdrop} aria-hidden="true">
          <img className={styles.heroImage} src={heroBackground} alt="" />
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.titleBlock} data-reveal>
            <RevealHeading as="h1" className={styles.h1}>
              Page not found
            </RevealHeading>
            <p className={styles.lead}>
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Button variant="secondary" to="/">
              Return to homepage
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
