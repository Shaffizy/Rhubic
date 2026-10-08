/*
  PageLoader — the full-screen load overlay, shown once on first visit.
  Eight cubes fly in and stack (one 3s cycle), the ground plane flashes,
  then the overlay fades and releases the page. Recolored from the blue
  sample the user provided to the brand purple (--primary = #5800b0,
  --primary-light = #7a2fe0, mask walls follow the dark page background).
  Owns: the hide timer and the body scroll lock while it is up.
  Does NOT own: the shell (mounted once in App.jsx, outside Routes).
  Reduced motion: skipped entirely — the site shows immediately.
*/

import { useEffect, useState } from 'react';

import styles from './PageLoader.module.css';

const SHOW_MS = 3100; // one full 3s cycle, then start the fade
const FADE_MS = 600; // matches the overlay's opacity transition

export default function PageLoader() {
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (reduced) return undefined;

    document.body.style.overflow = 'hidden';
    const hideTimer = window.setTimeout(() => setGone(true), SHOW_MS);
    const releaseTimer = window.setTimeout(() => {
      document.body.style.overflow = '';
    }, SHOW_MS + FADE_MS);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(releaseTimer);
      document.body.style.overflow = '';
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div className={`${styles.overlay} ${gone ? styles.gone : ''}`} aria-hidden="true">
      <div className={styles.loader}>
        <div className={`${styles.box} ${styles.box0}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box1}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box5}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box6}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box7}`}>
          <div />
        </div>
        <div className={styles.ground}>
          <div />
        </div>
      </div>
    </div>
  );
}
