/*
  ServicesShowcase — the "wide range of projects" band: centred heading +
  lead, a scrolling row of service pills, the showcase photo, then the
  30%/50%/99% stat row.
  Owns: section layout, the ticker loop, and which pill/stat sits where.
  Does NOT own: glyph styling (icons.jsx) or the copy (services.js).
  Depends on: services.js; pill links point at the Services route.
*/

import { Link } from 'react-router-dom';

import RevealHeading from '@/components/RevealHeading';

import { heading, lead, servicePills, showcaseImage, stats } from './services';
import styles from './ServicesShowcase.module.css';

function ServiceTicker() {
  const cycle = [...servicePills, ...servicePills];

  return (
    <div className={styles.tickerViewport} aria-hidden="true" data-reveal>
      <ul className={styles.tickerTrack}>
        {cycle.map((pill, index) => (
          <li key={`${pill.slug}-${index}`}>
            <Link className={styles.pill} to="/services" tabIndex={-1}>
              <span className={styles.pillIconWrap}>
                <pill.Icon className={styles.pillIcon} />
              </span>
              <span className={styles.pillTitle}>{pill.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesShowcase() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.titleBlock} data-reveal>
          <RevealHeading className={styles.heading}>{heading}</RevealHeading>
          <p className={styles.lead}>{lead}</p>
        </div>

        <div className={styles.content}>
          <ServiceTicker />

          <div className={styles.photo} data-reveal>
            <img src={showcaseImage} alt="Agency Workspace" loading="lazy" />
          </div>

          <div className={styles.stats} data-reveal>
            {stats.map((stat) => (
              <div className={styles.statCard} key={stat.label}>
                <span className={styles.statBadge}>
                  <stat.Icon className={styles.statGlyph} />
                </span>
                <div className={styles.statTexts}>
                  <h3 className={styles.statFigure}>{stat.figure}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
