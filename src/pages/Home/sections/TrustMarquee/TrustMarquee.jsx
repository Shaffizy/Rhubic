/*
  TrustMarquee — the infinite image strip between Hero and FeatureBento.
  Owns: the masked viewport, the duplicated track, and the CSS scroll loop.
  Does NOT own: the image list (images.js) or where this section sits (Home.jsx).
  Depends on: images.js.
*/

import { stripImages } from './images';
import styles from './TrustMarquee.module.css';

export default function TrustMarquee() {
  const cycle = [...stripImages, ...stripImages];

  return (
    <section className={styles.section} aria-label="Selected work" data-reveal>
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {cycle.map((image, index) => (
            <li
              key={`${image.src}-${index}`}
              className={styles.item}
              /* Second cycle is a loop duplicate — hidden from screen readers. */
              aria-hidden={index >= stripImages.length ? 'true' : undefined}
            >
              <img className={styles.image} src={image.src} alt={image.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
