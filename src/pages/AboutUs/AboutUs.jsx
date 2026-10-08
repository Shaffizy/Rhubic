/*
  AboutUs — the /about-us page. Four sections: ghost-image hero, mission
  split (photo + copy) with an icon-stat row, virtual-tour banner with a
  play overlay and the six-member team grid.
  Owns: page layout and section markup.
  Does NOT own: the shell (Navbar/Footer in App.jsx), the copy
  (sections/about.js), the glyphs (icons.jsx) or reveal timing (index.css +
  useReveal — wired here via data-reveal attributes).
  Depends on: RevealHeading, sections/about.js and icons.jsx. */

import RevealHeading from '@/components/RevealHeading';

import { hero, mission, stats, tour, team } from './sections/about';
import { PlayCircleIcon } from './icons';
import styles from './AboutUs.module.css';

export default function AboutUs() {
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

      <section className={styles.section} id="our-mission">
        <div className={styles.missionContainer}>
          <div className={styles.missionContent} data-reveal>
            <div className={styles.missionImageBox}>
              <img className={styles.missionImage} src={mission.image} alt="Agency workspace" />
            </div>

            <div className={styles.missionTexts}>
              <RevealHeading className={styles.h2}>{mission.heading}</RevealHeading>
              {mission.paragraphs.map((paragraph) => (
                <p className={styles.lead} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.stats} data-reveal>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <span className={styles.statBadge}>
                  <stat.Icon className={styles.statIcon} />
                </span>
                <span className={styles.statTexts}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="our-studio">
        <div className={styles.tourContainer}>
          <div className={styles.tourTitleBlock} data-reveal>
            <RevealHeading className={styles.h2}>{tour.heading}</RevealHeading>
            <p className={styles.lead}>{tour.lead}</p>
          </div>

          <div className={styles.tour} data-reveal>
            <img className={styles.tourImage} src={tour.image} alt="" />
            <div className={styles.tourOverlay}>
              <PlayCircleIcon className={styles.playIcon} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.teamSection}`} id="our-team">
        <div className={styles.teamContainer}>
          <div className={styles.teamHeader} data-reveal>
            <RevealHeading className={styles.h2}>{team.heading}</RevealHeading>
            <p className={`${styles.lead} ${styles.teamLead}`}>{team.lead}</p>
          </div>

          <div className={styles.teamGrid} data-reveal>
            {team.members.map((member) => (
              <article className={styles.member} key={member.name}>
                <img className={styles.memberPhoto} src={member.photo} alt={member.name} />
                <div className={styles.memberNameJob}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
                <div className={styles.socials}>
                  {member.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <social.Icon className={styles.socialIcon} />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
